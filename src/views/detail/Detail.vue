<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"></detail-nav-bar>
        <scroll class="content" ref="scroll" :pull-up-load='true'>
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-goods-info :detail-info ='detailInfo' @imageLoad= 'imageLoad'></detail-goods-info>
            <detail-params-info :item-params="itemParams"></detail-params-info>
            <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
            <goods-list :goods= "recommends"></goods-list>
        </scroll>
        
    </div>
</template>

<script>
    import DetailNavBar from './DetailNavBar.vue'
    import DetailSwiper from './DetailSwiper.vue'
    import DetailBaseInfo from './DetailBaseInfo.vue'
    import DetailGoodsInfo from './DetailGoodsInfo'
    import DetailParamsInfo from './DetailParamsInfo'
    import DetailCommentInfo from './DetailCommentInfo'
    import GoodsList from 'components/content/goods/GoodsList.vue'

    import Scroll from 'components/common/scroll/Scroll'
    
    import {getDetail,Goods,Shop,getRecommend} from 'network/detail'

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
       recommends:[]
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
      GoodsList
  }
}
</script>

<style scoped>
#detail{position: relative;z-index: 9;background-color: #ffffff;height: 100vh;}
.content{height: calc(100% - 44px);}
.detail-nav{position: relative;z-index: 9;background-color: #ffffff;}
</style>
