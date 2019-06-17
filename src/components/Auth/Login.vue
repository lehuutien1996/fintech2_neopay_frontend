<template>
  <div class="box box-login">
    <header class="box__header">
      <span v-if="isRequesting == false">Đăng nhập vào hệ thống</span>
      <span v-if="isRequesting == true">Đăng gởi yêu cầu</span>
    </header>
    <section class="box__body">
      <div class="form-group">
        <label class="control-label">
          Email
          <span class="control-error" v-if="validator.errors && validator.errors.has('email')">{{ validator.errors.first('email') }}</span>
        </label>
        <input class="form-control" type="text" name="email" placeholder="Địa chỉ Email" autocomplete="off"
          v-model="email"
        >
      </div>
      <div class="form-group">
        <label class="control-label">
          Password
          <span class="control-error" v-if="validator.errors && validator.errors.has('password')">{{ validator.errors.first('password') }}</span>
        </label>
        <input class="form-control" type="password" name="password" placeholder="Mật khẩu"
          v-model="password"
        >
      </div>
    </section>
    <footer class="box__footer">
      <button class="btn btn-primary btn-outline"
        @click="send()"
      >Đăng Nhập</button>
    </footer>
  </div>
</template>

<script>
import { get, sync, dispatch } from 'vuex-pathify'
import LoginValidator from '@/validators/login.validator'

export default {
  name: 'AuthLogin',
  data() {
    return {
      validator: null,
    }
  },
  computed: {
    isRequesting: get('login/isRequesting'),
    email: sync('login/form@email'),
    password: sync('login/form@password'),
  },
  created() {
    this.validator = new LoginValidator();
  },
  methods: {
    send() {
      const { email, password } = this;
      const credentials = { email, password };

      this.validator.with(credentials);
      if (this.validator.fails()) {
        return;
      }

      dispatch('login/authenticate', credentials);
    }
  }
}
</script>

<style>

</style>
