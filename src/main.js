import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import FastClick from 'fastclick'
import { sync } from 'vuex-router-sync'

// 解决延迟
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body)
    },
    false
  )
}

window.env = process.env.NODE_ENV

// if (process.env.VUE_APP_MODE !== 'production') {
//   let VConsole = require('vconsole')
//   /* eslint-disable no-new */
//   new VConsole()
// }

Vue.config.productionTip = false

// Vue.prototype.routerPush = path => {
//   // console.log(window.historyList)
//   router.push(path)
//   if (typeof path === 'object') {
//     path = path.name
//   }
//   window.historyList = [...window.historyList, path]
//   // console.log('routerPush', window.historyList)
// }

// Vue.prototype.routerBack = () => {
//   router.back()
//   window.historyList.pop()
//   // console.log('routerBack', window.historyList)
// }

// Vue.prototype.routerReplace = path => {
//   router.replace(path)
//   window.historyList.pop()
//   window.historyList.push(path)
//   // console.log('routerReplace', window.historyList)
// }

// Vue.prototype.routerGo = n => {
//   router.go(n)
//   window.historyList = window.historyList.slice(0, -n)
//   // console.log('routerGo', window.historyList)
// }

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('--------------------------------')
