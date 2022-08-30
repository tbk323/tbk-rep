
<template>
 <div>
   <div class="login">
    <div class="top">
      <div class="top-one">
        <p class="shou"><span @click="btn" class="flag">登录</span> <span class="flag">|注册</span></p>
        <span class="shou" @click="$router.push('/okorder')">我的订单</span>
        <span @click="$router.push('/like')" class="shou">我的收藏</span>
        <span class="shou gwc" @click="$router.push('/shopcar')">购物车()</span>
      </div>
    </div>
    <shopcen></shopcen>
    <!-- 轮播图 -->
    <div class="swp">
      <el-carousel height="350px">
        <el-carousel-item v-for="item in imglist" :key="item.carousel_id">
          <h3 class="small">
            <img :src="item.imgPath" alt="" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 登录 -->
    <div class="btn">
      <el-dialog title="登录" :visible.sync="dialogFormVisible">
        <el-form :model="userform">
          <p>
            <span class="el-icon-user-solid"></span
            ><el-input
              v-model="userform.userName"
              autocomplete="off"
            ></el-input>
          </p>
          <p>
            <span class="el-icon-s-tools"></span
            ><el-input
              v-model="userform.password"
              autocomplete="off"
            ></el-input>
          </p>
          <p>
            <el-button type="primary" @click="btnok" class="dneg"
              >登录</el-button
            >
          </p>
        </el-form>
      </el-dialog>
    </div>
    <!-- 页面 -->
    <phonelist></phonelist> 
  </div>
  <!-- 底部 -->
    <bto></bto>
 </div>
</template>

<script>
import shopcen from "../components/shopcen.vue";
import phonelist from "../components/phonelist.vue";
import bto from "../components/bto.vue";
export default {
  name: "",
  components: {
    shopcen,
    phonelist,
    bto,
  },
  data() {
    return {
      num:localStorage.getItem('num'),
      user:{},
      userform: {
        userName: "",
        password: "",
      },
      imglist: [],
      dialogFormVisible: false,
    };
  },
  created() {
    this.getlist();
    this.getlogin();
    this.getuser()
  },
  mounted() {},
  methods: {
    // 登录
    btnok() {
      this.getlogin();
      this.dialogFormVisible = false;
    },
    // 轮播图
    getlist() {
      this.$axios.post("resources/carousel").then((res) => {
        // console.log(res.data.carousel);
        this.imglist = res.data.carousel;
      });
    },
    // 登录接口
    getlogin() {
      this.$axios.post("users/login", this.userform).then((res) => {
        console.log(res);
        if (res.data.code == "001") {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.getuser()
          this.$notify({
          title: '成功',
          message: '登陆成功',
          type: 'success'
        });
        } else {
          return;
        }

        // this.id=res.data.user.user_id
      });
    },
    // 获取用户
    getuser(){
      this.user=JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):{
        userName:'',
        user_id:''
      }
    },
    btn() {
      this.dialogFormVisible = true;
    },
  },
};
</script>
<style scoped lang='scss'>
.shou:hover{
    cursor:pointer;
    // display: inline-block;
    // width: 90px;
    height: 100%;
    background-color: gray;
    text-align: center;
    line-height: 40px;
}
.login {
  width: 1080px;
}
.el-form {
  padding-left: 120px;
  .el-input {
    width: 250px;
  }
  .dneg {
    width: 250px;
  }
}
.small {
  img {
    width: 100%;
    height: 100%;
  }
}
.top {
  overflow: hidden;
  width: 100%;
  height: 40px;
  background-color: #333;
  color: #eee;
  .top-one {

    width: 450px;
    height: 40px;
    justify-content: space-around;
    display: flex;
    float: right;
    align-items: center;
    .gwc {
      color: orange;
    }
  }
}
</style>
