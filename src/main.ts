import { createApp } from 'vue'
import 'virtual:windi.css'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router).use(createPinia()).mount('#app')
