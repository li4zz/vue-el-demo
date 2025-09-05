<!-- 展开收起 -->
<template>
  <div class="container">
    <div class="list" v-for="(item, index) in dataList" :key="index">
      <foldText :showContent="item.text"></foldText>
    </div>
  </div>
</template>

<script>
import foldText from "@/components/foldText";
export default {
  components: { foldText },
  props: {},
  data() {
    return {
      dataList: [
        {
          text: `这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字111`,
        },
        {
          text: "这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字222",
        },
        {
          text: "这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字333",
        },
        {
          text: "这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字444",
        },
        {
          text: "a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig555",
        },
        {
          text: "a little pig a little pig a little piga little piga little piga little piga little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig666",
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.container {
  // padding: 40px;
}
.list {
  max-width: 360px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: left;
  margin-bottom: 20px;
  padding: 8px;
}
</style>
