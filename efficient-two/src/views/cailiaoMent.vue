<template>
  <div>
    <div class="top">
      <p>材料名称：<input type="text" placeholder="请输入姓名" /></p>
      <p>
        <el-button><span class="el-icon-search"></span>查询</el-button>
        <el-button><span class="el-icon-refresh-left"></span>重置</el-button>
      </p>
      <p>
        <el-button class="pur" @click="dialogFormVisible = true"
          ><span class="el-icon-circle-plus"></span> 新增材料</el-button
        >
      </p>
    </div>
    <div class="tab">
      <el-table
        :data="tableData.slice((currentPage1 - 1) * 10, currentPage1 * 10)"
        border
        style="width: 80%"
      >
        <el-table-column label="id" width="80" align="center" type="index">
        </el-table-column>
        <el-table-column prop="name" label="材料名称" align="center">
        </el-table-column>
        <el-table-column prop="province" label="材料地址" align="center">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="primary"
              size="small"
              >下载</el-button
            >
            <el-button type="danger" size="small"
              ><span class="el-icon-delete"> </span> 删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 111 -->
    </div>
    <!-- 新增材料 -->
    <div class="add">
      <el-dialog title="新增材料" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="材料名称">
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
              placeholder="拥有所有权限"
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
    <pages :data="tableData" :currentPage1="currentPage1"></pages>
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
          label: '亚洲',
          children: [
            {
              label: '中国',
              children: [
                {
                  label: '北京',
                  label: '上海'
                }
              ]
            }
          ]
        },
        {
          label: '北美洲',
          children: [
            {
              label: '美国'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
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
    handleNodeClick() {}
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
