<!-- css小demo -->
<template>
  <div>
    <section style="overflow: hidden">
      <h3>1. 自定义光标下划线效果</h3>
      <a href="#" class="fancy-link">Hover Me</a>
      <h3>2. 纯css实现手风琴/折叠面板</h3>
      <details class="accordion">
        <summary>点击展开第一节</summary>
        <p>这里是第一节的详细内容...</p>
      </details>
      <details class="accordion">
        <summary>点击展开第二节</summary>
        <p>这里是第二节的详细内容...</p>
      </details>
      <h3>3. 优雅的表单控件 :focus-within</h3>
      <div class="input-group">
        <label for="name">姓名:</label>
        <input type="text" id="name" />
      </div>
      <h3>4. 滚动吸附效果 (Scroll Snapping)</h3>
      <div class="snap-container">
        <section class="snap-item">1</section>
        <section class="snap-item">2</section>
        <section class="snap-item">3</section>
      </div>
      <h3>5. 动态主题切换 (CSS Variables)</h3>
      <div class="shape-container">
        <div class="floated-shape"></div>
        <button @click="asd">动态主题切换</button>
      </div>
      <h3>6. 锥形渐变做饼图 (conic-gradient)</h3>
      <div class="pie-chart"></div>
      <h3>7. text-wrap: balance：智能均衡文本折行</h3>
      <div class="container">
        <h2>
          在响应式设计中，标题或长文本的折行常常参差不齐（比如一行只有 1-2
          个字符），影响排版美感。text-wrap:
          balance会自动计算文本长度，让每行的字符数尽量均衡，就像专业排版师调整的效果。
        </h2>
      </div>
      <h3>8. 悬停放大图片特效及过滤</h3>
      <div style="text-align: center">
        <div class="img-wrapper">
          <img src="@/assets/images/4.png" />
        </div>
        <div class="img-wrapper">
          <img src="@/assets/images/3.png" />
        </div>
        <!-- 灰度过滤 -->
        <div class="img-wrapper">
          <img class="grayscale-img" src="@/assets/images/5.png" />
        </div>

        <!-- 深褐色过滤 -->
        <div class="img-wrapper">
          <img class="sepia-img" src="@/assets/images/6.png" />
        </div>
      </div>
      <h3>9. 交错动画</h3>
      <div class="loading">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <h3>10. 用JS分割文本</h3>
      <div class="reveal">HELLO WORLD</div>
      <h3>11. 伪类</h3>
      <button
        data-text="Start"
        class="btn btn-primary btn-ghost btn-border-stroke btn-text-float-up"
      >
        <div class="btn-borders">
          <div class="border-top"></div>
          <div class="border-right"></div>
          <div class="border-bottom"></div>
          <div class="border-left"></div>
        </div>
        <span class="btn-text">Start</span>
      </button>
      <h3>12. 伪元素</h3>
      <ul class="float-text-menu">
        <li><a href="#" data-text="Home">Home</a></li>
        <li><a href="#" data-text="Archives">Archives</a></li>
        <li><a href="#" data-text="Tags">Tags</a></li>
        <li><a href="#" data-text="Categories">Categories</a></li>
        <li><a href="#" data-text="About">About</a></li>
      </ul>
      <h3>13. overflow障眼法</h3>
      <button class="btn btn-primary btn-ghost btn-shine">hover me</button>
      <h3>14. overflow障眼法</h3>
      <nav class="navtab">
        <ul>
          <li class="navtab-item active">
            <svg
              t="1580196202692"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="781"
              width="36"
              height="36"
            >
              <path
                d="M555.541333 117.994667l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H640V746.666667c0-70.688-57.312-128-128-128s-128 57.312-128 128v170.666666H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0z"
                p-id="782"
                fill="currentColor"
              ></path>
            </svg>
            <span>Home</span>
          </li>
          <li class="navtab-item">
            <svg
              t="1580196351612"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1159"
              width="36"
              height="36"
            >
              <path
                d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m149.162667 222.901334L444.16 386.357333a96 96 0 0 0-57.802667 57.813334l-78.122666 216.992a42.666667 42.666667 0 0 0 54.602666 54.602666l217.002667-78.122666a96 96 0 0 0 57.802667-57.813334l78.122666-216.992a42.666667 42.666667 0 0 0-54.602666-54.602666zM512 565.333333a53.333333 53.333333 0 1 0 0-106.666666 53.333333 53.333333 0 0 0 0 106.666666z"
                p-id="1160"
                fill="currentColor"
              ></path>
            </svg>
            <span>Explore</span>
          </li>
          <li class="navtab-item">
            <svg
              t="1580196428669"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2609"
              width="30"
              height="30"
            >
              <path
                d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z"
                p-id="2610"
                fill="currentColor"
              ></path>
            </svg>
            <span>Collection</span>
          </li>
          <li class="navtab-item">
            <svg
              t="1580196480651"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2891"
              width="30"
              height="30"
            >
              <path
                d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m0 586.666667a32 32 0 1 0 0 64 32 32 0 0 0 0-64z m-2.517333-373.333333c-48.416 0-92.746667 24.16-118.613334 63.413333a137.088 137.088 0 0 0-15.978666 33.237333 32 32 0 0 0 60.906666 19.690667c2.016-6.24 4.885333-12.202667 8.522667-17.717333C458.4 375.914667 482.709333 362.666667 509.482667 362.666667 552.277333 362.666667 586.666667 396.266667 586.666667 437.333333s-34.4 74.666667-77.194667 74.666667a32 32 0 0 0-32 32v64a32 32 0 0 0 64 0v-35.584C603.946667 558.197333 650.666667 503.232 650.666667 437.333333c0-76.757333-63.381333-138.666667-141.194667-138.666666z"
                p-id="2892"
                fill="currentColor"
              ></path>
            </svg>
            <span>Help</span>
          </li>
        </ul>
      </nav>
      <h3>15.内发光</h3>
      <div class="loadingzzz"></div>
      <h3>16.发光文本</h3>
      <h1 class="glowIn">Hello World</h1>
      <p class="glowIn">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque
        id nibh tortor. Suspendisse ultrices gravida dictum fusce ut placerat
        orci nulla. A lacus vestibulum sed arcu.
      </p>
      <h3>17.霓虹文本</h3>
      <div class="neon">hello World</div>
      <h3>18.background-clip:text</h3>
      <ul class="asdf">
        <li><a href="#">home</a></li>
        <li><a href="#">archives</a></li>
        <li><a href="#">tags</a></li>
        <li><a href="#">categories</a></li>
        <li><a href="#">about</a></li>
      </ul>
      <h3>19.radial-gradient</h3>
      <button class="btnzz btnzz-pink btnzz-bubbles">Click Me</button>
      <h3>20.一个基于Vue的时钟demo</h3>
      <div ref="area" :class="clockArea">
        <div :style="cssClock">
          <div :style="cssDotWrap">
            <div
              :style="
                Object.assign(
                  {},
                  {
                    transform: 'rotateZ(' + i * 6 + 'deg)',
                    height: i % 5 == 0 ? longDot.height : shourtDot.height,
                    width: i % 5 == 0 ? longDot.width : shourtDot.width,
                  },
                  cssDot
                )
              "
              v-for="(dot, i) in 60"
            ></div>
          </div>
          <div
            :style="
              Object.assign(
                {},
                {
                  transform: 'rotateZ(' + hour + 'deg)',
                }
              )
            "
            :class="hourNeedle"
          ></div>
          <div
            :style="
              Object.assign(
                {},
                {
                  transform: 'rotateZ(' + min + 'deg)',
                }
              )
            "
            :class="minNeedle"
          ></div>
          <div :class="clockDot"></div>
          <div :class="clockBack"></div>
        </div>
        <div :class="clockTitle" :style="style">
          当前时间 {{ timeDisplayArea }}
        </div>
      </div>

      <h3>21.圆弧</h3>
      <div class="task-container">
        <div class="task-cicle">
          <div class="task-inner">
            <div class="right-cicle">
              <div class="cicle-progress cicle1-inner"></div>
            </div>
            <div class="left-cicle">
              <div class="cicle-progress cicle2-inner"></div>
            </div>
            <div class="right-cicle">
              <div class="cicle-progress cicle3-inner" id="rightCicle"></div>
            </div>
            <div class="left-cicle">
              <div class="cicle-progress cicle4-inner" id="leftCicle"></div>
            </div>
            <div class="left-cicle">
              <div class="mask-inner"></div>
            </div>
            <div class="inner">
              <img
                src="https://img12.360buyimg.com/img/jfs/t1/150018/30/1001/2042/5eec2f8eEfd3c853a/e7982308423ce71a.png"
                alt=""
                srcset=""
              />
              <div class="water-count">70</div>
            </div>
          </div>
          <div class="task-bottom">
            <div class="task-btn" id="time"></div>
          </div>
        </div>
      </div>
      <h3>22.laoding小特效</h3>
      <div class="loader"></div>
      <h3>23.打字机效果</h3>
      <div class="typing">hello world</div>
      <h3>24.立体阴影文字效果</h3>
      <div class="div001">longshadow</div>
      <h3>25.氖光效果（Neon）</h3>
      <div class="div002">Neon</div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prefixCss: "jhc-", // css 前缀
      cssClock: {
        //整个钟的盒子
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
      },
      cssDotWrap: {
        //装刻度的盒子
        width: "100%",
        height: "100%",
      },
      cssDot: {
        //刻度们
        position: "absolute",
        backgroundColor: "#509fef",
      },
      longDot: {
        //长刻度
        width: "3px",
        height: "10px",
      },
      shourtDot: {
        //短刻度
        width: "1px",
        height: "5px",
      },
      timer: null, //用来标记自适应大小的timer
      updateTimer: null, // 更新时钟的timer
      style: {
        bottom: "1px",
      }, //时钟的title的style
      scale: 0.8, // 时钟占外层的百分比
      currTime: new Date(), //当前日期对象
    };
  },
  components: {},
  computed: {
    sec() {
      //将当前秒数转化为秒针旋转的度数
      return this.currTime.getSeconds() * 6;
    },
    min() {
      //将当前的分钟数转化为分针旋转的度数
      return (
        this.currTime.getMinutes() * 6 + (this.currTime.getSeconds() / 60) * 6
      );
    },
    hour() {
      //将当前的小时数转化为时针旋转的度数
      return (
        this.currTime.getHours() * 30 + (this.currTime.getMinutes() / 60) * 30
      );
    },
    timeDisplayArea() {
      // 时间展示区
      let hours =
        this.currTime.getHours() > 9
          ? this.currTime.getHours()
          : "0" + this.currTime.getHours();
      let minutes =
        this.currTime.getMinutes() > 9
          ? this.currTime.getMinutes()
          : "0" + this.currTime.getMinutes();
      let seconds =
        this.currTime.getSeconds() > 9
          ? this.currTime.getSeconds()
          : "0" + this.currTime.getSeconds();
      return hours + ":" + minutes + ":" + seconds;
    },
    hourNeedle() {
      //时针的class
      return `${this.prefixCss}hour-needle`;
    },
    minNeedle() {
      //分针的class
      return `${this.prefixCss}min-needle`;
    },
    clockArea() {
      //表盘的区域
      return `${this.prefixCss}clock-area`;
    },
    clockBack() {
      //时钟的背景（外框图片）
      return `${this.prefixCss}clock-back`;
    },
    clockTitle() {
      //时钟的title的class
      return `${this.prefixCss}clock-title`;
    },
    clockDot() {
      //时钟的中心点
      return `${this.prefixCss}clock-dot`;
    },
  },
  created() {
    this.currTime = new Date();
    clearInterval(this.updateTimer);
    this.updateTimer = setInterval(() => {
      this.currTime = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.updateTimer);
  },
  mounted() {
    //设置时钟的大小
    this.setSize();

    let duration = 0.8;
    let delay = 0.3;
    let revealText = document.querySelector(".reveal");
    let letters = revealText.textContent.split("");
    revealText.textContent = "";
    let middle = letters.filter((e) => e !== " ").length / 2;
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
      revealText.append(span);
    });

    let floatTextMenuLinks = document.querySelectorAll(".float-text-menu li a");
    floatTextMenuLinks.forEach((link) => {
      let letters = link.textContent.split("");
      link.textContent = "";
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.transitionDelay = `${i / 20}s`;
        span.dataset.text = letter;
        link.append(span);
      });
    });

    let navtab = document.querySelector("nav.navtab");
    let navtabItems = document.querySelectorAll("li.navtab-item");
    navtabItems.forEach((navtabItem, activeIndex) =>
      navtabItem.addEventListener("click", () => {
        navtabItems.forEach((navtabItem) =>
          navtabItem.classList.remove("active")
        );
        navtabItem.classList.add("active");
        navtab.style.setProperty("--active-index", `${activeIndex}`);
      })
    );

    let glowInTexts = document.querySelectorAll(".glowIn");
    glowInTexts.forEach((glowInText) => {
      let letters = glowInText.textContent.split("");
      glowInText.textContent = "";
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        glowInText.append(span);
      });
    });
  },
  methods: {
    asd() {
      document.body.classList.toggle("dark-mode");
    },
    //设置钟表的型号大小
    setSize() {
      let width = this.getWidth();
      let height = this.getHeight();
      //时钟占外层的百分比
      let scale = this.scale;
      //获取较短边
      let shortLth = width;
      if (width > height) {
        shortLth = height;
      }
      //对时钟的直径做处理
      shortLth = shortLth * scale;
      //获取到顶部和左部的距离
      let paddingW = (width - shortLth) / 2;
      let paddingH = (height - shortLth) / 2;
      //设置钟表整体的大小以及位置
      this.setStates("cssClock", {
        height: shortLth + "px",
        width: shortLth + "px",
        top: paddingH + "px",
        left: paddingW + "px",
      });
      //设置刻度所围绕区域的位置
      this.setStates("cssDotWrap", {
        transform: `translate(${shortLth * 0.52}px,${shortLth * 0.16}px)`, // 0.52 和 0.16 是我一点一点挪出来的，啊哈哈
      });
      //设置长短刻度的半径,以及尺寸
      let dotRadius = (shortLth * 0.75) / 2 - 1;
      let longDotWidth = Math.floor(dotRadius / 25) || 2;
      let longDotHeight = Math.floor(dotRadius / 8) || 6;
      let shortDotWidth = Math.floor(dotRadius / 50) || 1;
      let shortDotHeight = Math.floor(dotRadius / 16) || 3;
      //短刻度
      this.shourtDot = {
        width: shortDotWidth + "px",
        height: shortDotHeight + "px",
      };
      //长刻度
      this.longDot = {
        width: longDotWidth + "px",
        height: longDotHeight + "px",
      };
      //设置刻度旋转点的位置
      this.setStates("cssDot", {
        transformOrigin: `${0}px ${dotRadius}px`,
      });
    },
    getWidth() {
      //获取指定容器的宽度
      return this.getRef("area").offsetWidth || 200;
    },
    getHeight() {
      //获取指定容器的高度
      return this.getRef("area").offsetHeight || 200;
    },
    getRef(ref) {
      // 获取指定 ref 对象
      return (this.$refs && this.$refs[ref]) || {};
    },
    //模仿 react 的states
    setStates(prop, data) {
      let cache = this[prop];
      this[prop] = Object.assign({}, cache, JSON.parse(JSON.stringify(data)));
    },
  },
};
</script>
<style scoped>
.fancy-link {
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
}
.fancy-link:hover {
  background-size: 100% 2px;
}

.accordion {
  border: 1px solid #ccc;
  margin-bottom: 5px;
}
.accordion summary {
  padding: 10px;
  cursor: pointer;
  background: #f0f0f0;
}
/* 为展开状态加个小动画 */
.accordion[open] > p {
  padding: 10px;
  animation: fadeIn 0.5s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.input-group {
  border: 2px solid #ccc;
  transition: border-color 0.3s;
}
.input-group:focus-within {
  border-color: #61dafb;
}

.snap-container {
  height: 300px;
  overflow-y: scroll;
  /* 在父容器上开启y轴的强制吸附 */
  scroll-snap-type: y mandatory;
}
.snap-item {
  height: 300px;
  /* 定义子元素的吸附对齐点为顶部 */
  scroll-snap-align: start;
  background: #ccc;
}
.pie-chart {
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(
    #ff6347 0% 30%,
    /* 红色部分 30% */ #4682b4 30% 75%,
    /* 蓝色部分 45% */ #32cd32 75% 100% /* 绿色部分 25% */
  );
}
h2 {
  text-wrap: balance;
  max-width: 600px; /* 配合最大宽度使用，效果更佳 */
}
/* ============== 
* 灰度过滤 
* ==============*/
.grayscale-img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.grayscale-img:hover {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}
.img-wrapper {
  width: 150px;
  height: 150px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
}

.img-wrapper img {
  height: 150px;
  -webkit-transition: 0.3s linear;
  transition: 0.3s linear;
}

.img-wrapper img:hover {
  transform: scale(1.1);
}

.img-wrapper {
  display: inline-block;
  box-sizing: border-box;
  border: 3px solid #000;
}

/* ============== 
* 深褐色过滤
* ==============*/
.sepia-img {
  -webkit-filter: sepia(100%);
  filter: sepia(100%);
}

.sepia-img:hover {
  -webkit-filter: sepia(0);
  filter: sepia(0);
}
</style>
<style>
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
}
body.dark-mode {
  --bg-color: #1a1a1a;
  --text-color: #f0f0f0;
}
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}
</style>
<style lang="scss">
// @import url(https://fonts.googleapis.com/css?family=Lato);
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
.loading {
  $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
  display: flex;

  .dot {
    position: relative;
    width: 2em;
    height: 2em;
    margin: 0.8em;
    border-radius: 50%;

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        background: nth($colors, $i);

        &::before {
          animation-delay: $i * 0.2s;
        }
      }
    }
  }
}

@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}
.reveal {
  position: relative;
  display: flex;
  color: #6ee1f5;
  font-size: 2em;
  font-family: Raleway, sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  white-space: pre;

  span {
    opacity: 0;
    transform: scale(0);
    animation: fadeIn 2.4s forwards;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    background: white;
    opacity: 0;
    transform: scale(0);
  }

  &::before {
    left: 50%;
    animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }

  &::after {
    right: 50%;
    animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideLeft {
  to {
    left: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}

@keyframes slideRight {
  to {
    right: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}
.btn {
  --hue: 190;
  --ease-in-duration: 0.25s;
  --ease-in-exponential: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --ease-out-duration: 0.65s;
  --ease-out-delay: var(--ease-in-duration);
  --ease-out-exponential: cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  padding: 1rem 3rem;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  background-color: hsl(var(--hue), 100%, 41%);
  border: 1px solid hsl(var(--hue), 100%, 41%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &:hover {
    background: hsl(var(--hue), 100%, 31%);
  }

  &-primary {
    --hue: 171;
  }

  &-ghost {
    color: hsl(var(--hue), 100%, 41%);
    background-color: transparent;
    border-color: hsl(var(--hue), 100%, 41%);

    &:hover {
      color: white;
    }
  }

  &-border-stroke {
    border-color: hsla(var(--hue), 100%, 41%, 0.35);

    .btn-borders {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .border-top {
        position: absolute;
        top: 0;
        width: 100%;
        height: 1px;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleX(0);
        transform-origin: left;
      }

      .border-right {
        position: absolute;
        right: 0;
        width: 1px;
        height: 100%;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleY(0);
        transform-origin: bottom;
      }

      .border-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleX(0);
        transform-origin: left;
      }

      .border-left {
        position: absolute;
        left: 0;
        width: 1px;
        height: 100%;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleY(0);
        transform-origin: bottom;
      }

      // when unhover, ease-out left, bottom; ease-in right, top

      .border-left {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          var(--ease-out-exponential);
      }
      .border-bottom {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          var(--ease-out-exponential);
      }

      .border-right {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }
      .border-top {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }
    }

    &:hover {
      color: hsl(var(--hue), 100%, 41%);
      background: transparent;

      .border-top,
      .border-bottom {
        transform: scaleX(1);
      }
      .border-left,
      .border-right {
        transform: scaleY(1);
      }

      // when hover, ease-in left, bottom; ease-out right, top

      .border-left {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }
      .border-bottom {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }

      .border-right {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          var(--ease-out-exponential);
      }
      .border-top {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          var(--ease-out-exponential);
      }
    }
  }

  &-text-float-up {
    &::after {
      position: absolute;
      content: attr(data-text);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transform: translateY(35%);
      transition: 0.25s ease-out;
    }

    // when hover, ease-in top-text; ease-out bottom-text

    .btn-text {
      display: block;
      transition: 0.75s 0.1s var(--ease-out-exponential);
    }

    &:hover {
      // when hover, ease-in bottom-text; ease-out top-text

      .btn-text {
        opacity: 0;
        transform: translateY(-25%);
        transition: 0.25s ease-out;
      }

      &::after {
        opacity: 1;
        transform: translateY(0);
        transition: 0.75s 0.1s var(--ease-out-exponential);
      }
    }
  }
}
.float-text-menu {
  display: flex;
  flex-direction: column;
  list-style-type: none;

  li {
    a {
      display: flex;
      padding: 6px;
      color: #232323;
      font-family: Lato, sans-serif;
      text-decoration: none;
      overflow: hidden;

      span {
        position: relative;
        transition: 0.3s;

        &::before {
          position: absolute;
          content: attr(data-text);
          transform: translateY(130%);
        }
      }

      &:hover {
        span {
          transform: translateY(-130%);
        }
      }
    }
  }
}
.btn {
  --hue: 190;
  position: relative;
  padding: 1rem 3rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #232323;
  text-decoration: none;
  text-transform: uppercase;
  background-color: hsl(var(--hue), 100%, 41%);
  border: 1px solid hsl(var(--hue), 100%, 41%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &:hover {
    background: hsl(var(--hue), 100%, 31%);
  }

  &-primary {
    --hue: 187;
  }

  &-ghost {
    color: hsl(var(--hue), 100%, 41%);
    background-color: transparent;
    border-color: hsl(var(--hue), 100%, 41%);

    &:hover {
      color: #232323;
    }
  }

  &-shine {
    color: #232323;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        hsla(var(--hue), 100%, 41%, 0.5),
        transparent
      );
      transform: translateX(-100%);
      transition: 0.6s;
    }

    &:hover {
      background: transparent;
      box-shadow: 0 0 20px 10px hsla(var(--hue), 100%, 41%, 0.5);
    }

    &:hover::before {
      transform: translateX(100%);
    }
  }
}
</style>

<style lang="scss">
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navtab {
  --navtab-width: 300px;
  --navtab-item-width: calc(var(--navtab-width) / 4 - 20px);
  --navtab-overlay-width: calc(var(--navtab-item-width) + 80px);
  --active-index: 0;

  position: relative;
  width: var(--navtab-width);
  height: 150px;
  background: white;
  border: 1em solid white;
  // https://9elements.github.io/fancy-border-radius/full-control.html#15.5.15.15-50.95.50.85-150.600
  border-radius: 5% 5% 15% 15% / 15% 15% 50% 50%;
  overflow: hidden;

  ul {
    @include center;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;

    .navtab-item {
      @include center;
      z-index: 2;
      flex-direction: column;
      width: var(--navtab-item-width);
      height: 100%;
      color: #0288d1;
      cursor: pointer;
      transition: 0.5s ease;

      svg {
        transition: 0.5s ease;
      }

      span {
        font-size: 20px;
        user-select: none;
        opacity: 0;
        transition: 0.5s ease;
      }

      &.active {
        width: var(--navtab-overlay-width);

        svg {
          transform: translateY(-10px);
        }

        span {
          opacity: 1;
        }
      }
    }
  }

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: var(--navtab-overlay-width);
    background: #b3e5fc;
    border-radius: 20px;
    transform: translateX(calc(var(--navtab-item-width) * var(--active-index)));
    transition: 0.5s ease;
  }
}
</style>
<style lang="scss">
.loadingzzz {
  position: relative;
  width: 8em;
  height: 8em;
  // background: black;
  border-radius: 50%;
  box-shadow: inset 0.5em -0.5em crimson;
  animation: spin 2s linear infinite;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    box-shadow: inherit;
  }

  &::before {
    filter: blur(5px);
  }

  &::after {
    filter: blur(10px);
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
<style lang="scss">
.glowIn {
  color: #232323;

  span {
    animation: glow-in 0.8s both;
  }
}

@keyframes glow-in {
  from {
    opacity: 0;
  }
  65% {
    opacity: 1;
    text-shadow: 0 0 25px #232323;
  }
  75% {
    opacity: 1;
  }
  to {
    opacity: 0.7;
  }
}
</style>
<style lang="scss">
.neon {
  color: #cce7f8;
  font-size: 2.5rem;
  font-family: "Pacifico", cursive;
  text-transform: uppercase;
  animation: shining 0.1s alternate infinite;
  background: black;
}

@keyframes shining {
  from {
    text-shadow: 0 0 6px rgba(182, 211, 207, 0.9),
      0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
      0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8),
      0 0 54px rgba(15, 115, 223, 0.9);
  }
  to {
    text-shadow: 0 0 6px rgba(182, 211, 207, 1),
      0 0 30px rgba(182, 211, 207, 0.4), 0 0 12px rgba(15, 115, 223, 0.6),
      0 0 22px rgba(15, 115, 223, 0.8), 0 0 38px rgba(15, 115, 223, 0.9),
      0 0 60px rgba(15, 115, 223, 1);
  }
}
</style>
<style lang="scss">
.asdf {
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style-type: none;

  li {
    padding: 6px 0;

    a {
      --fill-color: #198ce6;
      position: relative;
      display: block;
      padding: 4px 0;
      font: 700 3rem Raleway, sans-serif;
      text-decoration: none;
      text-transform: uppercase;
      -webkit-text-stroke: 2px var(--fill-color);
      background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
      color: transparent;
      background-clip: text;
      transition: 0.5s linear;

      &:hover {
        background-size: 100%;
      }
    }
  }
}
</style>
<style lang="scss">
@function sample($list) {
  @return nth($list, random(length($list)));
}

@function bubbles($color, $count: 16) {
  $bubbles: ();
  // define your own bubbles here!
  $bubble-types: (
    radial-gradient(circle, $color 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, $color 20%, transparent 30%)
  );
  @for $i from 1 through $count {
    $bubbles: append($bubbles, sample($bubble-types), comma);
  }
  @return $bubbles;
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

@function random_sizes($count: 16) {
  $sizes: ();
  @for $i from 1 through $count {
    $sizes: append(
      $sizes,
      (random_range(10, 20) * 1%) (random_range(10, 20) * 1%),
      comma
    );
  }
  @return $sizes;
}

.btnzz {
  --hue: 190;
  --btn-bg-color: hsl(var(--hue), 100%, 50%);
  --btn-bg-color-darker: hsl(var(--hue), 100%, 45%);
  position: relative;
  padding: 0.75rem 1.5rem;
  margin: 1rem;
  font-size: 1rem;
  font-family: Lato, sans-serif;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  background-color: var(--btn-bg-color);
  border: 1px solid var(--btn-bg-color);
  border-radius: 4px;
  box-shadow: 0 0.1px 0.7px rgba(233, 30, 99, 0.141),
    0 0.1px 1.7px rgba(233, 30, 99, 0.202),
    0 0.3px 3.1px rgba(233, 30, 99, 0.25),
    0 0.4px 5.6px rgba(233, 30, 99, 0.298),
    0 0.8px 10.4px rgba(233, 30, 99, 0.359), 0 2px 25px rgba(233, 30, 99, 0.5);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &-pink {
    --hue: 330;
  }

  &-bubbles {
    overflow: visible;
    transition: transform ease-in 0.1s, background-color ease-in 0.1s,
      box-shadow ease-in 0.25s;

    &::before {
      position: absolute;
      content: "";
      left: -2em;
      right: -2em;
      top: -2em;
      bottom: -2em;
      transition: ease-in-out 0.5s;
      background-repeat: no-repeat;
      background-image: bubbles(var(--btn-bg-color));
      background-size: random_sizes();
      background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
        65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
        64% 70%, 80% 71%;
      animation: bubbles ease-in-out 0.75s forwards;
    }

    &:active {
      transform: scale(0.95);
      background: var(--btn-bg-color-darker);

      &::before {
        // when the clicked mouse is up, trigger the animation.
        animation: none;
        background-size: 0;
      }
    }
  }
}

@keyframes bubbles {
  0% {
    background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
      65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
      64% 70%, 80% 71%;
  }

  50% {
    background-position: 10% 44%, 0% 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%,
      75% 0%, 95% -2%, 0% 80%, 95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%,
      68% 96%, 95% 100%;
  }

  100% {
    background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%,
      100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%,
      100% 100%;
    background-size: 0% 0%;
  }
}
</style>
<style lang="scss">
.jhc-hour-needle {
  z-index: 5;
  width: 6%;
  height: 25%;
  position: absolute;
  left: 49%;
  bottom: 47%;
  transform-origin: center bottom;
  background: url(https://jhcan333.github.io/can-Share//image/clock/hourPoint.png)
    no-repeat;
  background-size: 100% 100%;
}

.jhc-min-needle {
  z-index: 2;
  width: 6%;
  height: 30%;
  position: absolute;
  left: 49%;
  bottom: 47%;
  transform-origin: center bottom;
  background: url(https://jhcan333.github.io/can-Share//image/clock/minPoint.png)
    no-repeat;
  background-size: 100% 100%;
}

.jhc-clock-area {
  width: 400px;
  height: 400px;
  position: relative;
  background: #050842;
}

.jhc-clock-back {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background: url(https://jhcan333.github.io/can-Share//image/clock/clockBack.png)
    no-repeat;
  background-size: 100% 100%;
}

.jhc-clock-title {
  color: #fff;
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  font-weight: bold;
}

.jhc-clock-dot {
  width: 6%;
  height: 6%;
  border-radius: 50%;
  position: absolute;
  background-color: #509fef;
  z-index: 20;
  left: 49%;
  top: 50.5%;
  box-shadow: 0px 0px 10px 1px #000;
}
</style>
<style lang="scss">
.task-container {
  // position: fixed;
  // left: 0;
  // right: 0;
  // top: 0;
  // bottom: 0;
  // margin: auto;
  // width: 65px;
  // height: 65px;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  .task-cicle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);
  }

  .task-inner {
    position: relative;
    width: 46px;
    height: 46px;
  }

  .right-cicle {
    width: 23px;
    height: 46px;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
  }

  .cicle-progress {
    position: absolute;
    top: 0;
    width: 46px;
    height: 46px;
    border: 3px solid transparent;
    box-sizing: border-box;
    border-radius: 50%;
  }

  .cicle1-inner {
    left: -23px;
    border-right: 3px solid #e0e0e0;
    border-top: 3px solid #e0e0e0;
    transform: rotate(-15deg);
  }

  .left-cicle {
    width: 23px;
    height: 46px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .cicle2-inner {
    left: 0;
    border-left: 3px solid #e0e0e0;
    border-top: 3px solid #e0e0e0;
    transform: rotate(15deg);
  }

  .cicle3-inner {
    left: -23px;
    border-right: 3px solid #feca02;
    border-top: 3px solid #feca02;
    transform: rotate(-135deg);
  }

  .cicle4-inner {
    left: 0;
    border-left: 3px solid #feca02;
    border-top: 3px solid #feca02;
    transform: rotate(195deg);
  }

  .mask-inner {
    position: absolute;
    left: 0;
    top: 0;
    width: 39px;
    height: 39px;
    border: 4px solid transparent;
    border-radius: 50%;
    border-left: 4px solid #ffffff;
    border-top: 4px solid #ffffff;
    transform: rotate(195deg);
  }

  .inner {
    position: absolute;
    left: 0;
    top: -2px;
    right: 0;
    bottom: 0;
    width: 22px;
    height: 26px;
    margin: auto;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .water-count {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "JDZhengHei-01-Regular";
    font-size: 12px;
    color: #ffffff;
  }

  .task-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 60px;
    height: 15px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2px;
  }

  .task-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15px;
    border-radius: 7px;
    background-image: linear-gradient(-45deg, #feb402 0%, #ff8407 100%);
    font-size: 8px;
    color: #ffffff;
    line-height: 15px;
    padding: 0 4px;
  }
}
</style>
<style lang="scss">
$colors: hsla(337, 84, 48, 0.75) hsla(160, 50, 48, 0.75) hsla(190, 61, 65, 0.75)
  hsla(41, 82, 52, 0.75);
$size: 2.5em;
$thickness: 0.5em;
// Calculated variables.
$lat: ($size - $thickness) / 2;
$offset: $lat - $thickness;

.loader {
  position: relative;
  width: $size;
  height: $size;
  transform: rotate(165deg);

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: $thickness;
    height: $thickness;
    border-radius: $thickness / 2;
    transform: translate(-50%, -50%);
  }

  &:before {
    animation: before 2s infinite;
  }

  &:after {
    animation: after 2s infinite;
  }
}

@keyframes before {
  0% {
    width: $thickness;
    box-shadow: $lat (-$offset) nth($colors, 1), (-$lat) $offset nth($colors, 3);
  }
  35% {
    width: $size;
    box-shadow: 0 (-$offset) nth($colors, 1), 0 $offset nth($colors, 3);
  }
  70% {
    width: $thickness;
    box-shadow: (-$lat) (-$offset) nth($colors, 1), $lat $offset nth($colors, 3);
  }
  100% {
    box-shadow: $lat (-$offset) nth($colors, 1), (-$lat) $offset nth($colors, 3);
  }
}

@keyframes after {
  0% {
    height: $thickness;
    box-shadow: $offset $lat nth($colors, 2), (-$offset) (-$lat) nth($colors, 4);
  }
  35% {
    height: $size;
    box-shadow: $offset 0 nth($colors, 2), (-$offset) 0 nth($colors, 4);
  }
  70% {
    height: $thickness;
    box-shadow: $offset (-$lat) nth($colors, 2), (-$offset) $lat nth($colors, 4);
  }
  100% {
    box-shadow: $offset $lat nth($colors, 2), (-$offset) (-$lat) nth($colors, 4);
  }
}

/**
 * Attempt to center the whole thing!
 */

html,
body {
  height: 100%;
}

// .loader {
//   position: absolute;
//   top: calc(50% - #{$size / 2});
//   left: calc(50% - #{$size / 2});
// }
</style>
<style>
.typing {
  color: #000;
  font-size: 2em;
  width: 21em;
  height: 1.5em;
  border-right: 1px solid transparent;
  animation: typing 2s steps(42, end), blink-caret 0.75s step-end infinite;
  font-family: Consolas, Monaco;
  word-break: break-all;
  overflow: hidden;
}
/* 打印效果 */
@keyframes typing {
  from {
    width: 0;
  }
  ​to {
    width: 21em;
  }
}
​
/* 光标 */
@keyframes blink-caret {
  ​ from,
  to {
    border-color: transparent;
  }
  ​50% {
    border-color: currentColor;
  }
}
</style>
<style lang="scss">
@function makeLongShadow($color) {
  $val: 0px 0px $color;

  @for $i from 1 through 50 {
    $color: fade-out(desaturate($color, 1%), 0.02);
    $val: #{$val}, #{$i}px #{$i}px #{$color};
  }

  @return $val;
}

.div001 {
  font-size: 62px;
  // text-shadow: makeLongShadow(hsl(14, 100%, 30%));
  text-shadow: 0 -1px 0 #ffffff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c,
    0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424,
    0 7px 0 #222222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c,
    0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414,
    0 15px 0 #121212;
}

.div002 {
  // background: #000;
  color: #fff;
  text-shadow: 0 0 10px #0ebeff, 0 0 20px #0ebeff, 0 0 50px #0ebeff,
    0 0 100px #0ebeff, 0 0 200px #0ebeff;
  transition: 0.2s;
}
.div002:hover {
  text-shadow: 0 0 10px #0ebeff, 0 0 20px #0ebeff, 0 0 50px #0ebeff,
    0 0 100px #0ebeff, 0 0 200px #0ebeff;
}
</style>
