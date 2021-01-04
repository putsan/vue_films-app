import Vue from 'vue';
import Router from 'vue-router';
import Movies from '@/views/Movies.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue_films-app',
      name: 'Movies',
      component: Movies,
    },
    {
      path: '/vue_films-app/details/:id',
      name: 'Details',
      component: () => import('../views/Details.vue'),
    },
  ],
});
