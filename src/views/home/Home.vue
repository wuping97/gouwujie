<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <Swipera :lists="result"></Swipera>
    <Recommend :reImgList="recommendList"></Recommend>
    <Recommend :reImgList="recommendList"></Recommend>
    <MiddleBar></MiddleBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import {getHomeMultidata} from "network/home"
  // import {getHomedata} from "../../network/home"
  import Swipera from "components/common/SwiperA"
  import Recommend from "../../components/common/Recommend"
  import MiddleBar from "../../components/common/MiddleBar";

  export default {
    name: "home",
    components: {
      NavBar, Swipera, Recommend, MiddleBar
    },
    data() {
      return {
        result: null,
        recommendList: null,
        // filerList:null
        popList:null
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.result = res.banner.list
        this.recommendList = res.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background: var(--color-tint);
    color: #fff;
  }
</style>
