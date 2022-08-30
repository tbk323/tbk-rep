<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="id" width="80"> </el-table-column>
      <el-table-column prop="name" label="申请人" width="120">
      </el-table-column>
      <el-table-column prop="address" label="审批类型" width="120">
      </el-table-column>
      <el-table-column prop="address" label="申请时间" width="120">
      </el-table-column>
      <el-table-column prop="address" label="当前审批人" width="120">
      </el-table-column>
      <el-table-column prop="address" label="审批状态" width="120">
      </el-table-column>
      <el-table-column prop="address" label="所属部门" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="warning"
            @click="handleEdit(scope.$index, scope.row)"
          >
            <i class="el-icon-chat-dot-square"></i> 详情</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            <i class="el-icon-refresh-right"></i> 撤回</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['tableData'],
  name: '',
  components: {},
  data() {
    return {
      total: 0
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
