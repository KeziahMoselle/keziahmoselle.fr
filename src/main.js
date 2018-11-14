import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

import router from './routes'
import messages from './translations'

import App from './App.vue'

Vue.use(VueI18n)
Vue.use(VueRouter)

const i18n = new VueI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages
})

if (window.location.href.split('#lang=')[1]) {
  i18n.locale = window.location.href.split('#lang=')[1] || 'fr'
}

Vue.config.productionTip = true

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
