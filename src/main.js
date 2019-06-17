import Vue from 'vue';
import VueRouter from 'vue-router';
import Validator from 'validatorjs';
import App from './App.vue';
import store from './store';
import routes from './routes';

const isDebugging = process.env.NODE_ENV !== 'production';

// Vue configuration
Vue.config.productionTip = isDebugging;
Vue.use(VueRouter);

Validator.useLang('vi');

new Vue({
  el: '#app',
  store, // VueX Store
  router: new VueRouter({
    mode: 'history', // Removing HashBang #
    routes,
  }),
  render: h => h(App),
});
