import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

import toast from 'components/common/toast/index.js'

Vue.config.productionTip = false

// vue实例是可以作为事件总线的。
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)

// 解决移动端300ms延迟

FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
