<template>
  <div class="waterfall-list">
    <div
      v-for="(column, index) in columns"
      :key="index"
      class="column"
      :style="columnStyle"
    >
      <WaterfallItem
        v-for="item in column"
        :key="item.id"
        :item="item"
        :style="{ animationDelay: `${item.delay}ms` }"
      />
    </div>
  </div>
</template>

<script>
import WaterfallItem from "@/components/WaterfallFlow/WaterfallItem.vue";

export default {
  name: "WaterfallList",
  components: {
    WaterfallItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    columnCount: {
      type: Number,
      default: 4,
    },
    columnWidth: {
      type: Number,
      default: 300,
    },
    gap: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      columns: [],
    };
  },
  computed: {
    columnStyle() {
      return {
        width: `${this.columnWidth}px`,
        gap: `${this.gap}px`,
      };
    },
  },
  watch: {
    items: {
      immediate: true,
      handler: "distributeItems",
    },
    columnCount: "distributeItems",
  },
  mounted() {
    this.distributeItems();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    initColumns() {
      this.columns = Array.from({ length: this.columnCount }, () => []);
    },
    distributeItems() {
      this.initColumns();
      const columnHeights = Array(this.columnCount).fill(0);

      this.items.forEach((item, index) => {
        this.$set(item, "delay", index * 100);
        const minHeightIndex = columnHeights.indexOf(
          Math.min(...columnHeights)
        );
        this.columns[minHeightIndex].push(item);
        columnHeights[minHeightIndex] += (item.height || 200) + this.gap;
      });
    },
    handleResize() {
      this.distributeItems();
    },
  },
};
</script>

<style scoped>
.waterfall-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
}

.column {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.column > * {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
