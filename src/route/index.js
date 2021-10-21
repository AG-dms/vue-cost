import Vue from "vue"
import Router from "vue-router"


Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/vue-cost-portfolio/',
            component: () => import('../views/DashBoard.vue'),
            name: 'dashboard',
        },
        {
            path: '/dashboard',
            component: () => import('../views/DashBoard.vue'),
            name: 'dashboard',
            alias: "/"
        },
        


        {
            path: '/about',
            component: () => import('../views/About.vue'),
        },
        {
            path: "/notfound",
            component: () => import('../views/NotFound.vue'),
        },
        {
            path: "*",
            component: () => import('../views/NotFound.vue')
        },
        {
            path: '/add/payment/:category?',
            component: () => import('@/components/addPayment.vue'),
        }

    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})