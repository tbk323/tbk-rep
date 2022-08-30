<template>
  <div>
    <el-date-picker
      v-model="date"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="选择周"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  props: ['date'],
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
