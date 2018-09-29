import { BoxGeometry, Mesh, MeshBasicMaterial, Group } from "three";

export default class Cube extends Group {
  constructor(color) {
    super();
    this.geometry = new BoxGeometry(0.3, 0.3, 0.3);
    this.material = new MeshBasicMaterial({ color: color || 0xffffff });
    this.geometry.computeBoundingSphere();
    this.frustumCulled = false;
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.frustumCulled = false;
    this.add(this.mesh);
  }
}
