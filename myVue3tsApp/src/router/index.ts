import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/index.vue';
import About from '@/views/About/index.vue';


const routes: Array<RouteRecordRaw> = [
    // 配置重定向
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


// 在这里添加路由的导航守卫（可选）
router.beforeEach((to, from, next) => {
    console.log('navigating to:', to.path);
    next();
});

export default router;