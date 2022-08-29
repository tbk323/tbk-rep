<template>
  <div>
    <el-container>
      <el-header>
        <hea :topList="topList"></hea>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <asid :leftList="leftList"></asid>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asid from "../components/aside.vue";
import hea from "../components/header.vue";
export default {
  name: "",
  components: {
    asid,
    hea,
  },
  data() {
    return {
      topList: [
        {
          id: "1",
          name: "用户",
          icon: "el-icon-user",
        },
        {
          id: "2",
          name: "教学",
          icon: "el-icon-s-shop",
        },
        {
          id: "3",
          name: "题库",
          icon: "el-icon-s-shop",
        },
        {
          id: "4",
          name: "运营",
          icon: "el-icon-menu",
        },
        {
          id: "5",
          name: "营销",
          icon: "el-icon-menu",
        },
        {
          id: "6",
          name: "商品",
          icon: "el-icon-s-finance",
        },
        {
          id: "7",
          name: "财务",
          icon: "el-icon-folder-checked",
        },
        {
          id: "8",
          name: "统计",
          icon: "el-icon-help",
        },
        {
          id: "9",
          name: "系统",
          icon: "el-icon-setting",
        },
      ],
      leftList: [],
    };
  },
  created() {
    this.$axios.get("/api/list").then((res) => {
      this.leftList = res.data.data;
    });
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.el-header,
.el-footer {
  background-color: #39f;
  height: 60px;
}

.el-main {
  color: #333;
  padding: 0;
  margin: 0;
}
</style>