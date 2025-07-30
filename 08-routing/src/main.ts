import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('./pages/HomeView.vue'),
        name: 'home'
    },
    {
        path: '/about',
        component: () => import('./pages/AboutView.vue'),
        name: 'about'
    },
    {
        path: '/portfolio',
        component: () => import('./pages/PortfolioView.vue'),
        name: 'portfolio'
    },
    {
        path: '/contact',
        component: () => import('./pages/ContactView.vue'),
        name: 'contact'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')
