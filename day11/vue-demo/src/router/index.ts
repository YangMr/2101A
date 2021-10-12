import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw,  } from 'vue-router';
import Home from '../views/Home.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lifecycle',
    name: '/lifecycle',
    component: () => import('../views/LifeCycle.vue'),
  },
  {
    path: '/computed',
    name: '/computed',
    component: () => import('../views/Computed.vue'),
  }
];

const router = createRouter({
  history:createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
