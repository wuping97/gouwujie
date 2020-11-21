<template>
  <div id="pop">
    <ul>
      <li v-for="item in popArr" @click="goDetail(item.iid)" :key="item.iid">
          <img :src="item.show.img" alt="">
          <p class="pop-text">{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  // import ProductDetail from "../common/ProductDetail";
  export default {
    name: "Pop",
    props: {
      popArr: {
        type: Array,
        default: []
      }
    },
    methods:{
      goDetail(id){
        this.$router.push({name:'ProductDetail',params:{id}})
      }
    }
  }
</script>

<style scoped>
  #pop{
    width: 100%;
  }
  #pop > ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  #pop > ul>li{
    display: inline-block;
    width: 45%;
    padding: 5px 0;
  }
  #pop > ul>li>img{
    width: 100%;
    border-radius: 5px;
  }
  .pop-text{
    font-size: 12px;
    padding: 5px 0;
  }
</style>
