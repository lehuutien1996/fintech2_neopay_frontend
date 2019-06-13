<template>
  <div class="box box-login">
    <header class="box__header">
      Đăng nhập vào hệ thống
    </header>
    <section class="box__body">
      <div class="form-group">
        <label class="control-label">Email</label>
        <input type="text" name="email" placeholder="Địa chỉ Email" autocomplete="off">
      </div>
      <div class="form-group">
        <label class="control-label">Password</label>
        <input type="password" name="password" placeholder="Mật khẩu">
      </div>
    </section>
    <footer class="box__footer"></footer>
  </div>
</template>

<script>
export default {
  name: 'AuthLogin',
}
</script>

<style>

</style>
