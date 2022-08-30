<template>
  <div>
    <div class="top">
      <span
        class="el-icon-s-fold iconSize"
        @click="$store.state.isCollapse = !$store.state.isCollapse"
      ></span>
      <div class="right">
        <span class="el-icon-s-flag iconSize"></span>
        <span class="el-icon-message-solid iconSize"></span>
        <span class="el-icon-message iconSize"></span>
        <span class="el-icon-full-screen iconSize"></span>
        <span><img src="favicon.ico" alt="" /></span>
        <span>超级管理员</span>
      </div>
    </div>
  </div>
</template>

<script>
// import screenfull from 'screenfull';
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    // screenfulltoogle() {
    //   screenfull.toggle()
    // }
  }
}
</script>
<style scoped lang="scss">
.top {
  img {
    width: 20px;
    height: 20px;
    // margin-top: 10px;
  }
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  display: flex;
  span:nth-child(1) {
    flex: 7;
  }
  .right {
    flex: 3;
    span:nth-child(5) {
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-left: 10px;
      line-height: 40px;
      text-align: center;
      border: 1px solid gray;
      border-radius: 50%;
    }
    span:nth-child(6) {
      margin-left: 10px;
      color: gray;
      font-size: 19px;
    }
  }
}
.iconSize {
  font-size: 25px;
  color: gray;
  margin: 10px;
}
</style>
