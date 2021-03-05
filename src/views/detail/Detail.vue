<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @itemClick="itemClick" ref="nav"></detail-nav-bar>
        <scroll class="content" ref="scroll" :pull-up-load='true' @scroll="contentScroll" :probe-type="3">
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-goods-info :detail-info ='detailInfo' @imageLoad= 'imageLoad'></detail-goods-info>
            <detail-params-info :item-params="itemParams" ref="params"></detail-params-info>
            <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
            <goods-list :goods= "recommends" ref="recommend"></goods-list>
        </scroll>
        <detail-bottom-bar></detail-bottom-bar>
        
    </div>
</template>

<script>
    import DetailNavBar from './DetailNavBar.vue'
    import DetailSwiper from './DetailSwiper.vue'
    import DetailBaseInfo from './DetailBaseInfo.vue'
    import DetailGoodsInfo from './DetailGoodsInfo'
    import DetailParamsInfo from './DetailParamsInfo'
    import DetailCommentInfo from './DetailCommentInfo'
    import DetailBottomBar from './DetailBottomBar'
    import GoodsList from 'components/content/goods/GoodsList.vue'

    import Scroll from 'components/common/scroll/Scroll'
    
    import {getDetail,Goods,Shop,getRecommend} from 'network/detail'
    import {debounce} from 'common/utils.js'

export default {
  name:'Detail',
  data(){
   return {
       iid:null,
       topImages:[],
       goods:{},
       shop:{},
       detailInfo:{},
       itemParams:{},
       commentInfo:{},
       recommends:[],
       themeTopYs:[],
       getThemeTopY:null,
       currentIndex:0

   }
  },
  created() {
    //   1.保存传入的iid
    this.iid = this.$route.params.iid  
    //  2、根据iid请求详情数据
    getDetail(this.iid).then(res =>{
        console.log(res)

        const data  = res.result
        // 1.获取顶部的轮播图数据
        this.topImages = res.result.itemInfo.topImages
        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // 3.创建店铺信息
        this.shop = new Shop(data.shopInfo)
        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo
        // 参数信息
        this.itemParams = data.itemParams
        // 评论xinxi
        if(data.rate.cRate !==0){
            this.commentInfo = data.rate.list[0]
        }
        // 给getThemeTopY赋值（对给this.getThemeTopY赋值的操作进行防抖操作）
        this.getThemeTopY = debounce(()=>{
             this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
          this.themeTopYs.push(Number.MAX_VALUE)
            console.log(this.themeTopYs)
        },100)
          
    })
// 请求推荐数据
    getRecommend().then(res=>{
        // console.log(res)
        this.recommends = res.data.list
    })

  },
  methods: {
      imageLoad(){
          this.$refs.scroll.refresh()
          this.getThemeTopY()

      },
      itemClick(index){
        //   
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position){
        //   获取Y值
          const positionY = -position.y
        //   positionY和主题中的Y值进行对比
        //  方法 二：可以再数组里面放一个最大值 Numer.MAX_VALUE 直接判断区间就可以了  但是for循环里面要避免越界 i<length - 1
        let length = this.themeTopYs.length

        for(let i =0;i<length-1;i++){
            if(this.currentIndex !== i && (positionY > this.themeTopYs[i]&& positionY < this.themeTopYs[i+1])){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
        }
        }
        



        // for(let i =0;i<length;i++){
        //     if(this.currentIndex !== i &&((i < length -1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length-1 && positionY >=this.themeTopYs[i]))){
        //         this.currentIndex = i
        //         console.log(this.currentIndex)
        //         this.$refs.nav.currentIndex = this.currentIndex
        //     }
        // }

      }
  },
  components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
  }
}
</script>

<style scoped>
#detail{position: relative;z-index: 9;background-color: #ffffff;height: 100vh;}
.content{height: calc(100% - 102px);}
.detail-nav{position: relative;z-index: 9;background-color: #ffffff;}
</style>
