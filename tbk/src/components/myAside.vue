// 结构
<template>
  <!-- 侧边栏 -->
  <div>
    <ul v-for="(item, i) in routes" :key="i">
      <li
        :class="{ active: activeRoute == item.path }"
        @click="toggle(item.path)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

// 行为
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      // 高亮路由
      activeRoute: "/studens",
      // 路由数据
      routes: [
        {
          title: "学员管理",
          path: "/studens",
        },
        {
          title: "讲师管理",
          path: "/js",
        },
        {
          title: "助教管理",
          path: "/xs",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 切换路由
    toggle(path) {
      this.activeRoute = path;
      this.$router.push(path);
    },
  },
};
</script>

// 样式
<style scoped lang='scss'>
.active {
  color: #39f;
}
ul {
  width: 100%;
  li {
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
}
</style>
