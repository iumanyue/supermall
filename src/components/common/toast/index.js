import Toast from './Toast'

const obj = {}

obj.install  =function(Vue){
// install函数在执行的时候 默认会传入一个参数 就是Vue
    // 1.创建组件构造器
     const toastContrustor = Vue.extend(Toast)

    //  2new方式，根据组件构造器。可以创建出一个组件对象
    const toast = new toastContrustor()

    // 3.将组件对象，手动挂载到某一个元素上
    toast.$mount(document.createElement('div'))
    // 4.toast.$el对应的就是div

    document.body.appendChild(toast.$el)


    Vue.prototype.$toast = toast
}



export default obj