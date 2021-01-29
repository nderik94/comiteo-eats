import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/RestaurantList.vue'),
    },
    {
        path: '/restaurants/:restaurantId',
        name: 'restaurant',
        component: () => import('../components/RestaurantDetail.vue'),
    },
    {
        path: '/cart',
        component: () => import('../components/Cart.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
