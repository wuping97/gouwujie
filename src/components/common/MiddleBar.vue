<template>
  <div id="middleBar">
    <TabBarItem path="/home/pop" active-color="#ff8198">
      <template v-slot:slot-text>
        <div>流行</div>
      </template>
      <template v-slot:slot-div>
        <div class="active-div"></div>
      </template>
    </TabBarItem>
    <TabBarItem path="/home/news" active-color="#ff8198">
      <template v-slot:slot-text>
        <div>新款</div>
      </template>
      <template v-slot:slot-div>
        <div class="active-div"></div>
      </template>
    </TabBarItem>
    <TabBarItem path="/home/sell" active-color="#ff8198">
      <template v-slot:slot-text>
        <div>精选</div>
      </template>
      <template v-slot:slot-div>
        <div class="active-div"></div>
      </template>
    </TabBarItem>
  </div>
</template>

<script>
  import TabBarItem from './tabbar/Tab-bar-item'
  export default {
    name: "middleBar",
    components:{
      TabBarItem
    }
  }
</script>

<style scoped>
  #middleBar{
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }
  .active-div{
    width: 35px;
    height: 3px;
    border-radius: 3px;
    background-color: #ff8198;
  }
</style>
