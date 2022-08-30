<template>
  <div>
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="form">
        <el-form-item label="用户名">
          <el-input
            v-model.trim="form.name"
            autocomplete="off"
            class="xginp"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input
            v-model.trim="form.name"
            autocomplete="off"
            class="xginp"
          ></el-input>
        </el-form-item>
        <el-form-item label="再次输入">
          <el-input
            v-model.trim="form.name"
            autocomplete="off"
            class="xginp"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button class="purple" @click="addok">确 定</el-button>
        <el-button @click="qx">取 消</el-button>
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
      form: {
        name: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    addok() {
      this.$emit('addok')
    },
    qx() {
      this.$emit('addok')
    }
  }
}
</script>
<style scoped lang="scss">
.purple {
  background-color: #b886f8;
  color: #eee;
}
.xginp {
  width: 250px;
}
</style>
