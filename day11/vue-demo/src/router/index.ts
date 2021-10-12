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
    name: 'lifecycle',
    component: () => import('../views/LifeCycle.vue'),
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('../views/Computed.vue'),
  },
  {
    path: '/dom',
    name: 'dom',
    component: () => import('../views/Dom.vue'),
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('../views/Watch.vue'),
  },
  {
    path: '/hook',
    name: 'hook',
    component: () => import('../views/Hook.vue'),
  },
  {
    path: '/mixin',
    name: 'mixin',
    component: () => import('../views/Mixin.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue'),
  }
];

const router = createRouter({
  history:createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
