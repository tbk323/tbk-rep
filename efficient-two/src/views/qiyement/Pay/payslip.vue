<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="账号">
        <el-input
          v-model="formInline.number"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input
          v-model="formInline.tel"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-box">
      <el-button type="default" icon="el-icon-search">查询</el-button>
      <el-button type="default" icon="el-icon-refresh-right">重置</el-button>
      <el-button type="default" style="background-color: #a4adb3; color: #fff"
        >下载工资条模板</el-button
      >
      <el-button type="default" icon="el-icon-search">上传</el-button>
      <el-button
        type="default"
        icon="el-icon-circle-plus-outline"
        style="background-color: #c2c2fb; color: #fff; float: right"
        @click="dialogFormVisible = true"
        >新增工资条</el-button
      >
    </div>
    <div class="table-box">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="id" width="80"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="出勤" width="120">
        </el-table-column>
        <el-table-column prop="address" label="旷工" width="120">
        </el-table-column>
        <el-table-column prop="address" label="请假" width="120">
        </el-table-column>
        <el-table-column prop="address" label="基本工资" width="120">
        </el-table-column>
        <el-table-column prop="address" label="岗位工资" width="120">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
            >
              <i class="el-icon-edit"></i> 修改</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              <i class="el-icon-delete"></i> 删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 新增部门 -->
    <pay :dialogFormVisible="dialogFormVisible" :form="form" @add="add"></pay>
    <!-- 分页 -->
    <div class="page-box">
      <div class="page">
        <pages :currentPage1="currentPage1" :data="tableData"></pages>
      </div>
    </div>
  </div>
</template>

<script>
import pages from '../../../components/pages.vue'
import pay from './payCom.vue'
export default {
  components: { pages, pay },
  data() {
    return {
      // 新增表单
      form: {
        name: ''
      },
      dialogFormVisible: false,
      currentPage1: 1,
      tableData: [],
      formInline: {
        user: '',
        region: '',
        flag: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleDelete() {},
    handleEdit() {},
    add() {
      this.dialogFormVisible = false
    }
  }
}
</script>
<style scoped lang="scss">
.pur {
  background-color: #c2c2fb;
  color: #eee;
}
.inp {
  width: 250px;
}
.btn-box {
  padding: 0 20px;
}
.table-box {
  margin-top: 20px;
}
.page-box {
  width: 80%;
  margin-top: 20px;
  .page {
    float: right;
    font-size: 12px;
    button,
    p {
      display: inline-block;
      margin: 0 10px;
      background-color: #fff;
      border: 1px solid #eee;
      font-size: 12px;
      width: 50px;
      height: 30px;
    }
    p {
      border: none;
    }
  }
}
</style>
