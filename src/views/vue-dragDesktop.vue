<!-- vue-dragDesktop桌面拖动 -->
<template>
  <div id="app">
    <div class="boxes-container">
      <div
        v-for="(box, index) in boxes"
        :key="index"
        class="empty"
        :class="{ hovered: box.hovered }"
        @dragover.prevent="onDragOver(index)"
        @dragenter.prevent="onDragEnter(index)"
        @dragleave="onDragLeave(index)"
        @drop="onDrop(index)"
      >
        <div
          v-if="box.hasImage"
          class="fill"
          draggable="true"
          @dragstart="onDragStart(index)"
          @dragend="onDragEnd(index)"
        ></div>
      </div>
    </div>

    <div class="instructions">
      <h3>操作说明</h3>
      <p>拖动图片到任意空白框中，尝试重新排列它们！</p>
      <button class="reset-btn" @click="resetBoxes">重置布局</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        { hasImage: true, hovered: false },
        { hasImage: false, hovered: false },
        { hasImage: false, hovered: false },
        { hasImage: false, hovered: false },
        { hasImage: false, hovered: false },
      ],
      dragStartIndex: null,
    };
  },
  watch() {},
  mounted() {},
  methods: {
    onDragStart(index) {
      this.dragStartIndex = index;
      // 添加hold类名到被拖拽元素
      setTimeout(() => {
        this.boxes[index].hasImage = false;
      }, 0);
    },

    onDragEnd(index) {
      // 如果图片没有被放置到其他框中，则恢复它
      if (this.dragStartIndex !== null) {
        this.boxes[this.dragStartIndex].hasImage = true;
      }
      this.dragStartIndex = null;

      // 移除所有框的hover状态
      this.boxes.forEach((box) => {
        box.hovered = false;
      });
    },

    onDragOver(index) {
      // 防止默认行为以允许放置
    },

    onDragEnter(index) {
      // 只有当目标框没有图片时才显示悬停效果
      if (!this.boxes[index].hasImage) {
        this.boxes[index].hovered = true;
      }
    },

    onDragLeave(index) {
      this.boxes[index].hovered = false;
    },

    onDrop(index) {
      // 只有当目标框没有图片时才允许放置
      if (!this.boxes[index].hasImage && this.dragStartIndex !== null) {
        // 将图片从起始位置移动到目标位置
        this.boxes[this.dragStartIndex].hasImage = false;
        this.boxes[index].hasImage = true;
      }

      // 移除悬停状态
      this.boxes[index].hovered = false;
      this.dragStartIndex = null;
    },

    resetBoxes() {
      this.boxes = [
        { hasImage: true, hovered: false },
        { hasImage: false, hovered: false },
        { hasImage: false, hovered: false },
        { hasImage: false, hovered: false },
        { hasImage: false, hovered: false },
      ];
      this.dragStartIndex = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.empty {
  height: 150px;
  width: 150px;
  margin: 10px;
  border: solid 3px black;
  background: white;
}

.fill {
  background-image: url("https://img1.baidu.com/it/u=400864332,910444934&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500");
  background-size: cover;
  height: 145px;
  width: 145px;
  cursor: pointer;
}

.hold {
  border: solid 5px #ccc;
}

.hovered {
  background-color: #333;
  border-color: white;
  border-style: dashed;
}
/* 媒体查询（Media Query）选择器，用于响应式设计，根据屏幕宽度调整样式 */
@media (max-width: 800px) {
  body {
    flex-direction: column;
  }
}
</style>
