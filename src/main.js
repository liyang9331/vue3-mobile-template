import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from './api/index'
// 自动动态修改html根字体大小
import 'amfe-flexible'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')