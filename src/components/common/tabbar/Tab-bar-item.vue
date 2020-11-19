<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActived" name="slot-img"></slot>
    <slot v-else name="slot-active-img"></slot>
    <div :style="activeStyle">
      <slot name="slot-text"></slot>
      <slot name="slot-div" v-if="isActived"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-bar-item",
    data() {
      return {
      }
    },
    computed: {
      isActived() {
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle() {
        return this.isActived ? {color:this.activeColor} : {}
      }
    },
    props: {
      path: String,
      activeColor: {
        type:String,
        default:"deepskyblue"
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path)
        // console.log(this.isActive)
      }
    }
  }
</script>

<style scoped>
  /*@import "../../assets/css/base.css";*/

  .tab-bar-item {
    height: 49px; /*移动端底部导航的固定像素，一般都是49px*/
    text-align: center;
  }
</style>
