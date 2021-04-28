<template>
  <van-nav-bar title="标题" left-text="返回" left-arrow>
    <template #left @click="onClickLeft">
      <span>left</span>
    </template>
    <template #right @click="onClickRight">
      <span>right</span>
    </template>
  </van-nav-bar>
</template>
<script>
import { NavBar } from "vant";
export default {
  name: "navBar",
  components: {
    [NavBar.name]: NavBar,
  },
  data() {
    return {};
  },
  setup() {
    const onClickLeft = () => {
      console.log(111);
    };
    const onClickRight = () => {
      console.log(111);
    };
    return {
      onClickLeft,
      onClickRight,
    };
  },
};
</script>