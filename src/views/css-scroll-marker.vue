<!-- scroll-marker实现tab效果 -->
<template>
  <div>
    <div class="tab">
      <div class="item" style="--tab-title: 'tab1'">
        tab content 1
        <p>11111</p>
      </div>

      <div class="item" style="--tab-title: 'tab2'">
        <h3>tab content 2</h3>
        <p>22222</p>
      </div>

      <div class="item" style="--tab-title: 'tab3'">
        tab content 3
        <p>33333</p>
      </div>

      <div class="item" style="--tab-title: 'tab4'">
        tab content 4
        <p>44444</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>
<style>
.tab {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 226px;
  overflow: auto;
  scrollbar-width: none;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth; /** 平滑滚动 */
  scroll-marker-group: before;
}

.tab::scroll-marker-group {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
  overflow-x: auto;
  scrollbar-width: none;
  height: 36px;
  line-height: 36px;
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.tab .item {
  scroll-snap-align: start;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.tab .item::scroll-marker {
  display: inline-block;
  content: var(--tab-title);
  text-decoration: none;
  color: #333;
  padding: 0 8px;
  height: 34px;
  line-height: 34px;
  border-bottom: 2px solid transparent;
}

.tab .item::scroll-marker:hover {
  color: #409eff;
}

.tab .item::scroll-marker:target-current {
  color: #409eff;
  border-color: #409eff;
}
</style>
