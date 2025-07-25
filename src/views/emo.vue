<!-- emo特效 -->
<template>
  <div>
    <div class="page-container">
      <button @click="visible = true">打开弹窗</button>
    </div>
    <div v-if="visible" class="modal-overlay">
      <div
        :class="`${leave ? 'content leave-motion' : 'content'}`"
        @mousemove="handleMouseMove"
        @mouseenter="(e) => handleMouseEnter(e, true)"
        @mouseleave="(e) => handleMouseEnter(e, false)"
      >
        <div
          class="emoji-head"
          :style="`background: linear-gradient(to bottom, hsl(${hue_deg}deg 100% 65.29%),rgb(255, 223, 78));`"
        >
          <div class="eye-white">
            <div class="eye-white-left">
              <div
                class="eye-ball"
                :style="`transform:scale(${eye_ball_diameter_scale}) translate(-${eye_ball_move[0]}%,-${eye_ball_move[1]}%);left:${eye_ball_move[0]}%;top:${eye_ball_move[1]}%;`"
              ></div>
              <!-- Create By Shawn Lee , Blibli 助学宝StudyPal -->
            </div>
            <div class="eye-white-right">
              <div
                class="eye-ball"
                :style="`transform:scale(${eye_ball_diameter_scale}) translate(-${eye_ball_move[2]}%,-${eye_ball_move[3]}%);left:${eye_ball_move[2]}%;top:${eye_ball_move[3]}%`"
              ></div>
            </div>
          </div>
          <div
            class="mouth"
            :style="`border-radius: ${mouth_radius[0]}px ${mouth_radius[1]}px  ${mouth_radius[2]}px ${mouth_radius[3]}px;`"
          >
            <div class="teeth"></div>
            <div class="tongue"></div>
          </div>
          <div
            class="cheeks"
            :style="`left:${50 + eye_ball_move[2] / 100}%;top:${
              52 + eye_ball_move[3] / 100
            }%;`"
          >
            <div
              class="cheek-item"
              :style="`background: radial-gradient(ellipse at center, rgba(250, 147, 147,${cheek_alpha}) 60%, rgba(202, 40, 40,${cheek_alpha}) 90%);`"
            ></div>
            <div
              class="cheek-item"
              :style="`background: radial-gradient(ellipse at center, rgba(250, 147, 147,${cheek_alpha}) 60%, rgba(202, 40, 40,${cheek_alpha}) 90%);`"
            ></div>
          </div>
        </div>
        <div class="button-wrapper">
          <div class="btn-primary success">保留</div>
          <div class="btn-primary danger">卸载</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      hue_deg: 49,
      cheek_alpha: 1,
      eye_ball_diameter_scale: 1,
      mouth_radius: [5, 5, 50, 50], // 上左,上右,下左,下右
      eye_ball_move: [90, 80, 10, 20],
      leave: false,
    };
  },
  mounted() {},
  methods: {
    reset() {
      this.hue_deg = 49;
      this.cheek_alpha = 1;
      this.eye_ball_diameter_scale = 1;
      this.mouth_radius = [5, 5, 50, 50];
      this.eye_ball_move = [90, 80, 10, 20];
    },
    handleMouseEnter(e, flag) {
      if (!flag) {
        this.leave = true;
        this.reset();
      }
    },
    handleMouseMove(e) {
      //面部max 140,min 49
      let max = 140,
        min = 49;
      let width = 600,
        height = 300;
      let face_ratio = (max - min) / width; //面部渐变
      let cheek_ratio = 1 / (width - 50); //脸颊渐变
      let eye_ball_diameter_ratio = 1 / width; //眼球直径渐变

      this.hue_deg = min + face_ratio * e.layerX;
      this.cheek_alpha =
        1 + -1 * cheek_ratio * e.layerX >= 0.1
          ? 1 + -1 * cheek_ratio * e.layerX
          : 0;
      this.eye_ball_diameter_scale =
        1 + (eye_ball_diameter_ratio * e.layerX) / 3;
      this.eye_ball_move = [
        (e.layerX / width) * 100,
        (e.layerY / height) * 100,
        (e.layerX / width) * 100,
        (e.layerY / height) * 100,
      ];

      let MR = e.layerX / width;
      let MRX = 0,
        MRY = 0; //左移下圆，右移上圆
      MRX = MR * 50 < 5 ? 5 : MR * 50;
      MRY = 50 + -1 * MR * 45;
      this.mouth_radius = [MRX, MRX, MRY, MRY];
    },
  },
};
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-container {
  display: flex;
  justify-content: center;
}
.button-wrapper {
  display: flex;
  justify-content: space-between;
  width: 90%;
}
.btn-primary {
  width: 80px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  color: white;
  font-size: 18px;
  cursor: pointer;
}
.success {
  background: rgb(19, 197, 19);
}
.danger {
  background: rgb(230, 38, 31);
}
.content {
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: white;
  flex-direction: column;
  padding: 20px 0;
}
.leave-motion {
  transition: all 0.1s;
}

.content .emoji-head {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid rgb(230, 215, 6);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  transition: linear;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  margin-top: 80px;
}
.content .mouth {
  width: 90px;
  height: 40px;
  background: rgb(173, 36, 36);
  position: relative;
  border: 2px solid rgb(172, 12, 12);
  overflow: hidden;
}
.content .mouth .teeth {
  width: 15px;
  height: 8px;
  border-radius: 0 0 5px 5px;
  position: absolute;
  right: 20%;
  background: white;
}
.content .mouth .tongue {
  width: 40px;
  height: 45px;
  border-radius: 50%;
  position: absolute;
  bottom: -20px;
  left: 10%;
  transform: rotate(-60deg);
  background: rgb(148, 19, 19);
}
.content .emoji-head .cheeks {
  width: 180px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 52%;
  left: 50%;
  transform: translateX(-50%);
}
.content .emoji-head .cheek-item {
  width: 60px;
  height: 25px;
  border-radius: 50%;
}
.content .emoji-head .eye-white {
  width: 120px;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
}

.content .emoji-head .eye-white .eye-white-left,
.eye-white-right {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  position: relative;
  overflow: hidden;
}
.eye-ball {
  position: absolute;
  border-radius: 50%;
  background: rgb(95, 3, 3);
  width: 22px;
  height: 22px;
}
</style>
