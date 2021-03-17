<template>
<div class="toast" v-show="isShow">
    <div>{{message}}</div>
</div>

</template>

<script>
export default {
  name:'Toast',
  data(){
   return {
       message:'',
       isShow:false
   }
  },
  methods: {
     show(message ="IUIUIUIU",duration=2000){
         this.isShow = true;
         this.message = message

         setTimeout(()=>{
             this.isShow = false;
             this.message = ''
         },duration)
     } 
  },
}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.8);
    transform: translate(-50%,-50%);
    z-index: 9999;
}
</style>
