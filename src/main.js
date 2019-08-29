// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import requset from './utils/request.js'
// 全局引入公共的样式
import '@/assets/css/global.css'
Vue.config.productionTip = false

// 全局挂载request
Vue.prototype.$http = request
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,   // 注入store
  components: { App },
  template: '<App/>'
})
