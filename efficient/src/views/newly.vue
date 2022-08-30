<template>
  <div class="newly">
    <p>新增材料</p>
    <div class="material">材料名称 <input type="text" /></div>
    <div class="material">材料地址 <span>上传材料</span></div>
    <div class="tare"></div>
  </div>
</template>

<script>
export default {
  name: '',
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
.newly {
  width: 100vw;
  height: 400px;
  padding: 20px;
  font-size: 12px;
  p {
    margin-bottom: 40px;
  }
  .material {
    margin-left: 80px;
    margin-bottom: 20px;
    input {
      margin-left: 10px;
      border: 1px solid #ccc;
      height: 20px;
    }
    span {
      display: inline-block;
      width: 60px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      background-color: #a4adb3;
      color: white;
      margin-left: 10px;
      border-radius: 3px;
    }
  }
  .tare {
    width: 300px;
    height: 200px;
    // margin: 0 auto;
    margin-left: 250px;
    border: 1px solid #ccc;
  }
}
</style>
