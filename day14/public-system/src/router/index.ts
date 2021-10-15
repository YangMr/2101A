import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue'),
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
