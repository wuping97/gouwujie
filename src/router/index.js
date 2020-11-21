import { createRouter, createWebHistory } from 'vue-router'
const Category=()=>import('@/views/category/Category')
const Home=()=>import('@/views/home/Home')
const Profile=()=>import('@/views/profile/Profile')
const ShopCart=()=>import('@/views/shopCart/ShopCart')
const Pop=()=>import('@/components/content/Pop')
const News=()=>import('@/components/content/News')
const Sell=()=>import('@/components/content/Sell')
const ProductDetail=()=>import('@/components/common/ProductDetail')

const routes = [
  {
    path:'',
    redirect:'home'
  },
  {
    path:'/home',
    component:Home,
    meta:{title:'首页'},
    children:[
      //配置子路由
      {
        path:'',
        redirect:'/home/pop'
      },
      {
        path: 'pop',
        name:'Pop',
        component:Pop
      },
      {
        path: 'news',
        name: 'News',
        component:News
      },
      {
        path: 'sell',
        name:'Sell',
        component:Sell
      }
    ]
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/home/productDetail/:id',
    name:'ProductDetail',
    component:ProductDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
