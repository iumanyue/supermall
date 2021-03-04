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
                <span class="date">{{commentInfo.created | showDate}}</span>
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
import {formatDate,padLeftZero} from 'common/utils.js'

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
  },
  filters:{
      showDate(value){
        //   value就是一个时间戳，转成date对象
        const date = new Date(value*1000)
        // 将date进行格式化
        return formatDate(date,'yyyy/MM/dd hh:mm:ss')
      }
  }
}
</script>

<style scoped>

</style>
