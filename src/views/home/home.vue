<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <home-swiper :banners="banners"></home-swiper>
     <recommend-view :recommends='recommends'></recommend-view>
     <feature-view></feature-view>
     <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
      <goods-list :goods="goods['pop'].list"></goods-list>

   
  </div>
  
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar.vue"
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import {getHomeMultidata,getHomeGoods} from '@/network/home.js'

import RecommendView from './RecommendView'
import homeSwiper from 'views/home/homeSwiper.vue'
import FeatureView from './FeatureView'


export default {
  name: "home",
  data() {
    return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
    }
  },
  components:{
    NavBar,
    TabControl,
    RecommendView,
    homeSwiper,
    FeatureView,
    GoodsList
    
  },
  created(){
    // 1.请求多个数据  这里必须加this 或者直接起不同的名字
      this.getHomeMultidata()
// 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
      // console.log(res)
      // this.result =res;
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    },
    getHomeGoods(type){
      // 调用三次 都是请求第一页的数据
       const page =this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
    })
    }
  }
}
</script>

<style scoped>
#home{padding-top:44px}
.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
}
.tab-control{
  position:sticky;
  top: 44px;
  z-index: 9;
}
</style>