import { AmbientLight, Line, LineBasicMaterial, Geometry } from "three";
import {
  SERVER_POSITION,
  SERVER_SCALE,
  PC_SCALE,
  PC_MESH_ID,
  SERVER_MESH_ID,
  LINE_COLOR,
  CAMERA_POSITION,
  PC_POSITION,
  PC_CABLE_POSITION
} from "./const";
import App3D from "fast-threejs-app";
import APP_3D_SETTINGS from "./app3DSettings";
import loadMesh from "../../loader/load";

export default class Scene {
  setup() {
    this.app3D = new App3D(APP_3D_SETTINGS);
    this.app3D.camera.position.copy(CAMERA_POSITION);
    this.app3D.scene.add(new AmbientLight(0xffffff));
  }

  async loadPC() {
    const mesh = await loadMesh(PC_MESH_ID);
    mesh.scale.copy(PC_SCALE);
    mesh.position.copy(PC_POSITION);
    mesh.rotation.set(0, Math.PI, -0.06);
    this.app3D.scene.add(mesh);
  }

  async loadServer() {
    const mesh = await loadMesh(SERVER_MESH_ID);
    mesh.scale.copy(SERVER_SCALE);
    mesh.position.copy(SERVER_POSITION);
    mesh.rotation.set(0, -Math.PI / 2, 0);
    this.app3D.scene.add(mesh);
  }

  makeLine() {
    const geometry = new Geometry();
    const material = new LineBasicMaterial({ color: LINE_COLOR });
    geometry.vertices.push(PC_CABLE_POSITION, SERVER_POSITION);
    const line = new Line(geometry, material);
    this.app3D.scene.add(line);
  }
}
