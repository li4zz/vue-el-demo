<!-- 时间轴组件 -->
<template>
  <div>
    <!-- <a href="#/cleave" target="_blank">关于我们</a> -->
    <!-- 时间轴 -->
    <div class="meeting-time">
      <div class="time-container">
        <!-- 选中的时间端 -->
        <div class="time-line">
          <div
            v-for="(meeting, index) in meetings"
            :key="index"
            class="status-bar"
            :style="getStatusBarStyle(meeting)"
            :class="meeting.status"
          ></div>
        </div>
        <div class="time-scale">
          <div v-for="hour in 24" :key="hour" class="hour-mark">
            <!-- 刻度线 -->
            <div class="tick-line first"></div>
            <div class="tick-line"></div>
            <div class="tick-line"></div>
            <div class="tick-line"></div>
            <div class="tick-line last"></div>
            <!-- 时间 -->
            <span class="time-text">{{ hour - 1 }}:00</span>
            <span v-if="hour === 24" class="time-text time-right">00:00</span>
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
      meetings: [
        {
          startTime: "1:00",
          endTime: "2:30",
          status: "ongoing", // 进行中
        },
        {
          startTime: "9:15",
          endTime: "18:45",
          status: "finished", // 已结束
        },
        {
          startTime: "23:00",
          endTime: "23:59",
          status: "reserved", // 已预约
        },
      ],
    };
  },
  components: {},
  methods: {
    // 将时间字符串转换为分钟数 (如 "14:30" -> 870分钟)
    timeToMinutes(timeStr) {
      const [hours, minutes] = timeStr.split(":").map(Number);
      return hours * 60 + minutes;
    },

    // 计算状态条的样式
    getStatusBarStyle(meeting) {
      const { startTime, endTime } = meeting;

      const startMinutes = this.timeToMinutes(startTime);
      const endMinutes = this.timeToMinutes(endTime);

      // 一天总共1440分钟
      const totalMinutesInDay = 24 * 60;

      // 计算左边距百分比：开始分钟数 / 总分钟数 * 100%
      const left = (startMinutes / totalMinutesInDay) * 100;
      // 计算宽度百分比：(结束分钟数 - 开始分钟数) / 总分钟数 * 100%
      const width = ((endMinutes - startMinutes) / totalMinutesInDay) * 100;

      return {
        left: `${left}%`,
        width: `${width}%`,
      };
    },
  },
};
</script>
<style lang="less" scoped>
.meeting-time {
  height: 156px;
  margin-top: 60px;
  position: relative;

  .time-container {
    height: 100%;
    padding: 0 30px;
    // background: var(--base-bg-color);
    box-shadow: var(--bg-shadow);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .time-scale {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 18px;
    color: #666;

    .hour-mark {
      flex: 1;
      text-align: center;
      position: relative;
      display: flex;
      justify-content: space-between;

      .tick-line {
        width: 1px;
        height: 8px;
        background: #ccc;
        margin-bottom: 2px;

        &.first {
          height: 15px;
          width: 2px;
        }

        &.last {
          height: 15px;
        }
      }

      .time-text {
        position: absolute;
        left: -20px;
        top: 15px;
        font-size: 18px;
        font-weight: bold;

        &.time-right {
          left: auto;
          right: -20px;
        }
      }
    }
  }

  .time-line {
    width: 100%;
    height: 14px;
    background: #fff;
    position: relative;
    display: flex;
    overflow: hidden;

    .status-bar {
      position: absolute;
      top: 0;
      height: 100%;
      border-radius: 2px;

      // 不同状态的颜色
      &.finished {
        background: #999; // 已结束 - 灰色
      }

      &.ongoing {
        background: blue; // 进行中 - 蓝色
      }

      &.reserved {
        background: #ccc; // 已预约 - 浅灰色
      }

      &.idle {
        background: #fff; // 空闲中 - 白色
        border: 1px solid #ddd;
      }
    }
  }
}
</style>
