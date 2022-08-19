import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import pinia from './reducers/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';



const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Antd);

app.mount('#app')
