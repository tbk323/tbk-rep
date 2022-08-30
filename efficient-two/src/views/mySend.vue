<template>
  <div class="my-send">
    <topForm></topForm>

    <div class="table-box">
      <tableCom :tableDate="tableDate"></tableCom>
    </div>
    <div class="page-box">
      <pages :currentPage1="currentPage1" :data="tableDate"></pages>
    </div>
  </div>
</template>

<script>
import pages from '@/components/pages.vue'
import topForm from '@/components/topForm.vue'
import tableCom from '@/components/table.vue'
export default {
  components: { pages, topForm, tableCom },
  data() {
    return {
      tableDate: [],
      total: 0,
      currentPage1: 1
    }
  },
  created() {
    this.total = this.tableDate.length
  },
  mounted() {},
  methods: {
    // 撤回
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
