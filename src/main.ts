import '@/assets/main.css'

import { createApp } from 'vue'

import { createAppRouter } from './modules/router'

import App from './app.vue'

createApp(App).use(createAppRouter()).mount('#app')
