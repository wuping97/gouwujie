<template>
  <PopItem :pop-arr="sellList"></PopItem>
</template>

<script>
  import {getSell} from "../../network/home";
  import PopItem from './Pop-item'
  export default {
    name: "Sell",
    data(){
      return{
        sellList:null
      }
    },
    components:{
      PopItem
    },
    created() {
      getSell().then(res=>{
        this.sellList = res.list
      })
    }
  }
</script>

<style scoped>

</style>
