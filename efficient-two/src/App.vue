<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
.pur {
  background-color: #b886f8 !important;
  color: #eee !important;
}
.inp {
  width: 250px !important;
}
.el-dialog {
  border-radius: 15px !important;
}
.login-box {
  .el-input__inner {
    border-radius: 15px !important;
  }
  .el-input__inner:focus {
    border-color: rgba(128, 0, 128, 0.83) !important;
  }
}
.el-submenu__icon-arrow,
.el-icon-arrow-down {
  color: #eee !important;
  font-size: 20px !important;
}
</style>
