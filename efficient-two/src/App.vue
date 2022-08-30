<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
.login-box {
  .el-input__inner {
    border-radius: 15px !important;
  }
  .el-input__inner:focus {
    border-color: rgba(128, 0, 128, 0.83) !important;
  }
}
</style>
