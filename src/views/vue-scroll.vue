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
    <ul class="list">
      <li
        v-for="(item, index) in ulList"
        :key="item.id"
        :class="!index && play ? 'toUp' : ''"
      >
        {{ item.msg }}
      </li>
    </ul>
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
