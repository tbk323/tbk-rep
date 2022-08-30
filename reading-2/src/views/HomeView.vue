
<template>
<div>
  <el-container>
  <el-header>
    <hd></hd>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <ad></ad>
    </el-aside>
    <el-main> <router-view/></el-main>
  </el-container>
</el-container>

</div>
</template>

<script>
import hd from '../components/head.vue'
import ad from '../components/aside.vue'
export default {
  name: '',
  components: {
    hd,ad
  },
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
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
</style>

