<template>
  <div>
    <div class="top">
      <p>操作人：<input type="text" placeholder="请输入姓名" /></p>
      <p><dat :date="date"></dat></p>
    </div>
    <p>
      <el-button><span class="el-icon-search"></span>查询</el-button>
      <el-button><span class="el-icon-refresh-left"></span>重置</el-button>
    </p>
    <div class="tab">
      <el-table :data="tableData" border style="width: 80%" stripe>
        <el-table-column label="id" width="80" align="center" type="index">
        </el-table-column>
        <el-table-column prop="name" label="操作人" align="center">
        </el-table-column>
        <el-table-column prop="name" label="操作路径" align="center">
        </el-table-column>
        <el-table-column prop="province" label="操作动作" align="center">
        </el-table-column>
        <el-table-column prop="province" label="操作时间" align="center">
        </el-table-column>
      </el-table>
    </div>
    <pages :data="tableData" :currentPage1="currentPage1"></pages>
  </div>
</template>

<script>
import pages from '../../../components/pages.vue'
import dat from '../../../components/date.vue'
export default {
  components: { pages, dat },
  data() {
    return {
      date: '',
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
