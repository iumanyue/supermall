<template>
    <div class="detail-img" v-if="Object.keys(detailInfo).length !== 0">
        <img :src="item" alt="" v-for="(item,index) in detailInfo.detailImage[0].list" 
        :key="index" @load="imgLoad">
    </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  props:{
      detailInfo:Object
  }
  ,
  data(){
   return {
       counter:0,
       imagesLength:0
   }
  },
  methods: {
      imgLoad(){
        //  判断所有图片都加载完了，那么进行一次回调就可以了
        if(++this.counter ===this.imagesLength){
            this.$emit('imageLoad')
        } 
      }
  },
  watch:{
      detailInfo(){
        //   获取图片个数
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
  }
}
</script>

<style scoped>
.detail-img img{width: 95%;margin: 10px auto ;display:block;}
</style>
