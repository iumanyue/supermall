<template>
    <div id="shop-item">
        <div class="item-selector">
            <CheckButton></CheckButton>
        </div>
        <div class="item-img">
            <img :src="product.image" alt="">
        </div>
        <div class="item-info">
            <p class="item-title">{{product.title}}</p>
            <p class="item-desc">{{product.desc}}</p>
            <div class="info-bottom">
                <div class="item-price">￥{{product.price}}</div>
                <div class="item-count">X{{product.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>

import CheckButton from './checkButton'

export default {
  name:'cartListItem',
  data(){
   return {

   }
  },
  props:{
      product:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  components:{
      CheckButton
  }
}
</script>

<style scoped>
#shop-item{width: 100%;padding: 5px;border-bottom: 1px solid #eee;display: flex;}
.item-img{padding:5px}
.item-selector{width: 20px;display: flex;justify-content: center;align-items: center;}
.item-title,.item-desc{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;line-height: 30px;width:calc(100% - 200px);}
.item-img img{width: 80px;height: 100px;display: block;border-radius: 5px;}
.item-info{font-size: 14px;color: red;margin-top: 5px;}
.info-bottom div{float: left;padding-top: 20px;color: aqua;}
.item-count{margin-left: 10%;}

</style>
