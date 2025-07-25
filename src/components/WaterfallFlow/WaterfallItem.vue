<template>
  <el-card class="item-card" shadow="hover">
    <el-image
      v-if="item.type === 'image'"
      :src="item.src"
      fit="cover"
      class="media"
      :style="{ height: item.height ? item.height + 'px' : 'auto' }"
    />
    <video
      v-else-if="item.type === 'video'"
      :src="item.src"
      controls
      class="media"
      :style="{ height: item.height ? item.height + 'px' : 'auto' }"
    />
    <div class="item-content">
      <slot>
        <p>{{ item.title || "Untitled" }}</p>
      </slot>
    </div>
  </el-card>
</template>

<script>
// import { ElCard, ElImage } from "element-ui";

export default {
  name: "MediaCard",
  components: {
    // ElCard,
    // ElImage,
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: function () {
        return {
          id: "",
          src: "",
          type: "image",
          title: "",
          height: null,
        };
      },
    },
  },
};
</script>

<style scoped>
.item-card {
  width: 100%;
  overflow: hidden;
}

.media {
  width: 100%;
  object-fit: cover;
}

.item-content {
  padding: 10px;
}
</style>
