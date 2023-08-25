import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from '~pages'

import './index.css'

async function boot() {
  // eslint-disable-next-line n/prefer-global/process
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser')
    await worker.start()
  }
}

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

boot().then(() => {
  app.use(router).use(createPinia()).mount('#app')
})
