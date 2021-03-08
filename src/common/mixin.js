import BackTop from 'components/content/backTop/BackTop.vue'

export const backTopMixin = {
    components:{
        BackTop
    },
    data() {
        return {
            isShowBackTop:false
        }
    },
    methods: {
        backClick(){
            // console.log("点击了")
            // this.$refs.scroll.scroll.scrollTo(0,0,500)
            // 在scroll组件内定义了scrollTo方法  这里不用取scroll整个组件对象
            this.$refs.scroll.scrollTo(0,0)
          },

    },
}