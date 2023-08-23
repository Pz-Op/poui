import 'virtual:uno.css'
import './assets/main.css'

import { createApp } from 'vue'
import UiComponents from 'components/src'
import App from './App.vue'

const app = createApp(App)
app.use(UiComponents)
app.mount('#app')
