<template>
  <div>
    <div class="add">
      <el-dialog title="新增菜单" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="菜单类型">
            <el-radio v-model="form.radio" label="1">菜单</el-radio>
            <el-radio v-model="form.radio" label="2">目录</el-radio>
          </el-form-item>
          <el-form-item label="菜单名称">
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="inp"
            ></el-input>
          </el-form-item>
          <el-form-item label="菜单路径">
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="inp"
            ></el-input>
          </el-form-item>
          <el-form-item label="菜单图标">
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="inp"
            ></el-input>
          </el-form-item>
          <!-- 上级菜单 -->
          <el-form-item label="上级菜单" label-width="70px">
            <el-tree
              :data="data"
              :props="defaultProps"
              @node-click="handleNodeClick"
            ></el-tree>
          </el-form-item>
          <!-- 结束 -->
          <el-form-item label="排序">
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
              placeholder="说明"
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
    return {
      // 上级菜单
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleNodeClick() {},
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
