
<template>
  <div>
    <div class="mar">
    <top></top>
    <shopcen></shopcen>
    <div class="cen">
      <p>全部商品</p>
      <!-- 导航栏 -->
      <div class="dao">
        <h4>分类</h4>
        <span @click="all(category_id=0)" :class="{ gl: id == category_id }" class="shou">全部</span>
        <li v-for="(i, index) in daolist" :key="index">
          <span
            @click="getproduct(i.category_name, i.category_id)"
            :class="{ gl: id == i.category_id }"
            class="shou"
            >{{ i.category_name }}</span
          >
        </li>
      </div>
    </div>
    <!-- 商品 -->
    <div class="box">
      <ul>
        <li
          v-for="(i, index) in list.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )"
          :key="index"
          @click="tz(i)"
        >
          <p><img :src="i.product_picture" alt="" /></p>
          <p>{{ i.product_name }}</p>
          <p>{{ i.product_title }}</p>
          <p>{{ i.product_price }}元</p>
        </li>
      </ul>
    </div>

    <!-- 分页 -->
    <div class="fen" style="text-align: center">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="list.length"
      >
      </el-pagination>
    </div>
   
  </div>
   <!-- 底部 -->
    <bto></bto>
  </div>
</template>

<script>
import top from "../components/top.vue";
import shopcen from "../components/shopcen.vue";
import bto from "../components/bto.vue";
export default {
  name: "",
  components: {
    top,
    shopcen,
    bto,
  },
  data() {
    return {
      id: 0,
      name: "",
      list: [],
      daolist: [],
      totallist: [],
      currentPage: 1,
      pageSize: 10,
    };
  },
  created() {
    this.getlist();
    this.dao();
  },
  mounted() {},
  methods: {
    // 跳转页面
    tz(i){
      this.$router.push({
        path:'/xq',
        query:{
          id:i.product_id
        }
      })
    },
    // 点击全部获取所有数据
    all(i) {
      this.id=i
      this.getlist();
    },
    // 分页数据
    getlist() {
      this.$axios
        .post("product/getAllProduct")
        .then((res) => {
          // console.log(res);
          this.list = res.data.Product;
        });
    },
    // 商品数据
    getproduct(val, id) {
      this.id = id;
      this.$axios
        .post("product/getPromoProduct", { categoryName: [val] })
        .then((res) => {
          // console.log(res);
          this.list = res.data.Product;
        });
    },
    // 分页操作
    handleSizeChange(val) {
      this.pageSize = val;
      // this.getlist();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      // this.getlist();
    },
    // 导航数据
    dao() {
      this.$axios.post("product/getCategory").then((res) => {
        console.log(res.data.category);
        this.daolist = res.data.category;
      });
    },
  },
};
</script>
<style scoped lang='scss'>
li{
  list-style: none;
}
.mar {
  width: 1080px;
}
.shou:hover{
    cursor:pointer;
}
.gl {
  color: #39f;
  border-color: #39f;
}
.box {
  width: 100%;
  ul {
    flex-wrap: wrap;
    text-align: center;
    display: flex;
    justify-content: space-between;
    li {
      margin: 5px;
      list-style: none;
      flex: 19%;
      img {
        width: 150px;
        height: 200px;
      }
    }
  }
}
.cen {
  width: 100%;
  height: 70px;
  font-size: 25px;
  border-bottom: 3px orange solid;
  padding: 10px;
}
.dao {
  width: 700px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -20px;
  span {
    font-size: 14px;
    display: inline-block;
    width: 60px;
    height: 20px;
    border: 1px solid gray;
    text-align: center;
    // border-bottom: 0;
    margin-bottom: 10px;
  }
}
</style>
