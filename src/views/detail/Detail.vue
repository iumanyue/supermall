<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :topImages="topImages"></detail-swiper>
    </div>
</template>

<script>
    import DetailNavBar from './DetailNavBar.vue'
    import DetailSwiper from './DetailSwiper.vue'
    
    import {getDetail} from 'network/detail'

export default {
  name:'Detail',
  data(){
   return {
       iid:null,
       topImages:[]
   }
  },
  created() {
    //   1.保存传入的iid
    this.iid = this.$route.params.iid  
    //  2、根据iid请求详情数据
    getDetail(this.iid).then(res =>{
        // console.log(res)
        // 1.获取顶部的轮播图数据
        this.topImages = res.result.itemInfo.topImages
    })
  },
  components:{
      DetailNavBar,
      DetailSwiper
  }
}
</script>

<style scoped>

</style>
