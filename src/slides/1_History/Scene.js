import {
  AmbientLight,
  Line,
  LineBasicMaterial,
  Geometry,
  Vector3
} from "three";
import {
  SERVER_POSITION,
  SERVER_SCALE,
  PC_SCALE,
  PC_MESH_ID,
  SERVER_MESH_ID,
  LINE_COLOR,
  CAMERA_POSITION
} from "./const";
import App3D from "fast-threejs-app";
import APP_3D_SETTINGS from "./app3DSettings";
import loadMesh from "../../load";

export default class Scene {
  constructor() {
    this.pcPositions = [];
  }

  setup() {
    this.app3D = new App3D(APP_3D_SETTINGS);
    this.app3D.camera.position.copy(CAMERA_POSITION);
    this.app3D.scene.add(new AmbientLight(0xffffff));
    this.app3D.start();
  }

  async loadPC() {
    const mesh = await loadMesh(PC_MESH_ID);
    mesh.scale.copy(PC_SCALE);
    this.clonePC(mesh);
  }

  async loadServer() {
    const mesh = await loadMesh(SERVER_MESH_ID);
    mesh.scale.copy(SERVER_SCALE);
    mesh.position.copy(SERVER_POSITION);
    mesh.rotation.set(0, -Math.PI / 2, 0);
    this.app3D.scene.add(mesh);
  }

  clonePC(mesh) {
    const step = 3;
    for (let i = -step; i <= step; i += step) {
      const clone = mesh.clone();
      const pos = new Vector3(-6, i, 0);
      clone.position.copy(pos);
      clone.rotation.set(0, Math.PI, -0.06);
      this.app3D.scene.add(clone);
      this.pcPositions.push(pos);
    }
  }

  makeLines() {
    const geometry = new Geometry();
    this.pcPositions.forEach(pos => {
      geometry.vertices.push(pos, SERVER_POSITION);
    });
    const line = new Line(
      geometry,
      new LineBasicMaterial({ color: LINE_COLOR })
    );
    this.app3D.scene.add(line);
  }
}
