import 'virtual:uno.css'
import './assets/main.css'

import { createApp } from 'vue'
import poui from 'poui'
import App from './App.vue'

const app = createApp(App)
app.use(poui)
app.mount('#app')
