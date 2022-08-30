<template>
  <div class="my-send">
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
    </div>

    <div class="table-box">
      <el-table
        :data="tableData.slice((currentPage1 - 1) * 10, currentPage1 * 10)"
        stripe
        style="width: 100%"
      >
        <el-table-column label="id" width="80" type="index"> </el-table-column>
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
              @click="handleDelete(scope.$index, scope.row)"
            >
              详情 <i class="el-icon-refresh-right"></i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-box">
      <pages :currentPage1="currentPage1" :data="tableData"> </pages>
    </div>
  </div>
</template>

<script>
import pages from '@/components/pages.vue'

export default {
  name: '',
  components: { pages },
  data() {
    return {
      tableData: [
        {
          address: '1'
        }
      ],
      currentPage1: 1,
      formInline: {}
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 通过
    throw1(i, row) {},
    // 收回
    handleDelete(i, row) {},
    // 详情
    handleEdit(i, row) {}
  }
}
</script>
<style scoped lang="scss">
.my-send {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .table-box {
    width: 100vw;
    margin: 0 auto;
    text-align: center;
  }
  .page-box {
    width: 100vw;
    margin-top: 30px;
    float: right;
  }
}
</style>
