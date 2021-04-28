<template>
  <!-- 广告屏 -->
  <div class="ad">
    <!-- 广告图 -->
    <img :src="adimg" alt="" class="adimg" />
    <!-- 时间提示按钮 -->
    <div class="timer">
      <!-- 提示文字 -->
      <van-tag type="primary" style="margin-right:5px">广告</van-tag>
      <van-circle
        v-model:current-rate="currentSpeed"
        :rate="rate"
        :speed="speed"
        :text="text"
        :clockwise="true"
        size="30px"
      />
    </div>
    <!-- 关闭按钮 -->
    <van-button round type="default" class="ad-btn" @click.stop="skip()">跳过</van-button>
  </div>
</template>
<script>
import { Circle } from "vant";
import { Tag } from "vant";
import { Button } from 'vant';
export default {
  name: "ad",
  components: {
    [Circle.name]: Circle,
    [Tag.name]: Tag,
    [Button.name]: Button,
  },
  data() {
    return {
      currentSpeed: 1,
      speed: 20,
      text: "0", //文字
      rate: 0, //目标进度
      adimg: "",
    };
  },
  mounted() {
    this.adimg = require("../assets/images/ad.jpg");
    // 5秒计时
    let setInte = setInterval(() => {
      if (this.rate >= 100) {
        clearInterval(setInte);
        this.skip()
      } else {
        this.rate += 20;
        setTimeout(() => {
          this.text = this.rate / 20 + "";
        }, 500);
      }
    }, 1000);
  },
  methods:{
      skip(){
          this.$router.push({path:"/home"})
      }
  }
};
</script>
<style scoped>
.ad {
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 2;
  background-color: #fff;
}
.adimg {
  width: 100%;
  height: 100%;
}
.timer {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  padding-top: 0.26667rem;
  align-items: center;
}
.ad-btn{
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>