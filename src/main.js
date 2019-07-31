require('./bootstrap')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// window.jQuery = require('jquery')
// import 'bootstrap'
// import jQuery from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

// Vue.use(Bootstrap)
// Vue.use(jQuery)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
