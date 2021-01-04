import Vue from 'vue';
import Router from 'vue-router';
import Movies from '@/views/Movies.vue';
import Details from '@/views/Details.vue';

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
      path: '/vue_films-app/details/:id', // rewrite to Laysy loading!!!!!!!!!!!
      name: 'Details',
      component: Details,
    },
  ],
});
