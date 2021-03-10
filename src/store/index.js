import Vue from 'vue'
import Vuex from 'vuex'

// 安装纱剪
Vue.use(Vuex)

// 创建store对象
const store  = new Vuex.Store({
    state:{
        cartList:[]
        
    },
    mutations:{
        // addCart(state,payload){
            //           payload是新添加进去的商品
        //     let oldProduct = null
        //     for(let item of state.cartList){
        //         if(item.iid === payload.iid){
        //             oldProduct = item
        //         }
        //     }

        //     // 判断oldProduct
        //     if(oldProduct){
        //         oldProduct.count +=1 
        //     }else{
        //         payload.count = 1
        //         state.cartList.push(payload)
        //     }
        // }

        // 第二种方法  数组的。find()方法
            addCart(state,payload){
                // 查找之前数组是否有该商品
                let oldProduct  = state.cartList.find(item => item.iid === payload.iid)
                if(oldProduct){
                    oldProduct.count+= 1
                }else{
                    payload.count = 1
                    state.cartList.push(payload)
                }

            }

    },
    getters:{
        cartLength(state){
            return state.cartList.length
          },
        cartList(state){
            return state.cartList
        }
    },
    actions:{

    },
    modules:{

    }
})

// 挂载VUE实例上

export default store