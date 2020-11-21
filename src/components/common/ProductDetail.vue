<template>
  <div>
    <ProductBar :goodsInfo="productInfo"></ProductBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getHomedata} from "../../network/home";
  import ProductBar from './tabbar/Product-tab-bar'
  export default {
    name: "ProductDetails",
    components:{
      ProductBar
    },
    data(){
      return{
        id:this.$route.params.id,
        productInfo:null
      }
    },
    created() {
      getHomedata().then(res => {
        let index = res.list.findIndex(item=>item.iid==this.id)
        // console.log(index)
        this.productInfo=res.list[index]
        console.log(this.productInfo)
      }).catch((e)=>{})
    },
    mounted() {
      getHomedata()
    }
  }
</script>

<style scoped>

</style>
