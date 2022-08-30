
<template>
<div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      >
        <el-menu-item-group>
          <el-menu-item index="/table"><span class="el-icon-s-grid"></span> 表格</el-menu-item>
          <el-menu-item index="/tab"><span class="el-icon-s-data"></span> 选项卡</el-menu-item>
        </el-menu-item-group>
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
