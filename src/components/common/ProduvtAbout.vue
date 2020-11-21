<template>
  <div class="productAbout">
    <slot name="detail-swiper"></slot>
    <slot name="detail-title"></slot>
    <slot name="detail-price"></slot>
    <slot name="detail-num"></slot>
    <slot name="detail-selectlist"></slot>
  </div>
</template>

<script>
  export default {
    name: "ProduvtAbout",
    components:{
    }
  }
</script>

<style scoped>

</style>
