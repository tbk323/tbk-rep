<template>
  <div>
    <!-- 用户弹窗 -->
    <el-dialog title="新增用户" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <!-- 用户input框 -->
        <el-form-item label="用户名称">
          <el-input
            v-model="form.name"
            autocomplete="off"
            class="inp"
            placeholder="请输入用户名称"
          ></el-input>
        </el-form-item>
        <!-- 账号input框 -->
        <el-form-item label="账号">
          <el-input
            v-model="form.number"
            autocomplete="off"
            class="inp"
            placeholder="请输入账号名称"
          ></el-input>
        </el-form-item>
        <!-- 手机号input框 -->
        <el-form-item label="手机号">
          <el-input
            v-model="form.tel"
            autocomplete="off"
            class="inp"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <!-- 下拉角色 -->
        <el-form-item label="角色名称">
          <el-select v-model="form.user">
            <el-option label="管理员角色" value="1"></el-option>
            <el-option label="普通用户" value="2"></el-option>
            <el-option label="部门管理员" value="3"></el-option>
          </el-select>
        </el-form-item>
        <!-- 下拉 所属岗位-->
        <el-form-item label="所属岗位">
          <el-select v-model="form.post">
            <el-option label="销售岗" value="1"></el-option>
            <el-option label="技术岗" value="2"></el-option>
          </el-select>
        </el-form-item>
        <!-- 下拉 所属职级-->
        <el-form-item label="所属职级">
          <el-select v-model="form.rank">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
          </el-select>
        </el-form-item>
        <!-- 下拉 -->
        <el-form-item label="所属部门">
          <el-select v-model="form.depart">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="qx">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['dialogFormVisible', 'form'],
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    add() {
      this.$emit('add')
    },
    qx() {
      this.$emit('add')
    }
  }
}
</script>
<style scoped lang="scss"></style>
