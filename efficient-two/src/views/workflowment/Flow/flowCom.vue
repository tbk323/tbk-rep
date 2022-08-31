<template>
  <div>
    <!-- 工作编辑框 -->
    <div class="add">
      <el-dialog title="审批流程" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="流程类型">
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="inp"
            ></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-radio v-model="form.radio" label="1">启动</el-radio>
            <el-radio v-model="form.radio" label="2">禁用</el-radio>
          </el-form-item>
          <el-form-item label="流程说明">
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="inp"
            ></el-input>
          </el-form-item>
          <!-- 上级菜单 -->
          <el-form-item label="审批流程" label-width="70px">
            <p>
              第一级审批<el-select v-model="value">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </p>
            <p>
              第二级审批<el-select v-model="value2">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </p>
            <p>
              第三级审批<el-select v-model="value3">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </p>
          </el-form-item>
          <!-- 结束 -->
        </el-form>
        <p>
          <el-button class="pur"
            ><span class="el-icon-circle-plus"></span> 添加审批流程</el-button
          >
        </p>
        <div slot="footer" class="dialog-footer">
          <el-button class="pur" @click="add">立即创建</el-button>
          <el-button @click="qx">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dialogFormVisible', 'form'],
  components: {},
  data() {
    return {
      // select
      value: '',
      value2: '',
      value3: '',
      options: [
        {
          value: '1',
          label: '当前部门负责人'
        },
        {
          value: '2',
          label: '上一级部门负责人'
        },
        {
          value: '3',
          label: '指定审批人'
        }
      ]
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
