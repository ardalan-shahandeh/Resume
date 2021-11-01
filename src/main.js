import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas as solid } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faInstagram, faTwitter, faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(solid)

library.add(faTelegram)
library.add(faLinkedin)
library.add(faInstagram)
library.add(faTwitter)
library.add(faGithub)
library.add(faStackOverflow)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.split('/').pop().replace(/\.\w+$/, ''))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
