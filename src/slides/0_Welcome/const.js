import { Vector3, SmoothShading } from "three";

const ROTATION_SPEED = 0.005;
const MESH_SCALE = new Vector3(2, 2, 2);
const CAMERA_DATA = {
  fov: 50,
  near: 1,
  far: 15,
  position: new Vector3(0, 0.5, 9)
};
const POINT_LIGHTS_DATA = [
  {
    color: 0x10d0ff,
    intensity: 0.5,
    distance: 20,
    decay: 2,
    position: new Vector3(-12, -10, 2)
  },
  {
    color: 0xff4040,
    intensity: 0.3,
    distance: 20,
    decay: 2,
    position: new Vector3(8, -8, 5)
  },
  {
    color: 0x00ffff,
    intensity: 0.5,
    distance: 50,
    position: new Vector3(0, 30, 0)
  },
  {
    color: 0xffffff,
    intensity: 0.8,
    distance: 50,
    decay: 2,
    position: new Vector3(0, 1.2, 5)
  },
  {
    color: 0xff00f0,
    intensity: 0.7,
    distance: 50,
    decay: 2,
    position: new Vector3(0, 5, -10)
  }
];
const AMBIENT_LIGHT_DATA = {
  color: 0x00ffff,
  intensity: 0.8
};
const MATERIAL_DATA = {
  top: {
    color: 0x435365,
    reflectivity: 1,
    shininess: 300,
    specular: 0xffffff,
    shading: SmoothShading
  },
  bottom: {
    color: 0x4dba87,
    reflectivity: 1,
    shininess: 300,
    specular: 0xffffff,
    shading: SmoothShading
  }
};

export {
  POINT_LIGHTS_DATA,
  AMBIENT_LIGHT_DATA,
  MATERIAL_DATA,
  ROTATION_SPEED,
  MESH_SCALE,
  CAMERA_DATA
};
