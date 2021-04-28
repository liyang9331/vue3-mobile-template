<template>
  <nav-bar></nav-bar>
  <footer-nav :activeNavIndex="activeNavIndex"></footer-nav>
  <router-view></router-view>
</template>
<script>
import FooterNav from "./components/footerNav";
import navBar from "./components/navBar";
export default {
  components: {
    "footer-nav": FooterNav,
    "nav-bar": navBar,
  },
  data() {
    return {
      mainName: "", // 内容区域动画名
      navName: "", // 导航动画名
      isShowNav: false, // 是否显示底部导航 Tab
      activeNavIndex: 0, // 底部导航激活下标
      isRouterAlive: true, // 用于刷新页面用
      navTabs: ["Home", "Category", "Cart", "Me"], // 底部导航
    };
  },
  mounted() {
  },
};
</script>
<style>
</style>