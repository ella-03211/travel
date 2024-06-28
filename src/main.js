import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入导入所有图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
// 创建app应用
const app = createApp(App)
// app应用Elementplus组件
app.use(ElementPlus)

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.mount('#app')
