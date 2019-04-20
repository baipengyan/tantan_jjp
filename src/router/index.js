import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 首页
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Index from '../pages/Index.vue'
import Setting from '../pages/Setting.vue'
import Privilege from '../pages/Privilege.vue'
import Authentication from '../pages/Authentication.vue'
import Edituser from '../pages/Edituser.vue'

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
            }, {
                path: 'privilege',
                component: Privilege
            }, {
                path: 'authentication',
                component: Authentication
            }, {
                path: 'edituser',
                component: Edituser
            }
        ]
    }, {
        path: '/login',
        component: Login
    }
]

let router = new VueRouter({
    routes
})

export default router