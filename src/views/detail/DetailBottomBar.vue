<template>
<div class="bottom-bar">
    <div class="bar-item bar-left">
        <div>
            <i class="icon service"></i>
            <span class="text">客服</span>
        </div>
        <div>
            <i class="icon shop"></i>
            <span class="text">店铺</span>
        </div>
        <div>
            <i class="icon select"></i>
            <span class="text">收藏</span>
        </div>
    </div>
    <div class="bar-item bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
    </div>
</div>

</template>

<script>
export default {
  name:'DetailBottomBar',
  data(){
   return {

   }
  },
  methods: {
      addToCart(){
        this.$emit("addCart")
      }
  },
}
</script>

<style scoped>
.bottom-bar{height: 58px;background-color:#ffffff;
position: fixed;bottom: 0px;z-index: 999;display:flex;text-align: center;left: 0;right: 0;}
.bar-left .icon{display: block;width: 22px;height: 22px;margin:10px auto 3px;background: url("~assets/img/detail/detail_bottom.png")0 0/100%;}
.bar-left .text{font-size: 13px;}

.bar-item{flex: 1;display: flex;}
.bar-item>div{flex:1;}
.bar-right .buy{background-color: #f69;}
.bar-right .cart {background-color: #ffe817;color: #333;}
.bar-right{font-size: 15px;color: #ffffff;line-height: 58px;}
.bar-left .shop{background-position: 0 -98px;}
.bar-left .service{background-position: 0 -54px;}


</style>
