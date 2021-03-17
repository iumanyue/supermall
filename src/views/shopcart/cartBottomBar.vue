<template>
<div class="cartBar">
    <div class="checkAll">
        <check-button class="btn" :is-checked="isSelectAll"  @click.native="allChecked"></check-button>
        <span class="all">全选</span>
    </div>
        <div class="price">
            总价格{{totalPrice}}
        </div>
        <div class="pay" @click="isChooseClick">
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
    },
      isSelectAll(){

     if (this.$store.state.cartList.length ===0) return false

           //  方法1                             过滤没有被选中的，如果有长度， return false（取反）
        //   return !(this.$store.state.cartList.filter(item => !item.checked).length)
        // 方法二
    
        // return !(this.$store.state.cartList.find(item=>!item.checked))
        // 方法三
        for(let item of this.$store.state.cartList){
            if(!item.checked){
                return false
            }
        }
        return true
    }
  },
  methods: {
      allChecked(){
          if(this.isSelectAll){
              this.$store.state.cartList.forEach(item =>item.checked = false)
          }else{
              this.$store.state.cartList.forEach(item =>item.checked = true)
          }
      },
      isChooseClick(){
        if(!this.isSelectAll){
            this.$toast.show('请至少选择一件商品')
        }
           
    }
           
    }
       
  }
        
</script>

<style scoped>
.cartBar{height: 40px;width: 100%;position: fixed;bottom: 49px;}
.checkAll{width: 80px;display: flex;align-items: center;height: 40px;justify-content: center;}
.btn{width: 20px;height: 20px;}
.all{padding: 10px 5px;color:darkblue;}
.cartBar>div{width: 30%;float: left;height: 40px;}
.cartBar .pay{float: right;}
.price{text-align: center;line-height: 40px;}
.pay{width: 80%;height: 40px;background-color: darkkhaki;color: #ffffff;text-align: center;line-height: 40px;}
</style>
