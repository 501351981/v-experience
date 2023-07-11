import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import focusNext from "../packages/v-focus-next/index.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'

let app = createApp(App)
app.use(router);
app.use(focusNext)
app.use(ElementPlus)
app.mount('#app')