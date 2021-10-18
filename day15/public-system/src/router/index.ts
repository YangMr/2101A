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
    redirect : "/index",
    component: () => import( '../views/Layout.vue'),
    children : [
      {
        path : "/index",
        name : "index",
        component: () => import( '../views/AdminIndex.vue'),
      },
      {
        path : "/all",
        name : "all",
        component: () => import( '../views/AllPublicOpinion.vue'),
      },
      {
        path : "/positive",
        name : "positive",
        component: () => import( '../views/PositivePublicOpinion.vue'),
      },
      {
        path : "/negative",
        name : "negative",
        component: () => import( '../views/NegativePublicOpinion.vue'),
      },
      {
        path : "/keyword",
        name : "keyword",
        component: () => import( '../views/KeywordSetting.vue'),
      },
      {
        path : "/alarm",
        name : "alarm",
        component: () => import( '../views/AlarmSetting.vue'),
      }
    ]
  }

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
