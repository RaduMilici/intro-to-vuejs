import { Component } from "pulsar-pathfinding";

export default class ParticleRender extends Component {
  constructor(renderer, scene, camera) {
    super();
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
  }

  update() {
    this.renderer.render(this.scene, this.camera);
    this.renderer.clearDepth();
  }
}
