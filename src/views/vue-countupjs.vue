<!-- vue 数字动画 -->
<template>
  <div class="wrapper">
    <VueCountUp :start-value="0" :end-value="10000" />
    <div class="number-grow-warp">
      <span
        ref="numberGrow"
        :data-time="time"
        class="number-grow"
        :data-value="value"
        >0</span
      >
    </div>
    <CountTo
      :startVal="startVal"
      :endVal="endVal"
      :duration="3000"
      separator=""
    ></CountTo>
  </div>
</template>

<script>
import VueCountUp from "vue-countupjs";
import CountTo from "vue-count-to";
export default {
  components: { VueCountUp, CountTo },
  props: {
    time: {
      type: Number,
      // 达到最终值所需时间
      default: 2,
    },
    value: {
      type: Number,
      // 最终值
      default: 1200000,
    },
  },
  data() {
    return {
      startVal: 0,
      endVal: 30000,
    };
  },
  watch: {},
  computed: {},
  methods: {
    numberGrow(ele) {
      let _this = this;

      let step = (_this.value * 10) / (_this.time * 1000);
      let current = 0;
      // 初始值
      let start = 120000;
      let t = setInterval(function () {
        start += step;
        if (start > _this.value) {
          clearInterval(t);
          start = _this.value;
          t = null;
        }
        if (current === start) {
          return;
        }
        current = start;
        ele.innerHTML = current
          .toString()
          .replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,");
      }, 10);
    },
  },
  created() {},
  mounted() {
    this.numberGrow(this.$refs.numberGrow);
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  .number-grow-warp {
    transform: translateZ(0);
  }
  .number-grow {
    font-family: Arial-BoldMT;
    font-size: 18px;
    color: #ffaf00;
    letter-spacing: 2.67px;
    margin: 110px 0 20px;
    display: block;
    line-height: 64px;
  }
}
</style>
