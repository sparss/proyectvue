import { createApp } from 'vue'
import App from './App.vue'
import principal from "./components/principal.vue"
import publicacion from "./components/publicacion.vue"

createApp(App,principal,publicacion).mount('#app')
