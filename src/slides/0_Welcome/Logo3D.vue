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
  Object3D
} from "three";
import top from "./vue-top";
import bottom from "./vue-bottom";
import {
  POINT_LIGHTS_DATA,
  AMBIENT_LIGHT_DATA,
  MATERIAL_DATA,
  ROTATION_SPEED,
  MESH_SCALE,
  CAMERA_DATA
} from "./const";
import { updateParticles, pointCloud, linesMesh } from "./Particles";

export default {
  name: "Logo3D",
  data() {
    return {
      camera: null,
      scene: new Scene(),
      particleScene: new Scene(),
      renderer: new WebGLRenderer({
        alpha: true,
        autoClear: false,
        antialias: true
      }),
      loader: new JSONLoader(),
      dummy: new Object3D()
    };
  },
  methods: {
    setupScene() {
      const { clientWidth, clientHeight } = this.$refs.webGlContainer;
      this.camera = new PerspectiveCamera(
        CAMERA_DATA.fov,
        clientWidth / clientHeight,
        CAMERA_DATA.near,
        CAMERA_DATA.far
      );
      this.camera.position.copy(CAMERA_DATA.position);
      this.renderer.setSize(clientWidth, clientHeight);
      this.renderer.autoClear = false;
      this.$refs.webGlContainer.appendChild(this.renderer.domElement);
      this.scene.add(this.dummy);
      this.particleScene.add(linesMesh, pointCloud);
    },
    addLights() {
      POINT_LIGHTS_DATA.forEach(
        ({ color, intensity, distance, decay, position }) => {
          const light = new PointLight(color, intensity, distance, decay);
          light.position.copy(position);
          this.scene.add(light);
        }
      );
      const ambient = new AmbientLight(
        AMBIENT_LIGHT_DATA.color,
        AMBIENT_LIGHT_DATA.intensity
      );
      this.scene.add(ambient);
    },
    loadMeshes() {
      const topMesh = new Mesh(
        this.loader.parse(top).geometry,
        new MeshPhongMaterial(MATERIAL_DATA.top)
      );

      const bottomMesh = new Mesh(
        this.loader.parse(bottom).geometry,
        new MeshPhongMaterial(MATERIAL_DATA.bottom)
      );

      [topMesh, bottomMesh].forEach(mesh => {
        mesh.scale.copy(MESH_SCALE);
        this.dummy.add(mesh);
      });
    },
    render() {
      requestAnimationFrame(this.render);
      updateParticles();
      this.dummy.rotation.y += ROTATION_SPEED;
      this.renderer.render(this.particleScene, this.camera);
      this.renderer.clearDepth();
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.setupScene();
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
