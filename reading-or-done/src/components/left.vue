
<template>
<div>
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
     :collapse="$store.state.tab.isCollapse"
      router
      >
      <el-menu-item index="/table">
        <i class="el-icon-menu"></i>
        <span slot="title">表格</span>
      </el-menu-item>
      <el-menu-item index="/tab">
        <i class="el-icon-menu"></i>
        <span slot="title">选项卡</span>
      </el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
        
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>

</style>
