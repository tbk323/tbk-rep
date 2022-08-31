<template>
  <div
    class="login-box"
    :style="{ backgroundImage: `url(${loginBackground})` }"
  >
    <div class="box">
      <h3>OA系统登录</h3>
      <!-- 登录input -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="name">
          <el-input
            v-model.trim="ruleForm.name"
            class="inp"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            v-model.trim="ruleForm.pwd"
            class="inp"
            type="password"
            placeholder="请输入密码"
            clearable
            show-password
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>

        <!-- 下部 -->
        <span class="forgetpwd shou" @click="forgetpwd">忘记密码?</span>
        <!-- 验证 -->
        <el-form-item prop="test">
          <el-input
            v-model="ruleForm.test"
            placeholder="请输入验证码"
            class="yzinp"
            clearable
          ></el-input>
          <!-- <span class="yz"><img src="login.png" alt="" /></span> -->
          <el-button class="yz"><img src="login.png" alt="" /></el-button>
        </el-form-item>
      </el-form>
      <p>
        <el-button type="primary" @click="submitForm('ruleForm')" class="btn"
          >登录</el-button
        >
      </p>
    </div>
    <!-- 修改密码弹框 -->
    <div class="xgpwd">
      <updatepwd
        :dialogFormVisible="dialogFormVisible"
        @addok="addok"
      ></updatepwd>
    </div>
  </div>
</template>

<script>
import updatepwd from './updatepwd.vue'
// import axios from 'axios'
export default {
  components: { updatepwd },
  data() {
    return {
      dialogFormVisible: false,
      testimg: '',
      ruleForm: {
        name: '',
        pwd: '',
        test: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 位', trigger: 'blur' }
        ],
        test: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 位', trigger: 'blur' }
        ]
      },
      loginBackground: '/login.png'
    }
  },
  created() {
    // axios.post('efficient/user/login').then((res) => {
    //   console.log(res)
    // })
  },
  mounted() {},
  methods: {
    addok() {
      this.dialogFormVisible = false
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/onepage')
          this.$message({
            message: '登陆成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '请输入完整',
            type: 'info'
          })
          return false
        }
      })
    },
    forgetpwd() {
      this.dialogFormVisible = true
    }
  }
}
</script>
<style scoped lang="scss">
.yz {
  box-sizing: border-box;
  // display: inline-block;
  width: 70px;
  height: 35px;
  padding: 5px;
  // text-align: center;
  border-radius: 15px;
  border: 1px rgba(128, 128, 128, 0.381) solid;
  font-size: 12px;
  color: gray;
  margin-right: -100px;
  img {
    width: 100%;
    height: 90%;
  }
}
.purple {
  background-color: #b886f8;
  color: #eee;
}
.yzinp {
  margin-right: 10px;
  margin-left: -60px;
  width: 140px;
  margin-top: 10px;
}
.input-one {
  width: 100%;
}
.login-box {
  right: 0;
  bottom: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 0px;
  background-repeat: no-repeat no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  border-radius: 20px;
  text-align: center;
  width: 400px;
  height: 350px;
  background-color: #fff;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  .forgetpwd,
  .shou:hover {
    cursor: pointer;
    font-size: 11px;
    color: #f3c437;
    float: right;
    margin-right: 70px;
    margin-top: -15px;
  }
}
.inp {
  border-radius: 60%;
  width: 250px;
  margin-left: -80px;
}
.btn {
  width: 220px;
  color: #eee;
  background-color: #d3bef5;
  border-radius: 10px;
}
</style>
