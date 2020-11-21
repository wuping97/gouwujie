import { createStore } from 'vuex'

export default createStore({
  state: {
    goodsList:[
      {
        iid:"1m7s9c4",
        shopName:"小店店名",
        title:"秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装",
        show:{
          img:"http://s11.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_320x999.jpg",
        },
        price:"50.01",
        counter:2
      },
      {
        iid:"1m7jj7a",
        shopName:"小店店名2",
        title:"套装女春秋2018新款时尚复古气质个性连帽卫衣两件套",
        show:{
          img:"http://s3.mogucdn.com/mlcdn/c45406/180825_4figj590flej05g556d6ll8ka09a7_640x902.jpg_320x999.jpg",
        },
        price:"35",
        counter:1
      },
      /*{
        shopName:"小店店名",
        title:"秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装",
        img:"http://s11.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_320x999.jpg",
        price:"56",
        counter:2
      },
      {
        shopName:"小店店名2",
        title:"套装女春秋2018新款时尚复古气质个性连帽卫衣两件套",
        img:"http://s3.mogucdn.com/mlcdn/c45406/180825_4figj590flej05g556d6ll8ka09a7_640x902.jpg_320x999.jpg",
        price:"35",
        counter:1
      },
      {
        shopName:"小店店名",
        title:"秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装",
        img:"http://s11.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_320x999.jpg",
        price:"56",
        counter:2
      },
      {
        shopName:"小店店名2",
        title:"套装女春秋2018新款时尚复古气质个性连帽卫衣两件套",
        img:"http://s3.mogucdn.com/mlcdn/c45406/180825_4figj590flej05g556d6ll8ka09a7_640x902.jpg_320x999.jpg",
        price:"35",
        counter:1
      },*/
    ]
  },
  mutations: {
    increGoodsList(state,goodsObj){
      state.goodsList.push(goodsObj)
    }
  },
  actions: {
    update(context){
      context.commit('increGoodsList')
    }
  },
  modules: {
  }
})
