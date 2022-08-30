<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#7aabf6"
      text-color="#fff"
      active-text-color="#eee"
      router
      :collapse="$store.state.isCollapse"
      :width="$store.state.isCollapse ? '200px' : '68px'"
      :collapse-transition="false"
    >
      <el-menu-item index="/onepage">首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting" style="color: #eee"></i>
          <span>基础配置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userment">用户管理</el-menu-item>
          <el-menu-item index="/rolement">角色管理</el-menu-item>
          <el-menu-item index="/menu">菜单管理</el-menu-item>
          <el-menu-item index="/department">部门管理</el-menu-item>
          <el-menu-item index="/Rank">职级管理</el-menu-item>
          <el-menu-item index="/postment">岗位管理</el-menu-item>
          <el-menu-item index="/loginRead">登录日志</el-menu-item>
          <el-menu-item index="/doingRead">操作日志</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 分割线 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-postcard" style="color: #eee"></i>
          <span>材料管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/cailiaoMent">材料管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 分割线 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-phone-outline" style="color: #eee"></i>
          <span>企业通讯</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/email">邮件处理</el-menu-item>
          <el-menu-item index="/payslip">新增工资条</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 分割线 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-user" style="color: #eee"></i>
          <span>OA审批</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/todo">待办事项</el-menu-item>
          <el-menu-item index="/done">已办事项</el-menu-item>
          <el-menu-item index="/mySend">我发起的</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.el-submenu__icon-arrow,
.el-icon-arrow-down {
  color: red !important;
}

.el-menu-item.is-active {
  background-color: #f4c438 !important;
}
</style>
