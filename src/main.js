import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Buffer } from 'buffer'
import App from './App.vue'
import router from './router/index.js'
import './index.css'

window.Buffer = Buffer

const app = createApp(App).use(router)
app.use(createPinia())
app.mount('#app')
