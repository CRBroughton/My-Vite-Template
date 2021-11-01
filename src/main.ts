import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(createPinia())
app.use(router)
app.mount('#app')