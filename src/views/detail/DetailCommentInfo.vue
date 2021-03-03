<template>
    <div v-if="Object.keys(commentInfo).length !== 0">
        <h1>用户评价</h1>
        <div>
           <img :src="commentInfo.user.avatar" alt=""> 
           <span>{{commentInfo.user.uname}}</span>
        </div>
        <div>
            <p>{{commentInfo.content}}</p>
            <div>
                <span class="date">{{commentInfo.created  }}</span>
                <span>{{commentInfo.style}}</span>
            </div>
            <div class="info-imgs">
                <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
            </div>
        </div>
    </div>
</template>
// |
<script>
export default {
  name:'DetailCommentInfo',
  data(){
   return {

   }
  },
  props:{
      commentInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  }
}
</script>

<style scoped>

</style>
