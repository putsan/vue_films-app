import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(infiniteScroll);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
