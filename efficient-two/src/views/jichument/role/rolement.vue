<template>
  <div>
    <div class="top">
      <p>角色名称：<input type="text" placeholder="请输入姓名" /></p>
      <p>
        <el-button><span class="el-icon-search"></span>查询</el-button>
        <el-button><span class="el-icon-refresh-left"></span>重置</el-button>
      </p>
      <p>
        <el-button class="pur" @click="dialogFormVisible = true"
          ><span class="el-icon-circle-plus"></span> 新增角色</el-button
        >
      </p>
    </div>
    <div class="tab">
      <el-table :data="tableData" border style="width: 80%">
        <el-table-column label="id" width="80" align="center" type="index">
        </el-table-column>
        <el-table-column prop="name" label="角色名称" align="center">
        </el-table-column>
        <el-table-column prop="province" label="备注" align="center">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="primary"
              size="small"
              >编辑</el-button
            >
            <el-button type="danger" size="small"
              ><span class="el-icon-delete"> </span> 删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 111 -->
    </div>
    <!-- 新增用户 -->
    <role :dialogFormVisible="dialogFormVisible" @add="add" :form="form"></role>
    <pages :data="tableData" :currentPage1="currentPage1"></pages>
  </div>
</template>

<script>
import pages from '../../../components/pages.vue'
import role from './rolecom.vue'
export default {
  components: { pages, role },
  data() {
    return {
      dialogFormVisible: false,
      tableData: [
        {
          name: '超级管理员',
          province: '12335555'
        },
        {
          name: '部门管理员',
          province: '12335555'
        },
        {
          name: '人事管理员',
          province: '12335555'
        }
      ],
      currentPage1: 1,
      form: {
        region: '',
        name: '',
        trea: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleEdit() {},
    handleDelete() {},
    add() {
      this.dialogFormVisible = false
    }
  }
}
</script>
<style scoped lang="scss">
.inp {
  width: 250px;
}
.bto {
  margin-top: 20px;
  margin-left: 850px;
}
.tab {
  margin-top: 40px;
}
.pur {
  background-color: #c2c2fb;
  color: #eee;
}
.top {
  width: 100%;
  height: 40px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  p {
    margin: 10px;
  }
}
</style>
