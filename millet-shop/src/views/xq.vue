
<template>
  <div>
    <div class="mar">
    <top></top>
    <shopcen></shopcen>
    <div class="top">
      {{ list[0].product_name }}
    </div>
    <div class="box">
      <img :src="list[0].product_picture" alt="" />
      <div class="box-one">
        <p class="one">{{ list[0].product_name }}</p>
        <p>{{ list[0].product_intro }}</p>
        <p>{{ list[0].product_title }}</p>
        <p>{{ list[0].product_price }}元</p>
        <div class="box-two">
          <p>
            {{ list[0].product_name }}
            <span>{{ list[0].product_price }}元</span>
          </p>
          <p>总计：{{ list[0].product_price }}元</p>
        </div>
        <div class="box-btn">
          <el-button type="warning" @click="getcar">加入购物车</el-button>
          <el-button type="info" @click="like">喜欢</el-button>
        </div>
      </div>
    </div>
  </div>
  <bto></bto>
  </div>
</template>

<script>
import shopcen from "../components/shopcen.vue";
import top from "../components/top.vue";
import bto from "../components/bto.vue";
export default {
  name: "",
  components: {
    shopcen,
    top,bto
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios
      .post("product/getDetails", { productID: this.$route.query.id })
      .then((res) => {
        //   console.log(res.data.Product);
        this.list = res.data.Product;
      })
      
  },
  mounted() {},
  methods: {
    getcar() {
      const id = JSON.parse(localStorage.getItem("user"));
      this.$axios
        .post("user/shoppingCart/addShoppingCart", {
          user_id: id.user_id,
          product_id: this.list[0].product_id,
        })
        .then((res) => {
       this.$message({
            type: 'success',
            message: '添加成功!'
          });
        });
    },
    // 添加收藏
    like(){
      const id = JSON.parse(localStorage.getItem("user"));
      this.$axios
        .post("user/collect/addCollect", {
          user_id: id.user_id,
          product_id: this.list[0].product_id,
        })
        .then((res) => {
          console.log(res);
       this.$message({
            type: 'success',
            message: '收藏成功!'
          });
        });
    }
  },
};
</script>
<style scoped lang='scss'>
.mar{
  width: 1080px;
}
.top {
  font-size: 25px;
  width: 85%;
  height: 40px;
  line-height: 40px;
  padding: 20px;
  background-color: #eee;
}
.box-btn {
  width: 85%;
  text-align: center;
  margin-top: 20px;
}
.box {
  width: 85%;
  display: flex;
  justify-content: space-between;
  p:nth-child(1) {
    font-size: 25px;
  }
  p:nth-child(2) {
    font-size: 14px;
    color: gray;
  }
  p:nth-child(3) {
    font-size: 16px;
    color: orange;
  }
  p:nth-child(4) {
    margin-top: 40px;
    font-size: 16px;
    color: orange;
  }
  img {
    flex: 4;
    width: 100%;
    height: 100%;
    margin-right: 10px;
  }
  .box-one {
    margin-left: 20px;
    flex: 6;
    padding: 15px;
  }
}
.box-two {
  width: 85%;
  height: 180px;
  background-color: #eee;
  padding: 20px;
  p:nth-child(2) {
    color: orange;
    font-size: 30px;
    margin-top: 80px;
  }
  p:nth-child(1) {
    color: gray;
    font-size: 14px;
    margin-top: 30px;
    span {
      float: right;
    }
  }
}
</style>
