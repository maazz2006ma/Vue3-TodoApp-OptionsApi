import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import BaseCard from './components/base/BaseCard.vue'
import BaseButton from './components/base/BaseButton.vue'
import store from './store/store.js'
const app = createApp(App)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.use(store)
app.use(router)
app.mount('#app')
