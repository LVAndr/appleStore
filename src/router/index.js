import {createRouter, createWebHistory} from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/store',
                name: 'store',
                component: () => import('../views/Store.vue')

            },
            {
                path: '/shop/:category?',
                name: 'shopDetails',
                component: () => import('../views/ShopDetails.vue')

            },
            {
                path: '/basket',
                name: 'basket',
                component: () => import('../views/Basket.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;