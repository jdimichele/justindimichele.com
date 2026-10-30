import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { Buffer } from 'buffer'
import './index.css'

window.Buffer = Buffer

const app = createApp(App).use(router)
app.mount('#app')
