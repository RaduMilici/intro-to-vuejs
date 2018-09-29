<template>
    <div ref="webGlContainer" class="webGlContainer"></div>
</template>

<script>
import {
  Scene,
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
import App3D from "fast-threejs-app";
import APP_3D_SETTINGS from "./app3DSettings";
import Rotate from "./Rotate.component";
import Particles from "./Particles.component";
import ParticleRender from "./ParticleRender.component";

export default {
  name: "Logo3D",
  data() {
    return {
      app3D: null,
      particleScene: new Scene(),
      loader: new JSONLoader(),
      dummy: new Object3D()
    };
  },
  methods: {
    setupScene() {
      this.app3D = new App3D(APP_3D_SETTINGS);
      this.app3D.camera.position.copy(CAMERA_DATA.position);
      this.app3D.renderer.autoClear = false;
      this.app3D.scene.add(this.dummy);
      this.app3D.start();
      const particles = new Particles();
      this.app3D.add(particles);
      this.particleScene.add(particles.linesMesh, particles.pointCloud);
      const particleRenderer = new ParticleRender(
        this.app3D.renderer,
        this.particleScene,
        this.app3D.camera
      );
      this.app3D.add(particleRenderer);
    },
    addLights() {
      POINT_LIGHTS_DATA.forEach(
        ({ color, intensity, distance, decay, position }) => {
          const light = new PointLight(color, intensity, distance, decay);
          light.position.copy(position);
          this.app3D.scene.add(light);
        }
      );
      const ambient = new AmbientLight(
        AMBIENT_LIGHT_DATA.color,
        AMBIENT_LIGHT_DATA.intensity
      );
      this.app3D.scene.add(ambient);
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

      const rotate = new Rotate(this.dummy, { x: 0, y: ROTATION_SPEED, z: 0 });
      this.app3D.add(rotate);
    }
  },
  mounted() {
    this.setupScene();
    this.addLights();
    this.loadMeshes();
  },
  beforeDestroy() {
    this.app3D.stop();
  }
};
</script>

<style scoped>
.webGlContainer {
  width: 100%;
}
</style>
