import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/HelloWorld'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/Login'),
    },
    {
        path: '/contactus',
        name: 'contactUs',
        component: () => import('@/components/ContactUs'),
    },
];

const router = new VueRouter({
    routes: routes,
});

export default router;