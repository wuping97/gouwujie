<template>
  <div id="leftBar">
    <div id="categoryLeft">
      <ul>
        <li v-for="(item,index) in categoryLeft" :key="index" @click="showRight(index)" :class="{activeColor:colorIndex === index}">{{item.title}}</li>
      </ul>
    </div>
    <div id="categoryRight">
      <div class="productItem" v-for="product in nowProduct">
        <img :src="product.image" alt="">
        <p>{{product.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCategory} from "../../network/category";
  import TabBarItem from './tabbar/Tab-bar-item'
  export default {
    name: "LeftBar",
    data(){
      return{
        categoryLeft:null,
        products:null,
        nowProduct:[{img:"hhhhhhh1",title:'秋季新款1'}],
        colorIndex:0
      }
    },
    components:{
      TabBarItem
    },
    created() {
      getCategory().then(res=>{
        this.categoryLeft = res.category.list
        // this.products=res.category.list.subcategory
        console.log(res)
        console.log(this.categoryLeft)
      })
    },
    methods:{
      showRight(index){
        this.nowProduct = this.categoryLeft[index].subcategory.data.list
        this.colorIndex = index
        console.log(this.nowProduct)
      }
    }
  }
</script>

<style scoped>
  #leftBar{
    width: 100%;
  }
  #categoryLeft{
    float: left;
    width: 30%;
    background: #f6f4f4;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-bottom: 49px;
  }
  #categoryLeft::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  #categoryLeft>ul{
    width: 100%;
    list-style: none;
  }
  #categoryLeft>ul>li{
    text-align: center;
    line-height: 45px;
  }
  #categoryRight{
    float: right;
    width: 70%;
    /*background: #ff8198;*/
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    padding: 15px 0 49px 0;
  }
  .productItem{
    width: 35%;
    text-align: center;
    margin-left: 15px;
  }
  .productItem>img{
    width: 100%;
  }
  .productItem>p{
    margin:10px 0;
  }
  .activeColor{
    color: #ff8198;
  }
</style>
