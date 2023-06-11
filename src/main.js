import { createApp } from 'vue'
import App from './App.vue'
import focusNext from "../core/index.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'

let app = createApp(App)
app.use(focusNext)
app.use(ElementPlus)
app.mount('#app')