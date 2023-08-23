import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import UiComponents from 'components/src'



const app = createApp(App)
app.use(UiComponents)
app.mount('#app')
