import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/dashboard.vue')
    },
    {
        path: '/cliente',
        name: 'Cliente',
        component: () => import('../views/cliente.vue')
    },
    {
        path: '/utilizador',
        name: 'Utilizador',
        component: () => import('../views/utilizador.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router