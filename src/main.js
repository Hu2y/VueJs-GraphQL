import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: function (h) { return h(App) }
}).$mount('#app')
