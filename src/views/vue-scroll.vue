<!-- 纯CSS实现公告滚动栏 -->
<template>
  <div>
    <div class="sound">
      <div class="box">
        <p class="text" id="myParagraph">
          你好，一个小小的赞和留言也是博主最大的动力<a
            href="https://www.baidu.com"
            >了解详情</a
          >
        </p>
      </div>
    </div>
    ------------------------------------------------------------
    <ul class="list">
      <li
        v-for="(item, index) in ulList"
        :key="item.id"
        :class="!index && play ? 'toUp' : ''"
      >
        {{ item.msg }}
      </li>
    </ul>
    ------------------------------------------------------------
    <div class="text-scroll-container example-1">
      <div
        class="text-scroll-content primary-text"
        data-text="这是一段需要在有限宽度内循环滚动显示的文本内容，当文本长度超过容器宽度时会自动滚动展示全部内容。"
      >
        这是一段需要在有限宽度内循环滚动显示的文本内容，当文本长度超过容器宽度时会自动滚动展示全部内容。
      </div>
    </div>

    <div class="examples-grid">
      <div class="example-card example-2">
        <h3 class="example-title">中等速度滚动</h3>
        <div class="text-scroll-container">
          <div
            class="text-scroll-content"
            data-text="这是中等速度的滚动文本示例 - 适合大多数场景使用"
          >
            这是中等速度的滚动文本示例 - 适合大多数场景使用
          </div>
        </div>
      </div>

      <div class="example-card example-3">
        <h3 class="example-title">快速滚动</h3>
        <div class="text-scroll-container">
          <div
            class="text-scroll-content"
            data-text="这是快速滚动的文本示例 - 适合简短信息展示"
          >
            这是快速滚动的文本示例 - 适合简短信息展示
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ulList: [
        { msg: "这是第一条信息" },
        { msg: "这是第二条信息" },
        { msg: "这是第三条信息" },
      ],
      play: false,
    };
  },
  components: {},
  mounted() {
    setInterval(this.startPlay, 1000);
  },
  methods: {
    startPlay() {
      let that = this;
      that.play = true; //开始播放
      setTimeout(() => {
        that.ulList.push(that.ulList[0]); //将第一条数据塞到最后一个
        that.ulList.shift(); //删除第一条数据
        that.play = false; //暂停播放
      }, 500);
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  background-repeat: no-repeat;
}

.sound {
  width: 100%;
  height: 38px;
  background-color: #e9e4f5;
  color: #000;
  border-radius: 20px;
  margin: 20px auto;
  display: flex;
  gap: 10px;
  overflow: hidden;
  line-height: 37px;
  align-items: center;
}

.sound .box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.text {
  animation: slideLeft 10s linear infinite;
  display: inline-block;
  white-space: nowrap;
  left: 100%;
  top: 0;
  position: absolute;
  cursor: pointer;
}

.text:hover {
  animation-play-state: paused;
}

@keyframes slideLeft {
  0% {
    left: 100%;
  }

  100% {
    left: -100%;
  }
}

.toUp {
  margin-top: -40px;
  transition: all 0.5s;
}

.list {
  list-style: none;
  width: 200px;
  text-align: center;
  overflow: hidden;
  height: 40px;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
}
li {
  text-align: left;
  height: 40px;
  line-height: 40px;
}
</style>
<style>
/* 基础样式 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Inter", system-ui, sans-serif;
  background-color: #f9fafb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: #1f2937;
}

.container {
  width: 100%;
  max-width: 640px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 24px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
}

.title i {
  color: #3b82f6;
  margin-right: 8px;
}

/* 滚动文字核心样式 */
.text-scroll-container {
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  margin-bottom: 32px;
}

.example-1 {
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 9999px;
  padding: 12px 24px;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.text-scroll-content {
  display: inline-block;
  animation: scroll 15s linear infinite;
}

/* 为了实现无缝滚动，复制一份内容 */
.text-scroll-content::after {
  content: attr(data-text);
  padding-left: 2rem;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* 示例网格布局 */
.examples-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .examples-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.example-card {
  background-color: #f9fafb;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.example-title {
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 8px;
}

.example-2 .text-scroll-container,
.example-3 .text-scroll-container {
  border-radius: 6px;
  border: 1px solid #d1d5db;
  padding: 8px;
  height: 40px;
  display: flex;
  align-items: center;
}

.example-2 .text-scroll-content {
  color: #4b5563;
  animation-duration: 20s;
}

.example-3 .text-scroll-content {
  color: #4b5563;
  animation-duration: 10s;
}

.primary-text {
  color: #3b82f6;
  font-weight: 500;
}
</style>
