<template>
  <div>
    <!-- 头部 -->
    <div class="top">
      <p>
        姓名：<input type="text" placeholder="请输入姓名" v-model.trim="name" />
      </p>
      <p>
        所属部门:<input
          type="text"
          placeholder="请输入部门"
          v-model.trim="depart"
        />
      </p>
      <p>
        手机号：<input
          type="text"
          placeholder="请输入手机号"
          v-model.trim="tel"
        />
      </p>
    </div>
    <!-- 中间按钮 -->
    <div class="cen">
      <p>
        <el-button><span class="el-icon-search"></span>查询</el-button>
        <el-button><span class="el-icon-refresh-left"></span>重置</el-button>
      </p>
      <p>
        <el-button class="pur" @click="dialogFormVisible = true"
          ><span class="el-icon-circle-plus"></span> 新增用户</el-button
        >
      </p>
    </div>
    <!-- 表格 -->
    <div class="tab">
      <el-table :data="tableData" border style="width: 88%" :stripe="true">
        <el-table-column
          fixed
          type="index"
          label="ID"
          width="70"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="name" label="用户名称" width="92" align="center">
        </el-table-column>
        <el-table-column prop="province" label="账号" width="76" align="center">
        </el-table-column>
        <el-table-column prop="city" label="手机号" width="180" align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="所属角色"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="zip" label="所属职级" width="180" align="center">
        </el-table-column>
        <el-table-column prop="zip" label="所属部门" width="180" align="center">
        </el-table-column>
        <el-table-column label="操作" width="180px" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="primary"
              size="small"
              >修改</el-button
            >
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 新增用户 -->
    <us :dialogFormVisible="dialogFormVisible" @add="add" :form="form"></us>
  </div>
</template>

<script>
import us from './usercom.vue'
export default {
  components: { us },
  data() {
    return {
      // 表单
      dialogFormVisible: false,
      // 表格
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ],
      name: '',
      depart: '',
      tel: '',
      form: {
        name: '',
        user: '',
        post: '',
        depart: '',
        rank: '',
        number: '',
        tel: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleClick() {},
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
.cen {
  width: 833px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p:first-child {
    flex: 9;
  }
  p:last-child {
    flex: 1;
  }
}
.pur {
  background-color: #c2c2fb;
  color: #eee;
}
.top {
  width: 833px;
  height: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
