import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/style.scss'
import '@/assets/styles/global.scss'

createApp(App).provide('cartCount', ref(null)).use(router).mount('#app')
