<template>
    <div class="param-info" v-if="Object.keys(itemParams).length !==0">
        <table v-for="(table,index) in itemParams.rule.tables" :key="index" class="info-size">
            <tr v-for="(tr,indey) in table" :key="indey">
                <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
            </tr>
        </table>
        <table class="info-params">
            <tr v-for="(info,index) in itemParams.info.set" :key="index">
                <td class="info-param-key">{{info.key}}</td>
                <td class="param-value">{{info.value}}</td>
            </tr>
        </table>
        <div class="info-img" v-if="itemParams.info.images">
            <img :src="itemParams.info.images[0]" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name:'DetailParamsInfo',
  data(){
   return {

   }
  },
  props:{
      itemParams:{
          type:Object,
          default(){
              return {}
          }
      }
  }
}
</script>

<style scoped>
.param-info{padding: 20px 15px;font-size: 14px; border-bottom: 5px solid red;}
.param-info table{width: 100%;border-collapse: collapse;}
.param-info table tr{height: 42px;}
.param-info table tr td{border-bottom: 1px solid #eee;}
.info-param-key{width: 95px;}
.info-param{border-top: 1px solid #eee;}
.param-value{color: aqua;}
.info-img img{    width: 95%;margin: 10px auto;display: block;}

</style>
