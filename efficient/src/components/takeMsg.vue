<template>
  <div>
    <div class="take-box">
      <ul>
        <li>xxxx邮件</li>
        <li v-for="item in 8" :key="item"></li>
      </ul>
      <div class="right-box">
        <p>标题：请假申请</p>
        <div class="bom-box">
          内容：或者文件之类的 <br />
          如果是文件：下载
        </div>
      </div>
    </div>
    <div class="btn-box"><button>取消</button></div>
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
.take-box {
  display: flex;
  justify-content: flex-start;
  width: 50%;
  font-size: 12px;
  border: 1px solid #ccc;
  margin-left: 20px;
  ul {
    width: 150px;
    border-right: 1px solid #ccc;
    li {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
      text-align: center;
    }
  }
  .right-box {
    flex: 1;
    p {
      border-bottom: 1px solid #ccc;
      height: 40px;
      padding: 0 20px;
      line-height: 40px;
    }
    .bom-box {
      text-align: center;
      padding: 20px;
    }
  }
}
.btn-box {
  width: 50%;
  padding: 20px;
  button {
    width: 80px;
    height: 30px;
    float: right;
    background-color: #6fa4f6;
    color: white;
    font-size: 12px;
    border: none;
    border-radius: 10px;
  }
}
</style>
