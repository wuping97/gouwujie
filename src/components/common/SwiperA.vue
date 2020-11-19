<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in lists">
        <a :href="item.link">
          <img class="swiper-img" :src="item.image" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    data() {
      return {}
    },
    props: {
      lists: {
        type: Array,
        default: []
      }
    },
    updated() {
      let mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        loop:true
      })
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    /*height: 300px;*/
    margin-top: 44px;
  }

  .swiper-img {
    width: 100%;
  }
</style>
