<template>
  <div id="pop">
    <ul>
      <li v-for="item in popArr">
        <a :href="item.link">
          <img :src="item.show.img" alt="">
          <p class="pop-text">{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Pop",
    props: {
      popArr: {
        type: Array,
        default: []
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
  #pop > ul>li>a>img{
    width: 100%;
    border-radius: 5px;
  }
  .pop-text{
    font-size: 12px;
    padding: 5px 0;
  }
</style>
