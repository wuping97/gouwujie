<template>
  <div>
    <LeftBar></LeftBar>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import LeftBar from "../../components/common/LeftBar";
  import Tabbar from "../../components/common/tabbar/Tabbar";
  export default {
    name: "category",
    components:{
      LeftBar,Tabbar
    }
  }
</script>

<style scoped>

</style>
