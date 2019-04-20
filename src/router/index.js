import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 首页
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Index from '../components/Index.vue'
import Setting from '../components/Setting.vue'

let routes = [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/',
                redirect: 'index'
            }, {
                path: 'index',
                component: Index 
            }, {
                path: 'setting',
                component: Setting
            }
        ]
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/register',
        component: Register
    }
]

let router = new VueRouter({
    routes
})

export default router