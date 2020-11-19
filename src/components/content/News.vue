<template>
  <PopItem :pop-arr="newList"></PopItem>
</template>

<script>
  import {getNew} from "../../network/home";
  import PopItem from './Pop-item'
  export default {
    name: "News",
    data(){
      return{
        newList:null
      }
    },
    components:{
      PopItem
    },
    created() {
      getNew().then(res=>{
        this.newList=res.list
      })
    }
  }
</script>

<style scoped>

</style>
