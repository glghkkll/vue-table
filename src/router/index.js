import Main from '@/view/Main'
import Home from '@/view/Home';
import Page1 from '@/view/Page1'

import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: Home
            },
            {
                path: '/page1',
                component: Page1
            },
        ]
    }
]

export default new VueRouter({
    routes
})
