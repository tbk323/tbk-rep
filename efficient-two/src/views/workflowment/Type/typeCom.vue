<template>
  <div>
    <div class="add">
      <el-dialog title="添加流程类型" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="类型名称">
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="inp"
            ></el-input>
          </el-form-item>
          <!-- 上级菜单 -->
          <el-form-item label="审批流程" label-width="70px">
            <el-select v-model="value">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- 结束 -->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="qx">取 消</el-button>
          <el-button class="pur" @click="add">确定</el-button>
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
      options: [
        {
          value: '1',
          label: '请假模板'
        },
        {
          value: '2',
          label: '用车模板'
        },
        {
          value: '3',
          label: '借款模板'
        },
        {
          value: '4',
          label: '出差模板'
        },
        {
          value: '5',
          label: '报销模板'
        },
        {
          value: '6',
          label: '转正模板'
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
