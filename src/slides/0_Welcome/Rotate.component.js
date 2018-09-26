import { Component } from "pulsar-pathfinding";

export default class Rotate extends Component {
  constructor(object, velocity) {
    super();
    this.object = object;
    this.velocity = velocity;
  }

  update({ deltaTime }) {
    this.object.rotation.x += this.velocity.x * deltaTime;
    this.object.rotation.y += this.velocity.y * deltaTime;
    this.object.rotation.z += this.velocity.z * deltaTime;
  }
}
