<template>
  <div>
    <NavBar class="cart-nav">
      <template v-slot:center>
        购物车（{{goodsCounter}}）
      </template>
    </NavBar>
    <Tabbar></Tabbar>
    <div class="cartList">
      <CartItem class="cartitem" v-for="(item,index) in goodsList" :key="index">
        <template v-slot:goodsSelect>
          <input type="checkbox" :checked="checkedIds.indexOf(item.iid)>=0" @click="checkedOne(item.iid)">{{item.shopName}}
        </template>
        <template v-slot:goodsContent>
          <div class="goodscontent">
            <div class="content-left">
              <img :src="item.show.img"
                   alt="">
            </div>
            <div class="content-right">
              <p class="goodsTitle">{{item.title}}</p>
              <div class="content-bottom">
                <div class="left"><span>￥{{item.price}}</span></div>
                <div class="right">
                  <span class="tag" @click="decrement(index)">-</span>
                  <span>{{item.counter}}</span>
                  <span class="tag" @click="increment(index)">+</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CartItem>
    </div>
    <div class="bottom-fixed">
      <div class="bfixed-wrap">
        <div class="bfixed-left">
          <input type="checkbox" :checked="checkedIds.length===goodsList.length" @click="checkedAll">全选
        </div>
        <div class="bfixed-right">
          <span>合计<span class="allPrice">￥{{totalPrice.toFixed(2)}}</span></span>
          <span class="countBtn">结算</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Tabbar from "../../components/common/tabbar/Tabbar";
  import NavBar from "../../components/common/navBar/NavBar";
  import CartItem from "../../components/common/Cart-item"

  export default {
    name: "ShopCart",
    data(){
      return{
        checkedIds:[],
        isCheckedAll:false,
        goodsList: this.$store.state.goodsList
      }
    },
    components: {
      Tabbar, NavBar, CartItem
    },
    computed:{
      totalPrice(){
        let totalPrice=0
        for (let goods of this.goodsList ){
          if (this.checkedIds.indexOf(goods.iid)>=0){
            totalPrice+=goods.price * goods.counter
          }
        }
        return totalPrice
      },
      goodsCounter(){
        let goodsCounter=0;
        goodsCounter=this.goodsList.length
        return goodsCounter
      }
    },
    methods:{
      decrement(index){
        this.goodsList[index].counter--
      },
      increment(index){
        this.goodsList[index].counter++
      },
      //选择某一条购物车中的内容
      checkedOne(goodsId){
        let idIndex = this.checkedIds.indexOf(goodsId)
        if (idIndex>=0){
          //如果已经是被选中的状态，则从选中的索引数组中删除，否则的话就添加到数组中
          this.checkedIds.splice(idIndex,1)
        }else{
          this.checkedIds.push(goodsId)
        }
        if (this.checkedIds.length==this.goodsList.length){
          //索引数组的长度等于购物车数目的长度，表示所有的内容都被选中,即现在为全选状态
          this.isCheckedAll=true
        }else{
          this.isCheckedAll=false
        }
        /*console.log(this.checkedIds)
        console.log(this.isCheckedAll)*/
      },
      checkedAll(){
        this.isCheckedAll=!this.isCheckedAll
        if (this.isCheckedAll){
          //全选时
          this.checkedIds=[]
          this.goodsList.forEach(function (goods) {
            this.checkedIds.push(goods.iid)
          },this)
        }else{
          this.checkedIds=[]
        }
      }
    }
  }
</script>

<style scoped>
  .cart-nav {
    background: var(--color-tint);
    color: #fff;
    font-size: 18px;
  }
  .cartList{
    width: 95%;
    margin: 50px auto 100px;
  }
  .cartitem {
    background: rgb(245, 244, 244);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .goodscontent {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    position: relative;
  }

  .content-left > img {
    width: 100px;
    height: 100px;
  }

  .content-right {
    width: 60%;
    padding: 0 5px;
  }

  .goodsTitle{
    width: 100%;
    height: 55px;
    overflow: hidden;
  }
  .content-bottom {
    position: absolute;
    bottom: 0;
    width: inherit;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
    margin-right: 5px;
  }
  .tag{
    display: inline-block;
    background: #ff81982e;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
    margin: 0 5px;
  }
  .bottom-fixed{
    width: 100%;
    height: 44px;
    padding: 10px;
    position: fixed;
    bottom: 49px;
    left: 0;
    border-top: 1px solid #ece6e6;
    border-bottom: 1px solid #ece6e6;
    background: white;
  }
  .bfixed-wrap{
    display: flex;
    justify-content: space-between;
  }
  .allPrice{
    color: #ff8198;
  }
  .countBtn{
    display: inline-block;
    padding: 5px 10px;
    background: #ff8198b0;
    border-radius: 20px;
    margin-left: 10px;
    color: #f6f6f6;
  }
</style>


