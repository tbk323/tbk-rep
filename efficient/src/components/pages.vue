<template>
  <div>
    <!-- 分页 -->
    <div class="bto">
      <el-pagination
        :current-page.sync="currentPage1"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="data.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'currentPage1'],
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.bto {
  margin-top: 20px;
  margin-left: 850px;
}
</style>
