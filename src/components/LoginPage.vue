<template>
  <div class="page-wrapper">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style lang="scss">
  .container {
    width: 768px;
    margin: auto;

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: {
        left: $padding-base;
        right: $padding-base;
      }
    }
  }

  .page-wrapper {
    min-height: 100vh;
    background-color: $color-primary-light;
  }
</style>
