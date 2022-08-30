<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批类型">
        <el-select v-model="formInline.region" placeholder="请假">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申请人">
        <el-input v-model="formInline.user" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="审批状态">
        <el-input v-model="formInline.flag" placeholder="请输入状态"></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-box">
      <el-button type="default" icon="el-icon-search">查询</el-button>
      <el-button type="default" icon="el-icon-refresh-right">重置</el-button>
      <el-button
        type="default"
        style="background-color: #a4adb3; color: #fff"
        icon="el-icon-search"
        >新增申请</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      formInline: {
        user: '',
        region: '',
        flag: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
