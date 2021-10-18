import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue'),
  },
  {
    path: '/',
    name: 'layout',
    component: () => import( '../views/Layout.vue'),
  }

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
