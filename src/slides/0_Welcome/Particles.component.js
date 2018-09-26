import {
  PointsMaterial,
  AdditiveBlending,
  BufferGeometry,
  Vector3,
  BufferAttribute,
  Points,
  LineBasicMaterial,
  VertexColors,
  LineSegments
} from "three";
import { randomFloat } from "../../util";
import { Component } from "pulsar-pathfinding";

export default class Particles extends Component {
  constructor() {
    super();
    this.MIN_DISTANCE = 2;
    this.PARTICLE_COUNT = 50;
    this.MAX_PARTICLE_COUNT = 500;
    this.SIDE = 7;
    this.HALF_SIDE = this.SIDE / 2;
    this.MIN_VELOCITY = -0.005;
    this.MAX_VELOCITY = 0.005;

    this.segments = this.MAX_PARTICLE_COUNT * this.MAX_PARTICLE_COUNT;
    this.positions = new Float32Array(this.segments * 3);
    this.colors = new Float32Array(this.segments * 3);
    this.particlesData = [];
    this.particleMaterial = new PointsMaterial({
      color: 0xffffff,
      size: 3,
      blending: AdditiveBlending,
      transparent: true,
      sizeAttenuation: false
    });
    this.lineMaterial = new LineBasicMaterial({
      vertexColors: VertexColors,
      blending: AdditiveBlending,
      transparent: true
    });
    this.particles = new BufferGeometry();
    this.particlePositions = new Float32Array(this.MAX_PARTICLE_COUNT * 3);
    this.setPositions();

    this.particles.setDrawRange(0, this.PARTICLE_COUNT);
    this.particles.addAttribute(
      "position",
      new BufferAttribute(this.particlePositions, 3).setDynamic(true)
    );
    this.pointCloud = new Points(this.particles, this.particleMaterial);
    const geometry = new BufferGeometry();
    geometry.addAttribute(
      "position",
      new BufferAttribute(this.positions, 3).setDynamic(true)
    );
    geometry.addAttribute(
      "color",
      new BufferAttribute(this.colors, 3).setDynamic(true)
    );
    geometry.computeBoundingSphere();
    geometry.setDrawRange(0, 0);
    this.linesMesh = new LineSegments(geometry, this.lineMaterial);
  }

  setPositions() {
    for (let i = 0; i < this.MAX_PARTICLE_COUNT; i++) {
      const x = Math.random() * this.SIDE - this.HALF_SIDE;
      const y = Math.random() * this.SIDE - this.HALF_SIDE;
      const z = Math.random() * this.SIDE - this.HALF_SIDE;
      this.particlePositions[i * 3] = x;
      this.particlePositions[i * 3 + 1] = y;
      this.particlePositions[i * 3 + 2] = z;
      const velX = randomFloat(this.MIN_VELOCITY, this.MAX_VELOCITY);
      const velY = randomFloat(this.MIN_VELOCITY, this.MAX_VELOCITY);
      const velZ = randomFloat(this.MIN_VELOCITY, this.MAX_VELOCITY);
      const velocity = new Vector3(velX, velY, velZ);
      this.particlesData.push({ velocity, numConnections: 0 });
    }
  }

  update() {
    let vertexPos = 0;
    let colorPos = 0;
    let numConnected = 0;

    for (let i = 0; i < this.PARTICLE_COUNT; i++)
      this.particlesData[i].numConnections = 0;

    for (let i = 0; i < this.PARTICLE_COUNT; i++) {
      // get the particle
      const particleData = this.particlesData[i];
      this.particlePositions[i * 3] += particleData.velocity.x;
      this.particlePositions[i * 3 + 1] += particleData.velocity.y;
      this.particlePositions[i * 3 + 2] += particleData.velocity.z;
      if (
        this.particlePositions[i * 3 + 1] < -this.HALF_SIDE ||
        this.particlePositions[i * 3 + 1] > this.HALF_SIDE
      )
        particleData.velocity.y = -particleData.velocity.y;
      if (
        this.particlePositions[i * 3] < -this.HALF_SIDE ||
        this.particlePositions[i * 3] > this.HALF_SIDE
      )
        particleData.velocity.x = -particleData.velocity.x;
      if (
        this.particlePositions[i * 3 + 2] < -this.HALF_SIDE ||
        this.particlePositions[i * 3 + 2] > this.HALF_SIDE
      )
        particleData.velocity.z = -particleData.velocity.z;
      // Check collision
      for (let j = i + 1; j < this.PARTICLE_COUNT; j++) {
        const particleDataB = this.particlesData[j];
        const dx =
          this.particlePositions[i * 3] - this.particlePositions[j * 3];
        const dy =
          this.particlePositions[i * 3 + 1] - this.particlePositions[j * 3 + 1];
        const dz =
          this.particlePositions[i * 3 + 2] - this.particlePositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < this.MIN_DISTANCE) {
          particleData.numConnections++;
          particleDataB.numConnections++;
          const alpha = 1.0 - dist / this.MIN_DISTANCE;
          this.positions[vertexPos++] = this.particlePositions[i * 3];
          this.positions[vertexPos++] = this.particlePositions[i * 3 + 1];
          this.positions[vertexPos++] = this.particlePositions[i * 3 + 2];
          this.positions[vertexPos++] = this.particlePositions[j * 3];
          this.positions[vertexPos++] = this.particlePositions[j * 3 + 1];
          this.positions[vertexPos++] = this.particlePositions[j * 3 + 2];
          this.colors[colorPos++] = alpha;
          this.colors[colorPos++] = alpha;
          this.colors[colorPos++] = alpha;
          this.colors[colorPos++] = alpha;
          this.colors[colorPos++] = alpha;
          this.colors[colorPos++] = alpha;
          numConnected++;
        }
      }
    }
    this.linesMesh.geometry.setDrawRange(0, numConnected * 2);
    this.linesMesh.geometry.attributes.position.needsUpdate = true;
    this.linesMesh.geometry.attributes.color.needsUpdate = true;
    this.pointCloud.geometry.attributes.position.needsUpdate = true;
  }
}
