import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.vue';
// import router from './router';

Vue.config.productionTip = false;
Vue.use(infiniteScroll);
Vue.use(AOS);

new Vue({
  // router,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount('#app');
