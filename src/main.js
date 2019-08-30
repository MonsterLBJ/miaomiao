import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

import Scroller from '../src/components/Scroller'
Vue.component('Scroller',Scroller);

import Loading from '../src/components/Loading'
Vue.component('Loading',Loading)

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
}),




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
