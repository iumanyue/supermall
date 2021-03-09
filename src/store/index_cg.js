// import Vue from 'vue'
// import Vuex from 'vuex'

// // 安装纱剪
// Vue.use(Vuex)

// 创建store对象
const store  = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
     addCounter(state,payload){
        payload.count ++
     },
     addToCart(state,payload){
        state.cartList.push(payload)   
    }     

    },
    actions:{
        addCart(state,payload){
            // 查找之前数组是否有该商品
            let oldProduct  = state.cartList.find(item => item.iid === payload.iid)
            if(oldProduct){
                context.commit("addCounter",oldProduct)
            }else{
                payload.count = 1
                context.commit("addToCart",payload)
            }

        }  
    },
    modules:{

    }
})

// 挂载VUE实例上

// export default store