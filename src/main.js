import Vue from 'vue'
import App from './App.vue'

// 引入jquery
import $ from 'jquery'
Vue.prototype.$ = $

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

//字体图标
import './assets/font/iconfont.js'

// 引入weui
import weui from 'weui'
Vue.use(weui)

// 路由
import router from './router'

// 引入iView
import iView from 'iview'
// import 'iview/dist/styles/iview.css'

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

