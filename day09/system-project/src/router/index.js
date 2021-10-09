import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',

    component: () => import( '../views/login'),
  },

];

const router = new VueRouter({
  routes,
});

export default router;
