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
  },
  {
    path: '/shallow',
    name: 'shallow',
    component: () => import('../views/Shallow.vue'),
  },
  {
    path: '/readonly',
    name: 'readonly',
    component: () => import('../views/ReadOnly.vue'),
  },
  {
    path: '/raw',
    name: 'raw',
    component: () => import('../views/Raw.vue'),
  },
  {
    path: '/toref',
    name: 'toref',
    component: () => import('../views/ToRef.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/custom',
    name: 'custom',
    component: () => import('../views/Custom.vue'),
  },
  {
    path: '/define',
    name: 'define',
    component: () => import('../views/Define.vue'),
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/Store.vue'),
  },
  {
    path: '/rou',
    name: 'rou',
    component: () => import('../views/Rou.vue'),
  },
  {
    path: '/model',
    name: 'model',
    component: () => import('../views/Model.vue'),
  },
  {
    path: '/prod',
    name: 'prod',
    component: () => import('../views/Prod.vue'),
  }
];

const router = createRouter({
  history:createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
