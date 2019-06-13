import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';

const isDebugging = process.env.NODE_ENV !== 'production';

// Vue configuration
Vue.config.productionTip = isDebugging;
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: new VueRouter({
    mode: 'history', // Removing HashBang #
    routes,
  }),
  render: h => h(App),
});
