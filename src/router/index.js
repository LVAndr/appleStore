import {createRouter, createWebHistory} from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home.vue";
import Store from "../views/Store.vue";
import ShopDetails from "../views/ShopDetails.vue";
import Basket from "../views/Basket.vue";

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
                component: Store

            },
            {
                path: '/shop/:category?',
                name: 'shopDetails',
                component: ShopDetails

            },
            {
                path: '/basket',
                name: 'basket',
                component: Basket
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;