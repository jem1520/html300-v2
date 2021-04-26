//setup vue app
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//setup bootstrap and vue router
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'
import router from './router'

Vue.use(BootstrapVue)

import PortalVue from 'portal-vue'

Vue.use(PortalVue)
