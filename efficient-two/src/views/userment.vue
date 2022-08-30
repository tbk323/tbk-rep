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
    <el-dialog title="新增用户" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <!-- 用户input框 -->
        <el-form-item label="用户名称" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            autocomplete="off"
            class="inp"
            placeholder="请输入用户名称"
          ></el-input>
        </el-form-item>
        <!-- 账号input框 -->
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input
            v-model="form.number"
            autocomplete="off"
            class="inp"
            placeholder="请输入账号名称"
          ></el-input>
        </el-form-item>
        <!-- 手机号input框 -->
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input
            v-model="form.tel"
            autocomplete="off"
            class="inp"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <!-- 下拉角色 -->
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-select v-model="form.user">
            <el-option label="管理员角色" value="1"></el-option>
            <el-option label="普通用户" value="2"></el-option>
            <el-option label="部门管理员" value="3"></el-option>
          </el-select>
        </el-form-item>
        <!-- 下拉 所属岗位-->
        <el-form-item label="所属岗位" :label-width="formLabelWidth">
          <el-select v-model="form.post">
            <el-option label="销售岗" value="1"></el-option>
            <el-option label="技术岗" value="2"></el-option>
          </el-select>
        </el-form-item>
        <!-- 下拉 所属职级-->
        <el-form-item label="所属职级" :label-width="formLabelWidth">
          <el-select v-model="form.rank">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
          </el-select>
        </el-form-item>
        <!-- 下拉 -->
        <el-form-item label="所属部门" :label-width="formLabelWidth">
          <el-select v-model="form.depart">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // 表单
      dialogFormVisible: false,
      form: {
        name: '',
        user: '',
        post: '',
        depart: '',
        rank: '',
        number: '',
        tel: ''
      },
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
      tel: ''
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleClick() {}
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
