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

        addCounter(state,payload){
            payload.count++
        },
        addTocart(state,payload){
            state.cartList.push(payload)
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
        // 第二种方法  数组的。find()方法
        addCart(context,payload){
        return new Promise((resolve,reject)=>{
                // 查找之前数组是否有该商品
                let oldProduct  = context.state.cartList.find(item => item.iid === payload.iid)
                if(oldProduct){
                    context.commit('addCounter',oldProduct)
                    resolve('当前的数量加一')
    
                }else{
                    payload.count = 1
                    payload.checked = true
                    context.commit('addTocart',payload)
                    //                         新的商品添加进去
                    resolve('添加了新的商品')
                }
        })

        }
    },
    modules:{

    }
})

// 挂载VUE实例上

export default store