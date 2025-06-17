<!-- earth -->
<template>
  <div ref="container" class="earth-container"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default {
  name: "EarthModel",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      earth: null,
      controls: null,
      animationId: null,
    };
  },
  mounted() {
    this.initThreeJS();
    this.animate();
    window.addEventListener("resize", this.onWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
    cancelAnimationFrame(this.animationId);
    this.renderer.dispose();
  },
  methods: {
    initThreeJS() {
      // 1. 创建场景
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x000000);

      // 2. 创建相机
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.$refs.container.clientWidth / this.$refs.container.clientHeight,
        0.1,
        1000
      );
      this.camera.position.z = 2;

      // 3. 创建渲染器
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.$refs.container.clientWidth,
        this.$refs.container.clientHeight
      );
      this.$refs.container.appendChild(this.renderer.domElement);

      // 4. 添加轨道控制器
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;

      // 5. 创建地球
      this.createEarth();

      // 6. 添加环境光和平行光
      const ambientLight = new THREE.AmbientLight(0x404040);
      this.scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      this.scene.add(directionalLight);
    },

    createEarth() {
      // 创建地球几何体
      const geometry = new THREE.SphereGeometry(1, 64, 64);

      // 加载地球纹理
      const textureLoader = new THREE.TextureLoader();
      const earthTexture = textureLoader.load(
        "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
      );
      const bumpMap = textureLoader.load(
        "https://threejs.org/examples/textures/planets/earth_normal_2048.jpg"
      );
      const specularMap = textureLoader.load(
        "https://threejs.org/examples/textures/planets/earth_specular_2048.jpg"
      );

      // 创建材质
      const material = new THREE.MeshPhongMaterial({
        map: earthTexture,
        bumpMap: bumpMap,
        bumpScale: 0.05,
        specularMap: specularMap,
        specular: new THREE.Color("grey"),
        shininess: 5,
      });

      // 创建地球网格
      this.earth = new THREE.Mesh(geometry, material);
      this.scene.add(this.earth);

      // 添加云层
      const cloudGeometry = new THREE.SphereGeometry(1.01, 64, 64);
      const cloudTexture = textureLoader.load(
        "https://threejs.org/examples/textures/planets/earth_clouds_1024.png"
      );
      const cloudMaterial = new THREE.MeshPhongMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.4,
      });
      const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
      this.scene.add(clouds);
    },

    animate() {
      this.animationId = requestAnimationFrame(this.animate);

      // 地球自转
      if (this.earth) {
        this.earth.rotation.y += 0.001;
      }

      // 更新控制器
      if (this.controls) {
        this.controls.update();
      }

      // 渲染场景
      this.renderer.render(this.scene, this.camera);
    },

    onWindowResize() {
      this.camera.aspect =
        this.$refs.container.clientWidth / this.$refs.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(
        this.$refs.container.clientWidth,
        this.$refs.container.clientHeight
      );
    },
  },
};
</script>

<style scoped>
.earth-container {
  width: 100%;
  height: 600px;
  position: relative;
}
</style>
