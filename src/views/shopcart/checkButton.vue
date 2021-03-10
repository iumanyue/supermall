<template>
    <div class="check-button" :class="{check:isChecked}">
        <img src="~assets/img/cart/tick.svg">
    </div>
</template>

<script>
export default {
  name:'checkButton',
  data(){
   return {

   }
  },
  props:{
      isChecked:{
          type:Boolean,
          default:false
      }
  }
}
</script>

<style scoped>
.check-button{height: 16px;width: 16px;border: 2px solid #eee;}
.check-button img{display: block;margin: 0 auto;}
.check{background-color: brown;border: 2px solid brown;}
</style>
