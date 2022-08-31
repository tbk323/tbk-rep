<template>
  <div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动区域">
          <el-select v-model="form.region">
            <el-option label="请假申请" value="1"></el-option>
            <el-option label="换车申请" value="2"></el-option>
            <el-option label="出差申请" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请时间">
          <!-- 日期 -->
          <!-- <el-date-picker v-model="date" type="date" placeholder="选择日期">
          </el-date-picker> -->
          <!-- 时间 -->
          <!-- <el-time-select
            v-model="time"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }"
            placeholder="选择时间"
          >
          </el-time-select> -->
        </el-form-item>
        <el-form-item label="审批流程">
          <el-steps :active="1">
            <el-step title="admin" description="guanliyuan"></el-step>
            <el-step title="debveloper" description="guanliyuan"></el-step>
            <el-step title="over"></el-step>
          </el-steps>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="qx">取 消</el-button>
        <el-button type="primary" @click="add">撤回</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['dialogFormVisible'],
  components: {},
  data() {
    return {
      date: '',
      time: '',
      value: '',
      form: {
        region: ''
      }
    }
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
