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
.el-submenu__icon-arrow ,.el-icon-arrow-down{
	color: #eee !important;
	font-size: 20px !important;
}
</style>
