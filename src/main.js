import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import axios from 'axios'

import 'vant/lib/index.less'
import './styles/index.less'
import './utils/rem'

Vue.use(Vant)
Vue.config.productionTip = false

Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
