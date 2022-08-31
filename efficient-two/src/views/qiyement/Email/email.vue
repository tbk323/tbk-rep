<template>
  <div>
    <div class="title-box">
      <span :class="{ active: key == 'send' }" @click="key = 'send'"
        >发送箱</span
      >
      <span :class="{ active: key == 'take' }" @click="key = 'take'"
        >收件箱</span
      >
    </div>

    <sendMsg v-show="key == 'send'"></sendMsg>
    <takeMsg v-show="key == 'take'"></takeMsg>
  </div>
</template>

<script>
import sendMsg from './sendMsg.vue'
import takeMsg from './takeMsg.vue'
export default {
  components: { sendMsg, takeMsg },
  data() {
    return {
      key: 'send'
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.title-box {
  margin-bottom: 40px;
  span {
    display: inline-block;
    width: 130px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 10px;
    margin-right: -5px;
  }
}
.active {
  background-color: #efefef;
}
</style>
