<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  data() {
    return {

    }
  },
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>

<style scoped>
    .recommend{display: flex;width: 100%;text-align: center;font-size: 12px;padding-bottom: 20px;border-bottom: 7px solid #eee;}
    .recommend-item{flex:1;}
    .recommend-item img{width: 65px;height: 65px;margin:15px 0 7px 0;}
</style>