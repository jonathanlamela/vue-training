import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import truncate from './plugins/truncate'

const app = createApp(App)
app.use(truncate)
app.mount('#app')

