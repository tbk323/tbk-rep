// 结构
<template>
  <div class="myHeader">
    <div class="img">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="tabs">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="#545c64"
      >
        <el-menu-item
          :index="item.id.toString()"
          v-for="(item, index) in list"
          :key="item.id"
        >
          <i :class="item.icon"></i>
          <span> {{ item.title }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="userTx">
      <img
        src="https://img1.baidu.com/it/u=1960292808,1761809160&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        alt=""
      />
      <i class="el-icon-caret-bottom"></i>
    </div>
  </div>
</template>

// 行为
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      activeIndex2: "0",
      list: [
        {
          title: "用户",
          icon: "el-icon-user-solid",
          id: 0,
        },
        {
          title: "教学",
          icon: "el-icon-reading",
          id: 1,
        },
        {
          title: "题库",
          icon: "el-icon-reading",
          id: 2,
        },
        {
          title: "运营",
          icon: "el-icon-s-marketing",
          id: 3,
        },
        {
          title: "营销",
          icon: "el-icon-menu",
          id: 4,
        },
        {
          title: "商品",
          icon: "el-icon-shopping-bag-2",
          id: 5,
        },
        {
          title: "财务",
          icon: "el-icon-coin",
          id: 6,
        },
        {
          title: "统计",
          icon: "el-icon-pie-chart",
          id: 7,
        },
        {
          title: "系统",
          icon: "el-icon-s-tools",
          id: 8,
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

// 样式
<style scoped lang='scss'>
.myHeader {
  width: 100%;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  .img {
    width: 200px;
    text-align: center;
    height: 60px;
    img {
      width: 40px;
      height: 40px;
      margin-top: 10px;
    }
  }
  .userTx {
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      margin-top: 10px;
      border-radius: 50%;
    }
  }
}
</style>
