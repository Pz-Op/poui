import 'virtual:uno.css'
import './assets/main.css'

import { createApp } from 'vue'
import poui from 'poui'
import { main_styles } from '@poui/style'
import App from './App.vue'

const app = createApp(App)
app.use(poui)
app.mount('#app')

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  main_styles.themeSwicth(true)
}
else {
  document.documentElement.classList.remove('dark')
  main_styles.themeSwicth(false)
}
