<template>
  <div id="recommend">
    <ul>
      <li class="recommend-list" v-for="item in reImgList">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props:{
      reImgList:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style scoped>
  #recommend {
    width: 100%;
    /*background: #ff8198;*/
  }
  #recommend>ul{
    display: flex;
    justify-content: space-around;
  }
  .recommend-list {
    display: inline-block;
    padding: 10px;
    text-align: center;
  }

  .recommend-list>a>img{
    width: 100%;
  }
  .recommend-list>a>p{
    padding-top: 5px;
    font-size: 14px;
  }
</style>
