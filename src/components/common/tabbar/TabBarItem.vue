<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive" >
        <slot name="item-icon"></slot>
      </div>
      <div v-else >
      <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name='item-text'></slot>
      </div>
      
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
  },
  data() {
    return {
        // isActive:true

    }
  },
  computed:{
      isActive(){
         return this.$route.path.indexOf(this.path) !==-1
        //            $route是哪个路由处于活跃就是哪个对象
      },
      activeStyle(){
          return this.isActive ? {color:this.activeColor} :{}
      }
  },
  methods:{
      itemClick(){
          if(this.$route.path!=this.path){this.$router.push(this.path)}
      }
  }
}
</script>

<style scoped>
.active{
    color:red;
}

</style>