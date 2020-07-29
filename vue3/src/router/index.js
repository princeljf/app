import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


import routes from '/src/components/index.js'
console.log('routes', routes);

const staticRoutes = [{
    path: '/',
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: staticRoutes
})

export default router