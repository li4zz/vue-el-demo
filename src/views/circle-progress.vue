<!-- 纯css实现两种数据圆形进度条 -->
<template>
  <div>
    <div class="container">
      <h1>双色圆环进度条</h1>

      <div class="progress-container">
        <svg
          class="progress-ring"
          width="250"
          height="250"
          viewBox="0 0 100 100"
        >
          <!-- 背景圆环 -->
          <circle
            class="progress-ring__circle-bg"
            cx="50"
            cy="50"
            r="40"
            stroke="#e0e0e0"
            stroke-width="8"
            fill="transparent"
          />
          <!-- 数据2圆环 -->
          <circle
            id="circle2"
            class="progress-ring__circle"
            cx="50"
            cy="50"
            r="40"
            stroke="#34A853"
            stroke-width="8"
            fill="transparent"
            stroke-dasharray="251.2"
            stroke-dashoffset="251.2"
          />
          <!-- 数据1圆环 -->
          <circle
            id="circle1"
            class="progress-ring__circle"
            cx="50"
            cy="50"
            r="40"
            stroke="#4285F4"
            stroke-width="8"
            fill="transparent"
            stroke-dasharray="251.2"
            stroke-dashoffset="251.2"
          />
        </svg>
        <div class="progress-value">0%</div>
      </div>

      <div class="progress-labels">
        <div class="progress-label">
          <div class="color-indicator" style="background: #4285f4"></div>
          <span>数据 1: <span id="data1-value">0</span>%</span>
        </div>
        <div class="progress-label">
          <div class="color-indicator" style="background: #34a853"></div>
          <span>数据 2: <span id="data2-value">0</span>%</span>
        </div>
      </div>

      <div class="controls">
        <div class="slider-container">
          <div class="slider-label">数据 1 (蓝色):</div>
          <input type="range" id="data1-slider" min="0" max="100" value="0" />
          <output id="data1-output">0%</output>
        </div>

        <div class="slider-container">
          <div class="slider-label">数据 2 (绿色):</div>
          <input type="range" id="data2-slider" min="0" max="100" value="0" />
          <output id="data2-output">0%</output>
        </div>
      </div>

      <div class="summary">
        <h3>说明</h3>
        <p>这个圆环进度条使用两种颜色表示两种数据：</p>
        <p>• <strong style="color: #4285f4">蓝色</strong> 表示第一种数据</p>
        <p>• <strong style="color: #34a853">绿色</strong> 表示第二种数据</p>
        <p>圆环总长度为100%，两种数据之和最大为100%。</p>
        <p>使用上方的滑块调整两种数据的值。</p>
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
  mounted() {
    const circle1 = document.getElementById("circle1");
    const circle2 = document.getElementById("circle2");
    const data1Slider = document.getElementById("data1-slider");
    const data2Slider = document.getElementById("data2-slider");
    const data1Output = document.getElementById("data1-output");
    const data2Output = document.getElementById("data2-output");
    const data1Value = document.getElementById("data1-value");
    const data2Value = document.getElementById("data2-value");
    const progressValue = document.querySelector(".progress-value");

    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    // 初始化圆环
    circle1.style.strokeDasharray = `${circumference}`;
    circle1.style.strokeDashoffset = `${circumference}`;
    circle2.style.strokeDasharray = `${circumference}`;
    circle2.style.strokeDashoffset = `${circumference}`;

    // 更新进度条函数
    function updateProgress() {
      const value1 = parseInt(data1Slider.value);
      const value2 = parseInt(data2Slider.value);

      // 确保总和不超过100%
      if (value1 + value2 > 100) {
        if (this === data1Slider) {
          data1Slider.value = 100 - value2;
        } else {
          data2Slider.value = 100 - value1;
        }
        updateProgress();
        return;
      }

      // 更新输出显示
      data1Output.value = data1Slider.value + "%";
      data2Output.value = data2Slider.value + "%";
      data1Value.textContent = data1Slider.value;
      data2Value.textContent = data2Slider.value;

      // 更新圆环
      const offset1 = circumference - (value1 / 100) * circumference;
      const offset2 = circumference - (value2 / 100) * circumference;

      circle1.style.strokeDashoffset = offset1;
      circle2.style.strokeDashoffset = offset2;

      // 更新中心百分比
      progressValue.textContent = value1 + value2 + "%";
    }

    // 添加事件监听
    data1Slider.addEventListener("input", updateProgress);
    data2Slider.addEventListener("input", updateProgress);

    // 初始化进度条
    data1Slider.value = 30;
    data2Slider.value = 45;
    updateProgress();
  },
};
</script>
<style scoped>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  margin: 0;
  padding: 20px;
}

.container {
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  /* width: 100%; */
}

h1 {
  color: #333;
  margin-bottom: 30px;
}

.progress-container {
  position: relative;
  width: 250px;
  height: 250px;
  margin: 0 auto 30px;
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring__circle {
  transition: stroke-dashoffset 1.5s ease-in-out;
  transform-origin: 50% 50%;
}

.progress-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

.progress-labels {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.progress-label {
  display: flex;
  align-items: center;
  font-weight: 500;
}

.color-indicator {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
}

.controls {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.slider-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.slider-label {
  min-width: 120px;
  text-align: left;
  font-weight: 500;
}

input[type="range"] {
  flex: 1;
  height: 8px;
  -webkit-appearance: none;
  background: #e0e0e0;
  border-radius: 4px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}

#data1-slider::-webkit-slider-thumb {
  background: #4285f4;
}

#data2-slider::-webkit-slider-thumb {
  background: #34a853;
}

.summary {
  margin-top: 25px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 10px;
  text-align: left;
}

.summary h3 {
  margin-top: 0;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}

.summary p {
  margin: 10px 0;
  color: #555;
}
</style>
