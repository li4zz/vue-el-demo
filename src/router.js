// 该文件由gen-router.js自动生成，请勿手动修改
import VueRouter from 'vue-router'
import Vue from 'vue'
import Watermark from '@/utils/waterMark.js'

Vue.use(VueRouter)
var routes = [
  {path: '/ai-talk', component: ()=> import(/* webpackChunkName: "ai-talk" */ "@/views/ai-talk.vue") ,name: "豆包ai聊天 " },
  {path: '/circle-progress', component: ()=> import(/* webpackChunkName: "circle-progress" */ "@/views/circle-progress.vue") ,name: "纯css实现两种数据圆形进度条 " },
  {path: '/circle-water-progress', component: ()=> import(/* webpackChunkName: "circle-water-progress" */ "@/views/circle-water-progress.vue") ,name: "动态水波纹边框 " },
  {path: '/cleave', component: ()=> import(/* webpackChunkName: "cleave" */ "@/views/cleave.vue") ,name: "信用卡，日期，手机号，序列号输入格式验证 " },
  {path: '/cm-calendar-demo', component: ()=> import(/* webpackChunkName: "cm-calendar-demo" */ "@/views/cm-calendar-demo.vue") ,name: "自定义日历 " },
  {path: '/css-effect', component: ()=> import(/* webpackChunkName: "css-effect" */ "@/views/css-effect.vue") ,name: "css小demo " },
  {path: '/css-scroll-marker', component: ()=> import(/* webpackChunkName: "css-scroll-marker" */ "@/views/css-scroll-marker.vue") ,name: "scroll-marker实现tab效果 " },
  {path: '/currency', component: ()=> import(/* webpackChunkName: "currency" */ "@/views/currency.vue") ,name: "货币类库 " },
  {path: '/earth', component: ()=> import(/* webpackChunkName: "earth" */ "@/views/earth.vue") ,name: "earth " },
  {path: '/eldatepicker-ww', component: ()=> import(/* webpackChunkName: "eldatepicker-ww" */ "@/views/eldatepicker-ww.vue") ,name: "选择器根据日期获取周 " },
  {path: '/eltable-processor', component: ()=> import(/* webpackChunkName: "eltable-processor" */ "@/views/eltable-processor.vue") ,name: "表格进度条 " },
  {path: '/emo', component: ()=> import(/* webpackChunkName: "emo" */ "@/views/emo.vue") ,name: "emo特效 " },
  {path: '/jd-shopping-cart', component: ()=> import(/* webpackChunkName: "jd-shopping-cart" */ "@/views/jd-shopping-cart.vue") ,name: "仿京东购物车(贝塞尔曲线) " },
  {path: '/', component: ()=> import(/* webpackChunkName: "root" */ "@/views/root.vue") ,name: "首页 " },
  {path: '/scrollY', component: ()=> import(/* webpackChunkName: "scrollY" */ "@/views/scrollY.vue") ,name: "竖向滚动条与顶部滚动条 " },
  {path: '/slice-upload', component: ()=> import(/* webpackChunkName: "slice-upload" */ "@/views/slice-upload.vue") ,name: "分片上传 " },
  {path: '/slider‌-code', component: ()=> import(/* webpackChunkName: "slider‌-code" */ "@/views/slider‌-code.vue") ,name: "滑动拼图验证码 " },
  {path: '/statistic', component: ()=> import(/* webpackChunkName: "statistic" */ "@/views/statistic.vue") ,name: "el-statistic实现倒计时 " },
  {path: '/table-cols-fixed', component: ()=> import(/* webpackChunkName: "table-cols-fixed" */ "@/views/table-cols-fixed.vue") ,name: "eltable展开配合固定列的展开内容滚动问题 " },
  {path: '/test', component: ()=> import(/* webpackChunkName: "test" */ "@/views/test.vue") ,name: "测试 " },
  {path: '/time-progress', component: ()=> import(/* webpackChunkName: "time-progress" */ "@/views/time-progress.vue") ,name: "时间轴组件 " },
  {path: '/verify', component: ()=> import(/* webpackChunkName: "verify" */ "@/views/verify.vue") ,name: "向右滑动验证 " },
  {path: '/vue-countupjs', component: ()=> import(/* webpackChunkName: "vue-countupjs" */ "@/views/vue-countupjs.vue") ,name: "vue 数字动画 " },
  {path: '/vue-dragDesktop', component: ()=> import(/* webpackChunkName: "vue-dragDesktop" */ "@/views/vue-dragDesktop.vue") ,name: "vue-dragDesktop桌面拖动 " },
  {path: '/vue-href', component: ()=> import(/* webpackChunkName: "vue-href" */ "@/views/vue-href.vue") ,name: "锚点 " },
  {path: '/vue-imgCenter', component: ()=> import(/* webpackChunkName: "vue-imgCenter" */ "@/views/vue-imgCenter.vue") ,name: "实现图片悬浮右侧展开预览大图弹窗功能，弹窗顶部与图片顶部平齐 " },
  {path: '/vue-overflow', component: ()=> import(/* webpackChunkName: "vue-overflow" */ "@/views/vue-overflow.vue") ,name: "展开收起 " },
  {path: '/vue-scroll', component: ()=> import(/* webpackChunkName: "vue-scroll" */ "@/views/vue-scroll.vue") ,name: "纯CSS实现公告滚动栏 " },
  {path: '/vue-sortable', component: ()=> import(/* webpackChunkName: "vue-sortable" */ "@/views/vue-sortable.vue") ,name: "vue-sortable表格拖动 " },
  {path: '/vue-tableTree', component: ()=> import(/* webpackChunkName: "vue-tableTree" */ "@/views/vue-tableTree.vue") ,name: "Eltable+Eltree实现数据展示 " },
  {path: '/wang-editor', component: ()=> import(/* webpackChunkName: "wang-editor" */ "@/views/wang-editor.vue") ,name: "富文本编辑器 " },
  {path: '/WaterfallFlow', component: ()=> import(/* webpackChunkName: "WaterfallFlow" */ "@/views/WaterfallFlow.vue") ,name: "瀑布流组件 " },

];

const router = new VueRouter({
  mode: 'hash',
  routes
})
  router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {
  Watermark.set('li4zz')
  // Watermark.out() // 清除水印
})
export default router

