import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from '../views/HomeView.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
]
// 注册路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 暴露router
export default router