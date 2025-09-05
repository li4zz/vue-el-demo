// 该文件由gen-router.js自动生成，请勿手动修改
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
var routes = [
  {path: '/circle-progress', component: ()=> import(/* webpackChunkName: "circle-progress" */ "@/views/circle-progress.vue") ,name: "纯css实现两种数据圆形进度条 " },
  {path: '/cleave', component: ()=> import(/* webpackChunkName: "cleave" */ "@/views/cleave.vue") ,name: "信用卡，日期，手机号，序列号输入格式验证 " },
  {path: '/cm-calendar-demo', component: ()=> import(/* webpackChunkName: "cm-calendar-demo" */ "@/views/cm-calendar-demo.vue") ,name: "自定义日历 " },
  {path: '/currency', component: ()=> import(/* webpackChunkName: "currency" */ "@/views/currency.vue") ,name: "货币类库 " },
  {path: '/earth', component: ()=> import(/* webpackChunkName: "earth" */ "@/views/earth.vue") ,name: "earth " },
  {path: '/eldatepicker-ww', component: ()=> import(/* webpackChunkName: "eldatepicker-ww" */ "@/views/eldatepicker-ww.vue") ,name: "选择器根据日期获取周 " },
  {path: '/eltable-processor', component: ()=> import(/* webpackChunkName: "eltable-processor" */ "@/views/eltable-processor.vue") ,name: "表格进度条 " },
  {path: '/emo', component: ()=> import(/* webpackChunkName: "emo" */ "@/views/emo.vue") ,name: "emo特效 " },
  {path: '/jd-shopping-cart', component: ()=> import(/* webpackChunkName: "jd-shopping-cart" */ "@/views/jd-shopping-cart.vue") ,name: "仿京东购物车(贝塞尔曲线) " },
  {path: '/', component: ()=> import(/* webpackChunkName: "root" */ "@/views/root.vue") ,name: "首页 " },
  {path: '/slice-upload', component: ()=> import(/* webpackChunkName: "slice-upload" */ "@/views/slice-upload.vue") ,name: "分片上传 " },
  {path: '/statistic', component: ()=> import(/* webpackChunkName: "statistic" */ "@/views/statistic.vue") ,name: "el-statistic实现倒计时 " },
  {path: '/table-cols-fixed', component: ()=> import(/* webpackChunkName: "table-cols-fixed" */ "@/views/table-cols-fixed.vue") ,name: "eltable展开配合固定列的展开内容滚动问题 " },
  {path: '/verify', component: ()=> import(/* webpackChunkName: "verify" */ "@/views/verify.vue") ,name: "向右滑动验证 " },
  {path: '/vue-countupjs', component: ()=> import(/* webpackChunkName: "vue-countupjs" */ "@/views/vue-countupjs.vue") ,name: "vue 数字动画 " },
  {path: '/vue-href', component: ()=> import(/* webpackChunkName: "vue-href" */ "@/views/vue-href.vue") ,name: "锚点 " },
  {path: '/vue-overflow', component: ()=> import(/* webpackChunkName: "vue-overflow" */ "@/views/vue-overflow.vue") ,name: "展开收起 " },
  {path: '/vue-scroll', component: ()=> import(/* webpackChunkName: "vue-scroll" */ "@/views/vue-scroll.vue") ,name: "导航定时滚动 " },
  {path: '/vue-tableTree', component: ()=> import(/* webpackChunkName: "vue-tableTree" */ "@/views/vue-tableTree.vue") ,name: "Eltable+Eltree实现数据展示 " },
  {path: '/wang-editor', component: ()=> import(/* webpackChunkName: "wang-editor" */ "@/views/wang-editor.vue") ,name: "富文本编辑器 " },
  {path: '/WaterfallFlow', component: ()=> import(/* webpackChunkName: "WaterfallFlow" */ "@/views/WaterfallFlow.vue") ,name: "瀑布流组件 " },

];

const router = new VueRouter({
  mode: 'hash',
  routes
})
export default router

