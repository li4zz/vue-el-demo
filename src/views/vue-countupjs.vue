<template>
  <div class="wrapper">
    <VueCountUp :start-value="0" :end-value="10000" />
  </div>
</template>

<script>
import VueCountUp from "vue-countupjs";
export default {
  components: { VueCountUp },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.wrapper {
}
</style>
