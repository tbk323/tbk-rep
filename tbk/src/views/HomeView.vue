// 结构
<template>
  <div>
    <!-- 布局容器 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <myHeader></myHeader>
      </el-header>
      <el-container>
        <el-aside width="150px">
          <myAside></myAside>
        </el-aside>
        <!-- 内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

// 行为
<script>
import myHeader from "../components/myHeader.vue";
import myAside from "../components/myAside.vue";
import axios from 'axios'
// import mock from '../../mock/mock.js'
export default {
  name: "",
  components: {
    myHeader, 
    myAside,
  },
  data() {
    return {};
  },
  created() {
    axios.get('/api/user').then(res => {
      console.log(res.data);
    })
  },
  mounted() {},
  methods: {},
};
</script>

// 样式
<style scoped lang='scss'>
.ss {
  color: #fff !important;
  border-bottom: 10px solid #58d3b8;
}
.tabs {
  width: 80%;
  display: flex;
  margin-left: 30px;
  .item {
    width: 60px;
    color: #eee;
  }
}
.el-header {
  background-color: #545c64;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
  border-right: 1px solid #333;
}

.el-main {
  background-color: #fff;
  color: #333;
  height: calc(100vh - 60px);
}
</style>
