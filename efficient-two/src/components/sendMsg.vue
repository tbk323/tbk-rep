<template>
  <div>
    <div class="addr-box">
      <p>发送地址</p>
      <input type="text" />
      <button>抄送人</button>
    </div>
    <div class="addr-box">
      <p>抄送人</p>
      <input type="text" />
    </div>
    <div class="addr-box">
      <p>发件标题</p>
      <input type="text" />
    </div>
    <div class="send-box">
      <p>发件内容</p>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <p class="sendFile">上传文件</p>
    <div class="btn-box">
      <el-button style="background-color: #6fa4f6; color: #fff" size="mini"
        >取消</el-button
      >
      <el-button style="background-color: #b886f8; color: #fff" size="mini"
        >发送</el-button
      >
    </div>
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
.send-box {
  width: 40%;
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  text-align: left;
  margin-left: 30px;
  margin-bottom: 20px;
  p {
    width: 100px;
    text-align: center;
  }
}
.addr-box {
  width: 40%;
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  text-align: left;
  align-items: center;
  margin-left: 30px;
  margin-bottom: 20px;
  p {
    width: 100px;
    text-align: center;
  }
  input {
    float: right;
    width: 300px;
    height: 30px;
    margin-right: 10px;
    border: 1px solid #ccc;
  }
  button {
    width: 50px;
    height: 25px;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-top: 3px;
  }
}
.sendFile {
  width: 60px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  background-color: #a4adb3;
  border-radius: 5px;
  font-size: 10px;
  margin-left: 130px;
}
.btn-box {
  width: 40%;
  margin-top: 20px;
  button {
    float: right;
    margin-left: 10px;
  }
}
</style>
