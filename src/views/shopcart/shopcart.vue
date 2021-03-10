<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 下面是一个商品列表 -->
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from 'views/shopcart/cartList'

import {mapGetters} from 'vuex'
export default {
  name: "shopcart",
  data() {
    return {

    }
  },
  components:{
    NavBar,
    CartList
  },
  computed:{
    ...mapGetters(['cartLength']) 
  }
}
</script>

<style scoped>
.nav-bar{background-color:pink;color: #ffffff;font-weight: bold;}

</style>