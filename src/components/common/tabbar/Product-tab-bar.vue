<template>
  <div id="productbar">
    <div class="productbarBottom">
      <TabBarItem class="tab-bar-item" path="" active-color="black">
        <template v-slot:slot-img>
          <img src="@/assets/img/tabbar/Home.svg" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/tabbar/Home2.svg" alt="">
        </template>
        <template v-slot:slot-text>
          <div>客服</div>
        </template>
      </TabBarItem>
      <TabBarItem class="tab-bar-item" path="">
        <template v-slot:slot-img>
          <img src="@/assets/img/tabbar/Category.svg" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/tabbar/Category2.svg" alt="">
        </template>
        <template v-slot:slot-text>
          <div>店铺</div>
        </template>
      </TabBarItem>
      <TabBarItem class="tab-bar-item" path="">
        <template v-slot:slot-img>
          <img src="@/assets/img/tabbar/Category.svg" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/tabbar/Category2.svg" alt="">
        </template>
        <template v-slot:slot-text>
          <div>收藏</div>
        </template>
      </TabBarItem>
      <TabBarItem class="tab-bar-item" path="">
        <template v-slot:slot-text>
          <div class="center-text1" @click="intoCart(goodsInfo)">加入购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem class="tab-bar-item" path="">
        <template v-slot:slot-text>
          <div class="center-text2">购买</div>
        </template>
      </TabBarItem>
    </div>
    <ProduvtAbout class="produvtabout">
      <template v-slot:detail-swiper>
        <div class="productswiper">
          <img class="productimg" :src="goodsInfo.showLarge.img" alt="">
        </div>
      </template>
      <template v-slot:detail-title>
        <p class="producttitle">{{goodsInfo.title}}</p>
      </template>
      <template v-slot:detail-price>
        <p class="productprice"><span class="nowPrice">￥{{goodsInfo.price}}</span><span class="oldPrice">{{goodsInfo.orgPrice}}</span></p>
      </template>
      <template v-slot:detail-num>
        <div class="sellNum">
          <p>销量{{goodsInfo.sale}}</p>
          <p>收藏{{goodsInfo.cfav}}人</p>
          <p>72小时发货</p>
        </div>
      </template>
      <template v-slot:detail-selectlist>
        <div class="productselect">
          <input type="checkbox" checked disabled>延误必赔
          <input type="checkbox" checked disabled>退货补运费
          <input type="checkbox" checked disabled>全国包邮
          <input type="checkbox" checked disabled>7天无理由退货
        </div>
      </template>
    </ProduvtAbout>
    <NavBar class="navbar">
      <template v-slot:left>
        <div id="backBtn" @click="backRecent">&lt;</div>
      </template>
      <template v-slot:center>
        <div id="navMiddle">
          <ul>
            <li v-for="(item,index) in tabList" :key="index" @click="showBottom(index)" :class="{activeColor:colorIndex === index}">{{item}}</li>
          </ul>
        </div>
      </template>
    </NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import TabBarItem from './Tab-bar-item'
  import NavBar from "../navBar/NavBar";
  import ProduvtAbout from "../ProduvtAbout";
  import SwiperA from "../SwiperA";
  export default {
    name: "Product-tab-bar",
    components: {
      TabBarItem,
      NavBar,
      ProduvtAbout,
      SwiperA
    },
    data(){
      return {
        colorIndex:0,
        tabList:["商品","参数","评论","推荐"],
        large:{},
        goodsTitle:"",
        price:"",
        orgPrice:"",
        sale:""
      }
    },
    props:{
      goodsInfo:{
        type:Object,
      }
    },
    methods:{
      backRecent(){
        this.$router.back(-1)
      },
      showBottom(index){
        this.colorIndex=index
      },
      intoCart(goodsInfo){
        let goodsIndex = this.$store.state.goodsList.findIndex(item=>item.iid==goodsInfo.iid)
        //如果在购物车列表中找到了iid和现在要添加到购物车商品的idd相同的商品（即goodsIndex不等于-1），
        // 则需要将购物车中商品的数目加1
        //如果没找到，则需要将商品信息都添加到购物车
        console.log(goodsIndex)
        if (goodsIndex != -1){
          this.$store.state.goodsList[goodsIndex].counter += 1
          // this.$store.commit("increGoodsList",goodsInfo)
        }else{
          goodsInfo.counter=1
          this.$store.commit("increGoodsList",goodsInfo)
        }
        console.log(this.$store.state.goodsList)
        console.log("已添加到购物车")
      }
    },

    created() {
      // console.log(this.goodsInfo.showLarge)

    },
    mounted() {
      /*this.large=this.goodsInfo.showLarge
      this.goodsTitle=this.goodsInfo.title
      this.price=this.goodsInfo.price
      this.orgPrice=this.goodsInfo.orgPrice
      this.sale=this.goodsInfo.sale
      console.log(this.goodsInfo)*/
    }
  }
</script>

<style scoped>
  #productbar{
    padding-bottom: 49px;
  }
  .navbar{
    background: #f6f6f6;
  }
  .productbarBottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
    z-index: 9;
  }
  .tab-bar-item > img {
    width: 20px;
    height: 20px;
  }
  .center-text1{
    padding:18px 5px;
  }
  .center-text2{
    padding:18px 15px;
  }
  .center-text1{
    background: rgb(255,221,16);
  }
  .center-text2{
    background: rgb(255,119,155);
  }
  #navMiddle>ul{
    display: flex;
    justify-content: space-around;
    color: black;
    list-style: none;
  }
  #backBtn{
    margin-left: 10px;
    font-size: 25px;
  }
  .produvtabout{
    margin-top: 44px;
    z-index: 1;
  }
  .produvtabout,.producttitle,.productprice,.sellNum,.productselect{
    padding: 5px;
  }
  .productswiper{
    height: 350px;
  }
  .productswiper>.productimg{
    width: 100%;
    height: 100%;
  }
  .nowPrice{
    color: #ff8198;
  }
  .oldPrice{
    color: rgb(197,198,199);
    text-decoration: line-through;
  }
  .sellNum{
    display: flex;
    justify-content: space-between;
  }
  .productselect{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  .activeColor{
    color: #ff8198;
  }
</style>
