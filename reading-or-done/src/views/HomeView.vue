
<template>
<div>
<el-container>
  <el-header >
   <hed></hed>
    </el-header>
  <el-container>
    <el-aside width="200px">
      <left></left>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
import left from '../components/left.vue'
import hed from '../components/hed.vue'
export default {
  components: {
    left,hed
  },
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {
   
  }
}
</script>
<style scoped lang='scss'>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    h2{
      float: left;
    }
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

