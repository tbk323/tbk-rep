// 结构
<template>
  <!-- 学员管理页面 -->
  <div>
    <div class="header">学员管理</div>
    <!-- 表格部分 -->
    <div class="table-box">
      <!-- 搜索框 -->
      <div class="search-box">
        <p>
          学员状态 :
          <el-select
            v-model="selectVal"
            placeholder="请选择"
            @change="changFlag"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </p>
        <p>
          学生名称 :
          <el-input
            placeholder="请输入学生关键字"
            style="width: 200px"
            v-model="nickname"
          ></el-input>
        </p>
        <p>
          手机号 :
          <el-input
            placeholder="请输入手机号"
            v-model="mobile"
            style="width: 200px"
          ></el-input>
        </p>
        <p>
          <el-button icon="el-icon-search" @click="search">搜索</el-button>
          <el-button icon="el-icon-refresh-right" @click="remake"
            >重置</el-button
          >
        </p>
      </div>
      <div class="btn-box">
        <el-button type="primary" size="small">新增学员</el-button>
        <el-button type="primary" size="small">批量导入</el-button>
        <el-button type="primary" size="small">批量导出</el-button>
        <el-button type="primary" size="small">查看报表</el-button>
      </div>
      <el-table
        :data="tableData.slice((page - 1) * pageSize, page * pageSize)"
        border
        stripe
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="学生姓名">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="" width="50px" />
            {{ scope.row.nickname }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" width="180">
        </el-table-column>
        <el-table-column label="状态" width="80">
          <template slot-scope="scope">
            {{ scope.row.status ? "启用" : "禁用" }}
          </template>
        </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{ scope.row.created_at }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small"> 移除 </el-button> -
            <el-button type="text" size="small"> 编辑 </el-button> -
            <el-button type="text" size="small"> 禁用 </el-button> -
            <el-button type="text" size="small"> 删除 </el-button> -
            <el-button type="text" size="small"> 重置密码 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[5, 10, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total1"
      >
      </el-pagination>
    </div>
  </div>
</template>

// 行为
<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      // 学员状态
      options: [
        {
          value: "1",
          label: "启用",
        },
        {
          value: "0",
          label: "禁用",
        },
      ],
      // 表格数据
      tableData: [],
      // 选择器数据
      selectVal: "",
      //   一页几条
      pageSize: 5,
      page: 1,
      list: [],
      nickname: "",
      mobile: "",
    };
  },
  created() {
    axios.get("/api/user").then((res) => {
      this.tableData = res.data.list;
      this.list = res.data.list;
    });
  },
  computed: {
    total1() {
      return this.tableData.length;
    },
  },
  mounted() {},
  methods: {
    // 搜索
    search() {
      this.tableData = this.list.filter(
        (item) =>
          item.status.toString().includes(this.selectVal) &&
          item.nickname.includes(this.nickname) &&
          item.mobile.includes(this.mobile)
      );
    },
    // 切换状态
    changFlag() {
      console.log(this.selectVal);
    },
    // 重置
    remake() {
      this.selectVal = "";
      this.nickname = "";
      this.mobile = "";
      this.tableData = this.list
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.page = val;
    },
  },
  filters: {
    timer(val) {
      return new Date(val * 1000).toLocaleString();
    },
  },
};
</script>

// 样式
<style scoped lang='scss'>
.header {
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding-left: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #333;
}
.table-box {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  .btn-box {
    width: 100%;
    margin-top: 20px;
    padding-left: 30px;
    box-sizing: border-box;
  }
  .search-box {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;
  }
}
</style>
