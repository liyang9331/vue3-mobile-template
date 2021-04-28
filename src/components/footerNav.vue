<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item name="category" icon="search">发现</van-tabbar-item>
    <van-tabbar-item name="shop-cart" icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item name="setting" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: 'footNav',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      active: "home",
    };
  }
};
</script>