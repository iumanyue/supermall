<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <home-swiper :banners="banners"></home-swiper>
     <recommend-view :recommends='recommends'></recommend-view>
     <feature-view></feature-view>
     <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>


     <div style="height:1111px"></div>
  </div>
  
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar.vue"
import TabControl from 'components/content/tabControl/TabControl.vue'

import {getHomeMultidata} from '@/network/home.js'

import RecommendView from './RecommendView'
import homeSwiper from 'views/home/homeSwiper.vue'
import FeatureView from './FeatureView'


export default {
  name: "home",
  data() {
    return {
        banners:[],
        recommends:[]
    }
  },
  components:{
    NavBar,
    TabControl,
    RecommendView,
    homeSwiper,
    FeatureView
    
  },
  created(){
    // 1.请求多个数据
    getHomeMultidata().then(res =>{
      // console.log(res)
      // this.result =res;
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
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
}
</style>