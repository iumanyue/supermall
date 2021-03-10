<template>
    <div class="cart-list">
        <scroll class="content" :pullUpLoad="true" ref="scroll">
            <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>   
        </scroll>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/scroll/Scroll'
import cartListItem from './cartListItem'

export default {
  name:'cartList',
  data(){
   return {

   }
  },
  components:{
      Scroll,
      cartListItem
  },
  computed:{
      ...mapGetters(['cartList'])
  },
//   当重新进入购物车页面时,有了新的数据，购物车可滚动的区域还是0 所以需要refresh（）一下
  activated() {
      this.$refs.scroll.refresh
  },
}
</script>

<style scoped>
.cart-list{height: 100vh;}
.content{height:calc(100% - 93px);overflow: hidden;}
</style>
