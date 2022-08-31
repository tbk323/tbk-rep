<template>
  <div>
    <div class="top">
      <p>菜单名称：<input type="text" placeholder="请输入姓名" /></p>
      <p>
        <el-button><span class="el-icon-search"></span>查询</el-button>
        <el-button><span class="el-icon-refresh-left"></span>重置</el-button>
      </p>
      <p>
        <el-button class="pur" @click="dialogFormVisible = true"
          ><span class="el-icon-circle-plus"></span> 新增菜单</el-button
        >
      </p>
    </div>
    <!-- 表格 -->
    <div class="tab">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="菜单名称" width="180">
        </el-table-column>
        <el-table-column prop="name" label="菜单路径" width="180">
        </el-table-column>
        <el-table-column prop="address" label="排序"> </el-table-column>
        <el-table-column prop="address" label="菜单图标"> </el-table-column>
        <el-table-column prop="address" label="菜单类型"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <pages :data="tableData" :currentPage1="currentPage1"></pages>

    <!-- 编辑框 -->
    <men :dialogFormVisible="dialogFormVisible" :form="form" @add="add"></men>
  </div>
</template>

<script>
import pages from '../../../components/pages.vue'
import men from './menucom.vue'
export default {
  components: { pages, men },
  data() {
    return {
      // 新增表单
      form: {
        region: '',
        name: '',
        trea: '',
        radio: '1'
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      currentPage1: 1,
      dialogFormVisible: false
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
.pur {
  background-color: #c2c2fb;
  color: #eee;
}
.inp {
  width: 250px;
}
.tab {
  margin-top: 90px;
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
  .pur {
    background-color: #c2c2fb;
    color: #eee;
  }
}
</style>
