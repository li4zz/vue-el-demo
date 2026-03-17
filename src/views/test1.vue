<template>
  <div class="test1">
    <div class="box">
      <div class="a">
        <div class="b"><img src="@/assets/images/55.png" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.a {
  width: 200px;
  height: 260px;
  border-radius: 0 0 110px 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s;
}
.b {
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  background-color: rgb(205, 205, 255);
  border: 2px solid #000;
  border-radius: 50%;
}
img {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}
.a:hover {
  transform: scale(0.9);
  transition: all 0.5s;
}
img:hover {
  transform: scale(1.5);
  transition: all 0.5s;
}
</style>
