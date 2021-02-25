<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <scroll class="content" ref="scroll" 
    :probe-type="3" 
    @scroll="contentScroll" 
    :pull-up-load='true' @pullingUp="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends='recommends'></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" 
      class="tab-control" @tabClick='tabClick2'></tab-control>
        <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
   
  </div>
  
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar.vue"
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import {getHomeMultidata,getHomeGoods} from '@/network/home.js'
import {debounce} from 'common/utils.js'

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
        },
        currentType:'pop',
        isShowBackTop:false
    }
  },
  components:{
    NavBar,
    TabControl,
    RecommendView,
    homeSwiper,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop
    
  },
  created(){
    // 1.请求多个数据  这里必须加this 或者直接起不同的名字
      this.getHomeMultidata()
// 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

     
  },
  mounted() {

      // 防抖
      const refresh = debounce(this.$refs.scroll.refresh,200)

     //监听item中图片加载完成。（事件总线$bus） 
      this.$bus.$on('itemImageLoad',()=>{
        // console.log('------------------------')
         // 重新计算可滚动的区域，比如异步加载的图片。
        //  this.$refs.scroll && this.$refs.scroll.scroll.refresh()
        refresh()


      })
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    tabClick2(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backClick(){
      // console.log("点击了")
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      // 在scroll组件内定义了scrollTo方法  这里不用取scroll整个组件对象
      this.$refs.scroll.scrollTo(0,0)

    },
    contentScroll(position){
      this.isShowBackTop = (-position.y)>1000
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      
     
    },
   
    // 下面都是网络请求的方法   上面都是事件监听的方法
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

        // ...加载更多的(完成了上拉加载更多)
        this.$refs.scroll.finishPullUp()
    })
    }
  }
}
</script>

<style scoped>
#home{padding-top:44px;height: 100vh;position: relative;}
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
.content{
  position: absolute;
  top:44px;
  bottom:49px;
  left: 0;
  right: 0;
   overflow: hidden;
}
</style>