<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <p>OA管理系</p>
        <asid></asid>
      </el-aside>
      <el-container>
        <el-header>
          <headr></headr>
        </el-header>
        <el-main> <router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headr from '../components/header.vue'
import asid from '../components/aside.vue'
export default {
  components: {
    headr,
    asid
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.el-header {
  background-color: #eee;
  color: #333;
  border-bottom: 1px solid gray;
  // line-height: 60px;
}

.el-aside {
  background-color: #7aabf6;
  color: #fff;
  p {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
}

.el-main {
  background-color: #fff;
  color: #333;
}
</style>
