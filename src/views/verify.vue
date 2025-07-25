<!-- 向右滑动验证 -->
<template>
  <div class="login-container">
    <h2>用户登录</h2>
    <div class="form-group">
      <input type="text" placeholder="用户名" v-model="username" />
    </div>
    <div class="form-group">
      <input type="password" placeholder="密码" v-model="password" />
    </div>

    <!-- 滑动验证区域 -->
    <div class="slider-verify">
      <div class="slider-text">向右滑动完成验证</div>
      <div
        class="slider-btn"
        @mousedown="startDrag"
        @touchstart="startDrag"
        @mousemove="onDrag"
        @touchmove="onDrag"
        @mouseup="endDrag"
        @touchend="endDrag"
        :style="{ left: btnLeft + 'px' }"
      >
        →
      </div>
      <div class="slider-track">
        <div class="slider-progress" :style="{ width: progress + '%' }"></div>
      </div>
    </div>

    <button class="login-btn" :disabled="!verified" @click="handleLogin">
      {{ verified ? "登录" : "请完成验证" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      isDragging: false,
      startX: 0,
      btnLeft: 0,
      maxLeft: 0,
      verified: false,
    };
  },
  computed: {
    progress() {
      return (this.btnLeft / this.maxLeft) * 100;
    },
  },
  mounted() {
    this.initSlider();
    window.addEventListener("resize", this.initSlider);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.initSlider);
  },
  methods: {
    initSlider() {
      const slider = document.querySelector(".slider-verify");
      if (slider) {
        this.maxLeft = slider.offsetWidth - 40; // 按钮宽度
      }
    },
    startDrag(e) {
      this.isDragging = true;
      this.startX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
      e.preventDefault();
    },
    onDrag(e) {
      if (!this.isDragging) return;

      const currentX =
        e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
      const slider = document.querySelector(".slider-verify");
      const sliderRect = slider.getBoundingClientRect();

      let newLeft = currentX - this.startX;
      newLeft = Math.max(0, Math.min(newLeft, this.maxLeft));

      this.btnLeft = newLeft;

      // 验证成功条件
      if (newLeft >= this.maxLeft * 0.9) {
        this.verified = true;
      } else {
        this.verified = false;
      }

      e.preventDefault();
    },
    endDrag() {
      this.isDragging = false;
      if (!this.verified) {
        this.btnLeft = 0;
      }
    },
    handleLogin() {
      if (this.verified) {
        alert(`登录成功! 用户名: ${this.username}`);
        // 这里可以添加实际的登录逻辑
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.slider-verify {
  margin: 25px 0;
  position: relative;
  height: 40px;
  background: #f5f5f5;
  border-radius: 20px;
  user-select: none;
}

.slider-text {
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 40px;
  color: #888;
  z-index: 1;
}

.slider-track {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
}

.slider-progress {
  height: 100%;
  background: #42b983;
  transition: width 0.3s;
}

.slider-btn {
  position: absolute;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: grab;
  z-index: 2;
  top: 0;
  left: 0;
}

.slider-btn:active {
  cursor: grabbing;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.login-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.login-btn:not(:disabled):hover {
  background: #3aa876;
}
</style>
