import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import CKEditor from '@ckeditor/ckeditor5-vue'
import VueSocialSharing from 'vue-social-sharing'

const app = createApp(App)

const options = {
  // You can set your default options here
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(Toast, options)
app.use(CKEditor)
app.use(VueSocialSharing)
AOS.init()

app.mount('#app')
