import { createRouter, createWebHistory } from "vue-router";
import ErrorPage from "../pages/ErrorPage.vue"
import Status from '../components/Status.vue'
import User from '../components/User.vue'
import Layout from '../components/Layout.vue'
import Hr from '../components/Hr.vue'
import Role from '../components/Role.vue'



const routes = [
    { 
        path: '/',
        component: Layout,
        children: [
            {
                path:"/",
                name: "status",
                component: Status
            },
            {
                path:"/user",
                name: "user",
                component: User
            },
            {
                path:"/hr",
                name: "hr",
                component: Hr
            },
            
            {
                path:"/role",
                name: "role",
                component: Role
            }
        ]

    },
    { 
        path: '/404',
        component: ErrorPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router