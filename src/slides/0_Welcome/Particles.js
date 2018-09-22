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

const MIN_DISTANCE = 2;
const PARTICLE_COUNT = 50;
const MAX_PARTICLE_COUNT = 500;
const SIDE = 7;
const HALF_SIDE = SIDE / 2;
const MIN_VELOCITY = -0.005;
const MAX_VELOCITY = 0.005;

const segments = MAX_PARTICLE_COUNT * MAX_PARTICLE_COUNT;
const positions = new Float32Array(segments * 3);
const colors = new Float32Array(segments * 3);
const particlesData = [];
const particleMaterial = new PointsMaterial({
  color: 0xffffff,
  size: 3,
  blending: AdditiveBlending,
  transparent: true,
  sizeAttenuation: false
});
const lineMaterial = new LineBasicMaterial({
  vertexColors: VertexColors,
  blending: AdditiveBlending,
  transparent: true
});
const particles = new BufferGeometry();
const particlePositions = new Float32Array(MAX_PARTICLE_COUNT * 3);

for (let i = 0; i < MAX_PARTICLE_COUNT; i++) {
  const x = Math.random() * SIDE - HALF_SIDE;
  const y = Math.random() * SIDE - HALF_SIDE;
  const z = Math.random() * SIDE - HALF_SIDE;
  particlePositions[i * 3] = x;
  particlePositions[i * 3 + 1] = y;
  particlePositions[i * 3 + 2] = z;
  const velX = randomFloat(MIN_VELOCITY, MAX_VELOCITY);
  const velY = randomFloat(MIN_VELOCITY, MAX_VELOCITY);
  const velZ = randomFloat(MIN_VELOCITY, MAX_VELOCITY);
  const velocity = new Vector3(velX, velY, velZ);
  particlesData.push({ velocity, numConnections: 0 });
}

particles.setDrawRange(0, PARTICLE_COUNT);
particles.addAttribute(
  "position",
  new BufferAttribute(particlePositions, 3).setDynamic(true)
);
const pointCloud = new Points(particles, particleMaterial);
const geometry = new BufferGeometry();
geometry.addAttribute(
  "position",
  new BufferAttribute(positions, 3).setDynamic(true)
);
geometry.addAttribute("color", new BufferAttribute(colors, 3).setDynamic(true));
geometry.computeBoundingSphere();
geometry.setDrawRange(0, 0);
const linesMesh = new LineSegments(geometry, lineMaterial);

const updateParticles = () => {
  let vertexPos = 0;
  let colorPos = 0;
  let numConnected = 0;

  for (let i = 0; i < PARTICLE_COUNT; i++) particlesData[i].numConnections = 0;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    // get the particle
    const particleData = particlesData[i];
    particlePositions[i * 3] += particleData.velocity.x;
    particlePositions[i * 3 + 1] += particleData.velocity.y;
    particlePositions[i * 3 + 2] += particleData.velocity.z;
    if (
      particlePositions[i * 3 + 1] < -HALF_SIDE ||
      particlePositions[i * 3 + 1] > HALF_SIDE
    )
      particleData.velocity.y = -particleData.velocity.y;
    if (
      particlePositions[i * 3] < -HALF_SIDE ||
      particlePositions[i * 3] > HALF_SIDE
    )
      particleData.velocity.x = -particleData.velocity.x;
    if (
      particlePositions[i * 3 + 2] < -HALF_SIDE ||
      particlePositions[i * 3 + 2] > HALF_SIDE
    )
      particleData.velocity.z = -particleData.velocity.z;
    // Check collision
    for (let j = i + 1; j < PARTICLE_COUNT; j++) {
      const particleDataB = particlesData[j];
      const dx = particlePositions[i * 3] - particlePositions[j * 3];
      const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
      const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < MIN_DISTANCE) {
        particleData.numConnections++;
        particleDataB.numConnections++;
        const alpha = 1.0 - dist / MIN_DISTANCE;
        positions[vertexPos++] = particlePositions[i * 3];
        positions[vertexPos++] = particlePositions[i * 3 + 1];
        positions[vertexPos++] = particlePositions[i * 3 + 2];
        positions[vertexPos++] = particlePositions[j * 3];
        positions[vertexPos++] = particlePositions[j * 3 + 1];
        positions[vertexPos++] = particlePositions[j * 3 + 2];
        colors[colorPos++] = alpha;
        colors[colorPos++] = alpha;
        colors[colorPos++] = alpha;
        colors[colorPos++] = alpha;
        colors[colorPos++] = alpha;
        colors[colorPos++] = alpha;
        numConnected++;
      }
    }
  }
  linesMesh.geometry.setDrawRange(0, numConnected * 2);
  linesMesh.geometry.attributes.position.needsUpdate = true;
  linesMesh.geometry.attributes.color.needsUpdate = true;
  pointCloud.geometry.attributes.position.needsUpdate = true;
};

export { updateParticles, pointCloud, linesMesh };
