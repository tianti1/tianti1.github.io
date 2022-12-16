import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'  // 使用图标库
import '@/assets/font/font.css'
import '@/assets/iconfont/iconfont.css'
// import PrimeVue from 'primevue/config';
// import PrimeVue from 'primevue/config';
// import Dialog from 'primevue/dialog';

// import ElementPlus from 'element-plus';
// import 'element-plus/theme-chalk/index.css';
 
// import locale from 'element-plus/lib/locale/lang/zh-cn'
// createApp(App).use(store).use(router).use(ElementPlus).mount('#app').component('Dialog', Dialog)


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// const app = createApp(App)

// app.use(ElementPlus)

// createApp(App).use(store).use(router).mount('#app')
// createApp(App).use(store).use(router).use(ElementPlus).mount('#app').use(PrimeVue).component('Dialog', Dialog)
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')