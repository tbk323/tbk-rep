<template>
  <div>
    <!-- 材料、 -->
    <div class="add">
      <el-dialog title="新增材料" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="材料名称">
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="inp"
            ></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <textarea
              cols="30"
              rows="10"
              v-model="form.trea"
              placeholder="拥有所有权限"
            ></textarea>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button class="pur" @click="add">新增</el-button>
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
