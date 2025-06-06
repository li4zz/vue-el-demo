// 该文件由gen-router.js自动生成，请勿手动修改
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
var routes = [
  {
    path: "/auto-select",
    component: () =>
      import(/* webpackChunkName: "auto-select" */ "@/views/auto-select.vue"),
    name: "auto-select自适应宽度 ",
  },
  {
    path: "/chat-demo",
    component: () =>
      import(/* webpackChunkName: "chat-demo" */ "@/views/chat-demo.vue"),
  },
  {
    path: "/cleave",
    component: () =>
      import(/* webpackChunkName: "cleave" */ "@/views/cleave.vue"),
  },
  {
    path: "/cm-calendar-demo",
    component: () =>
      import(
        /* webpackChunkName: "cm-calendar-demo" */ "@/views/cm-calendar-demo.vue"
      ),
  },
  {
    path: "/collapse-demo2",
    component: () =>
      import(
        /* webpackChunkName: "collapse-demo2" */ "@/views/collapse-demo2.vue"
      ),
    name: "折叠百分比高度demo，应用布局 ",
  },
  {
    path: "/currency",
    component: () =>
      import(/* webpackChunkName: "currency" */ "@/views/currency.vue"),
    name: "货币类库 ",
  },
  {
    path: "/drag",
    component: () => import(/* webpackChunkName: "drag" */ "@/views/drag.vue"),
    name: "拖拽 ",
  },
  {
    path: "/dynamiccss",
    component: () =>
      import(/* webpackChunkName: "dynamiccss" */ "@/views/dynamiccss.vue"),
    name: "动态css ",
  },
  {
    path: "/eldatepicker-ww",
    component: () =>
      import(
        /* webpackChunkName: "eldatepicker-ww" */ "@/views/eldatepicker-ww.vue"
      ),
  },
  {
    path: "/eltable-processor",
    component: () =>
      import(
        /* webpackChunkName: "eltable-processor" */ "@/views/eltable-processor.vue"
      ),
    name: "表格进度条 ",
  },
  {
    path: "/img-viewer",
    component: () =>
      import(/* webpackChunkName: "img-viewer" */ "@/views/img-viewer.vue"),
  },
  {
    path: "/",
    component: () => import(/* webpackChunkName: "root" */ "@/views/root.vue"),
    name: "首页 ",
  },
  {
    path: "/slice-upload",
    component: () =>
      import(/* webpackChunkName: "slice-upload" */ "@/views/slice-upload.vue"),
    name: "分片上传 ",
  },
  {
    path: "/statistic",
    component: () =>
      import(/* webpackChunkName: "statistic" */ "@/views/statistic.vue"),
  },
  {
    path: "/svg-icon",
    component: () =>
      import(/* webpackChunkName: "svg-icon" */ "@/views/svg-icon.vue"),
    name: "svg icon ",
  },
  {
    path: "/table-cols-fixed",
    component: () =>
      import(
        /* webpackChunkName: "table-cols-fixed" */ "@/views/table-cols-fixed.vue"
      ),
    name: "eltable展开配合固定列的展开内容滚动问题 ",
  },
  {
    path: "/v-table-scroll",
    component: () =>
      import(
        /* webpackChunkName: "v-table-scroll" */ "@/views/v-table-scroll.vue"
      ),
  },
  {
    path: "/vue-countupjs",
    component: () =>
      import(
        /* webpackChunkName: "vue-countupjs" */ "@/views/vue-countupjs.vue"
      ),
    name: "vue 数字动画 ",
  },
  {
    path: "/vue-href",
    component: () =>
      import(/* webpackChunkName: "vue-href" */ "@/views/vue-href.vue"),
    name: "锚点 ",
  },
  {
    path: "/vue-local",
    component: () =>
      import(/* webpackChunkName: "vue-local" */ "@/views/vue-local.vue"),
    name: "导航跳转到指定模块 ",
  },
  {
    path: "/vue-overflow",
    component: () =>
      import(/* webpackChunkName: "vue-overflow" */ "@/views/vue-overflow.vue"),
    name: "展开收起 ",
  },
  {
    path: "/vue-scroll",
    component: () =>
      import(/* webpackChunkName: "vue-scroll" */ "@/views/vue-scroll.vue"),
    name: "导航定时滚动 ",
  },
  {
    path: "/vue-tableTree",
    component: () =>
      import(
        /* webpackChunkName: "vue-tableTree" */ "@/views/vue-tableTree.vue"
      ),
    name: "talbe+tree展示数据 ",
  },
  {
    path: "/vue-tree",
    component: () =>
      import(/* webpackChunkName: "vue-tree" */ "@/views/vue-tree.vue"),
    name: "vue tree ",
  },
  {
    path: "/vxe-table",
    component: () =>
      import(/* webpackChunkName: "vxe-table" */ "@/views/vxe-table.vue"),
    name: "vxe-table",
  },
  {
    path: "/wang-editor",
    component: () =>
      import(/* webpackChunkName: "wang-editor" */ "@/views/wang-editor.vue"),
    name: "富文本编辑器 ",
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});
export default router;
