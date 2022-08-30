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
          ><span class="el-icon-circle-plus"></span> 新增菜单</el-button
        >
      </p>
    </div>
    <!-- 表格 -->
    <div class="tab">
      <el-table
        :data="tableData.slice((currentPage1 - 1) * 10, currentPage1 * 10)"
        border
        style="width: 100%"
      >
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
    <div class="add">
      <el-dialog title="新增菜单" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="菜单类型">
            <el-radio v-model="form.radio" label="1">菜单</el-radio>
            <el-radio v-model="form.radio" label="2">目录</el-radio>
          </el-form-item>
          <el-form-item label="菜单名称">
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="inp"
            ></el-input>
          </el-form-item>
          <el-form-item label="菜单路径">
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="inp"
            ></el-input>
          </el-form-item>
          <el-form-item label="菜单图标">
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="inp"
            ></el-input>
          </el-form-item>
          <!-- 上级菜单 -->
          <el-form-item label="上级菜单" label-width="70px">
            <el-tree
              :data="data"
              :props="defaultProps"
              @node-click="handleNodeClick"
            ></el-tree>
          </el-form-item>
          <!-- 结束 -->
          <el-form-item label="排序">
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="inp"
            ></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <textarea
              cols="30"
              rows="10"
              v-model="form.trea"
              placeholder="说明"
            ></textarea>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button class="pur" @click="dialogFormVisible = false"
            >新增</el-button
          >
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import pages from '../components/pages.vue'
export default {
  components: { pages },
  data() {
    return {
      // 上级菜单
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
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
    handleNodeClick() {}
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
