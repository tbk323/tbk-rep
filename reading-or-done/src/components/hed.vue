
<template>
<div>
    <h2> <span class="el-icon-s-fold" @click="isco"></span>
    后台管理系统</h2>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {
       isco(){
      this.$store.state.tab.isCollapse=!this.$store.state.tab.isCollapse
    }
  }
}
</script>
<style scoped lang='scss'>

</style>
