<template>
  <PopItem :pop-arr="popList"></PopItem>
</template>

<script>
  import PopItem from './Pop-item'
  import {getHomedata} from "../../network/home";

  export default {
    name: "Pop",
    data(){
      return {
        popList:null
      }
    },
    components:{
      PopItem
    },
    created() {
      getHomedata().then(res => {
        // console.log(res)
        this.popList=res.list
        console.log(this.popList)
      })
    }
  }
</script>

<style scoped>

</style>
