<template>
    <div class="back-top" >
        <img src="~assets/img/cart/flower.png" alt="">
    </div>
</template>

<script>
export default {
  name:'BackTop',
  data(){
   return {

   }
  }
}
</script>

<style scoped>
.back-top{
 
    position: fixed;
    bottom:60px;
    right: 30px;
    z-index: 11;
}
.back-top img{
    display: block;
    width: 50px;
}
</style>
