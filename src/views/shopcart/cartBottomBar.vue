<template>
<div class="cartBar">
    <div class="checkAll" @click="allChecked">
        <check-button class="btn"></check-button>
        <span class="all">全选</span>
    </div>
        <div class="price">
            总价格{{totalPrice}}
        </div>
        <div class="pay">
            去结算{{checkLength}}
        </div>
</div>
</template>

<script>
import checkButton from './checkButton'

export default {
  name:'cartBottomBar',
  data(){
   return {

   }
  },
  components:{
      checkButton
  },
  computed:{
      totalPrice(){
          return 'あ' + this.$store.state.cartList.filter(item =>{
              return item.checked
          }).reduce((preValue,item) =>{
              return item.price *item.count + preValue
          },0)
      },
      checkLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
    }
  },
  methods: {
      allChecked(){
          if(this.$store.state.cartList.length>=1){
             
          }
      }
  },
    
}
</script>

<style scoped>
.cartBar{height: 40px;background-color: red;width: 100%;position: fixed;bottom: 49px;}
.checkAll{width: 80px;display: flex;align-items: center;height: 40px;justify-content: center;}
.btn{width: 20px;height: 20px;}
.all{padding: 10px 5px;color:darkblue;}
.cartBar>div{width: 30%;float: left;height: 40px;}
.cartBar .pay{float: right;}
.price{text-align: center;line-height: 40px;}
.pay{width: 80%;height: 40px;background-color: darkkhaki;color: #ffffff;text-align: center;line-height: 40px;}
</style>
