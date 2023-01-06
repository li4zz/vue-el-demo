<template>
  <li>
    <h3>
      <i
        v-if="isFolder"
        @click="toggle"
        class="iconfont"
        :class="[open ? 'icon-arrow-down' : 'icon-arrow-right']"
      ></i>
      <span class="label"
        >{{ treeData.label }}
        <em>(99)</em>
      </span>
      <span class="T_set">
        <i class="iconfont icon-subordinate"></i>
        <i class="iconfont icon-subordinate"></i>
        <i class="iconfont icon-subordinate"></i>
      </span>
    </h3>
    <ul class="T_down" v-show="open" v-if="isFolder">
      <tree-menu
        v-for="item in treeData.children"
        :key="item.id"
        :treeData="item"
      ></tree-menu>
    </ul>
  </li>
</template>

<script>
export default {
  name: "treeMenu",
  props: ["treeData"],
  data() {
    return {
      open: false,
    };
  },
  computed: {
    isFolder() {
      return this.treeData.children && this.treeData.children.length;
    },
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
  },
};
</script>
