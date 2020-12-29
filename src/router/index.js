import Vue from 'vue';
import VueRouter from 'vue-router';
import Movies from '@/views/Movies.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Movies',
    component: Movies,
  },
  // може ще буде роутинг на сторінку кожного фільму
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
