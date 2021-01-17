<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <home-swiper :banners="banners"></home-swiper>
     <recommend-view :recommends='recommends'></recommend-view>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar.vue"
import {getHomeMultidata} from '@/network/home.js'
import RecommendView from './RecommendView'
import homeSwiper from 'views/home/homeSwiper.vue'

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
    homeSwiper,
    RecommendView
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
.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;
}

</style>