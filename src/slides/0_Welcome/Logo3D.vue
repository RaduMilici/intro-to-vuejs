<template>
    <div ref="webGlContainer" class="webGlContainer"></div>
</template>

<script>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PointLight,
  AmbientLight,
  JSONLoader,
  Mesh,
  MeshPhongMaterial,
  SmoothShading,
  Object3D
} from "three";
import top from "./vue-top";
import bottom from "./vue-bottom";

export default {
  name: "Logo3D",
  data() {
    return {
      scene: new Scene(),
      renderer: new WebGLRenderer({ alpha: true }),
      camera: null,
      loader: new JSONLoader(),
      dummy: new Object3D()
    };
  },
  methods: {
    init3D() {
      const { clientWidth, clientHeight } = this.$refs.webGlContainer;
      const ratio = clientWidth / clientHeight;
      this.camera = new PerspectiveCamera(50, ratio, 1, 750);
      this.camera.position.set(0, 0.5, 9);
      this.renderer.setSize(clientWidth, clientHeight);
      this.$refs.webGlContainer.appendChild(this.renderer.domElement);
      this.scene.add(this.dummy);
    },
    addLights() {
      const light1 = new PointLight(0x10d0ff, 0.5, 20, 2);
      light1.position.set(-12, -10, 2);
      const light2 = new PointLight(0xff4040, 0.3, 20, 2);
      light2.position.set(8, -8, 5);
      const light3 = new PointLight(0x00ffff, 0.5, 50);
      light3.position.set(0, 30, 0);
      const light4 = new AmbientLight(0x00ffff, 0.8);
      light4.position.set(0, -2, 0);
      const light5 = new PointLight(0xffffff, 0.8, 50, 2);
      light5.position.set(0, 1.2, 5);
      const light6 = new PointLight(0xff00f0, 0.7, 50, 2);
      light6.position.set(0, 5, -10);
      this.scene.add(light1, light2, light3, light4, light5, light6);
    },
    loadMeshes() {
      const topGeometry = this.parseGeometry(top);
      const topMesh = new Mesh(
        topGeometry,
        new MeshPhongMaterial({
          color: 0x435365,
          reflectivity: 1,
          shininess: 300,
          specular: 0xffffff,
          shading: SmoothShading
        })
      );
      topMesh.scale.set(2, 2, 2);

      const bottomGeometry = this.parseGeometry(bottom);
      const bottomMesh = new Mesh(
        bottomGeometry,
        new MeshPhongMaterial({
          color: 0x4dba87,
          reflectivity: 1,
          shininess: 300,
          specular: 0xffffff,
          shading: SmoothShading
        })
      );
      bottomMesh.scale.set(2, 2, 2);
      this.dummy.add(topMesh, bottomMesh);
    },
    parseGeometry(obj) {
      const { geometry } = this.loader.parse(obj);
      return geometry;
    },
    render() {
      requestAnimationFrame(this.render);
      this.dummy.rotation.y += 0.005;
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init3D();
    this.addLights();
    this.loadMeshes();
    this.render();
  }
};
</script>

<style scoped>
.webGlContainer {
  width: 100%;
}
</style>
