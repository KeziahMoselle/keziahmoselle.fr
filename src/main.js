import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'

import messages from './translations'
Vue.use(VueI18n)

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
  render: h => h(App)
}).$mount('#app')
