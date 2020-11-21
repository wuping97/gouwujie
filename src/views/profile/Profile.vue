<template>
  <div>
    <div>profile</div>
    <Tabbar></Tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Tabbar from "../../components/common/tabbar/Tabbar";
  export default {
    name: "Profile",
    components:{
      Tabbar
    }
  }
</script>

<style scoped>

</style>
