import LoginPage from '@/components/LoginPage.vue'
import Login from '@/components/Auth/Login.vue'
import multiguard from 'vue-router-multiguard'
import auth from './guards/auth.guard'

export default {
  path: '/auth',
  component: LoginPage,
  children: [
    {
      path: 'login',
      component: Login,
      beforeEnter: multiguard([
        auth,
      ]),
    },
  ]
};
