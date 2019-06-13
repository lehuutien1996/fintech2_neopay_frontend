import Vue from 'vue';
import VueX from 'vuex';
import pathify from './pathify';
import login from './modules/login';

const isDebugging = process.env.NODE_ENV !== 'production';

Vue.use(VueX)

export default new VueX.Store({
  strict: isDebugging,
  plugins: [
    pathify.plugin,
  ],
  modules: {
    login,
  },
})
