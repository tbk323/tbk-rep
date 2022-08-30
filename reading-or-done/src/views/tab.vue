
<template>
  <div>
    <el-tag @click="$router.push('/table')">表格</el-tag>
    <el-tag type="success" @click="$router.push('/tab')">选项卡</el-tag>
    <!-- 标签页 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="`未读消息(${getnum})`" name="first">
        <div
          class="cen"
          v-for="(i, index) in list
            .filter((item) => item.flag === false)
            .slice((currentPage - 1) * 5, currentPage * 5)"
          :key="index"
        >
          <span>{{ i.title }}</span>
          <span>{{ i.create_time }}</span>
          <span><el-button @click="add(i)">标为已读</el-button></span>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="`已读消息(${getnum1})`" name="second">
        <div
          class="cen"
          v-for="(i, index) in list
            .filter((item) => item.flag === true)
            .slice((currentPage - 1) * 5, currentPage * 5)"
          :key="index"
        >
          <span>{{ i.title }}</span>
          <span>{{ i.create_time }}</span>
          <span><el-button type="danger" @click="del(i)">删除</el-button></span>
          <span><el-button @click="add(i)">还原未读</el-button></span>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="`回收站(${getnum2})`" name="third">
        <div
          class="cen"
          v-for="(i, index) in list
            .filter((item) => item.flag === null)
            .slice((currentPage - 1) * 5, currentPage * 5)"
          :key="index"
        >
          <span>{{ i.title }}</span>
          <span>{{ i.create_time }}</span>
          <span><el-button @click="addflag(i)">还原</el-button></span>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 分页 -->
    <el-pagination
      :current-page.sync="currentPage"
      :page-size="5"
      layout="prev, pager, next, jumper"
      :total="list.length"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      currentPage: 1,
      activeName: "first",
      list: [],
      curlist: [],
    };
  },
  created() {
    axios.get("/text.json").then((res) => {
      this.list = res.data;
      this.curlist = res.data;
    });
  },
  mounted() {},
  computed: {
    getnum() {
      const num = this.list.filter((item) => item.flag === false).length;
      return num;
    },
    getnum1() {
      const num = this.list.filter((item) => item.flag === true).length;
      return num;
    },
    getnum2() {
      const num = this.list.filter(
        (item) => item.flag === null
      ).length;
      return num;
    },
  },
  methods: {
    handleClick(tab, event) {},
    add(i) {
      let ind = this.list.findIndex((item) => item.title == i.title);
      this.list[ind].flag = !this.list[ind].flag;
    },
    // 删除
    del(i) {
      i.flag = null;
    },
    addflag(i) {
      i.flag = false;
    },
  },
};
</script>
<style scoped lang='scss'>
.cen {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 5px;
  span:nth-child(1) {
    flex: 6;
  }
  span:nth-child(2) {
    flex: 2;
  }
  span:nth-child(3) {
    flex: 2;
  }
}
</style>
