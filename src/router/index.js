import Vue from 'vue';
import Router from 'vue-router';
import Movies from '@/views/Movies.vue';
import Details from '@/views/Details.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies,
    },
    {
      path: '/details/:id', // rewrite to Laysy loading!!!!!!!!!!!
      name: 'Details',
      component: Details,
    },
  ],
});
