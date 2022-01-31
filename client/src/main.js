import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import componentRegistration from '@/components/_Global/_globals'

import '@/assets/styles/main.scss'

const app = createApp(App)

componentRegistration({ app })

app.config.globalProperties.$filters = {
  currencyUSD (value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value)
  },
  trim (value) {
    return value.trim()
  }
}

app.use(store).use(router).mount('#app')
