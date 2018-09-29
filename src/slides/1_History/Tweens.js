import * as TWEEN from "@tweenjs/tween.js";
import OrbitControls from "orbit-controls-es6";
import { Component, randomFloat } from "pulsar-pathfinding";
import { Color, Vector3 } from "three";
import Cube from "../../entities/Cube";
import {
  SERVER_POSITION,
  PC_CABLE_POSITION,
  REQUEST_TWEEN_TIME,
  CAMERA_POSITION_WEB1_1,
  CAMERA_POSITION_WEB1_2,
  CAMERA_POSITION_MIDPOINT,
  TWEEN_WEB_1_1_TIME,
  TWEEN_WEB_1_2_TIME
} from "./const";
import { theme } from "../../assets/themes";

class UpdateTween extends Component {
  constructor(scene) {
    super();
    this.tween = scene;
  }
  update() {
    if (this.tween.controls.autoRotate) {
      this.tween.controls.update();
    }
    TWEEN.update();
  }
}

export default class Tween {
  constructor(scene) {
    this.scene = scene;
    this.controls = new OrbitControls(
      scene.app3D.camera,
      scene.app3D.renderer.domElement
    );
    this.controls.enablePan = false;
    this.controls.enableRotate = false;
    this.controls.enableZoom = false;
    this.scene.app3D.add(new UpdateTween(this));
  }

  web1_1() {
    this.moving = true;
    this.tweenCubeWeb1_1();
    this.tweenCameraWeb1_1();
  }

  web1_2() {
    this.moving = true;
    this.tweenCameraWeb1_2();
  }

  web1_3() {
    this.moving = true;
    this.tweenCameraWeb1_3();
  }

  web2_1() {
    this.moving = true;
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        this.tweenCubeWeb1_1();
      }, randomFloat(100, 3000));
    }
  }

  tweenCubeWeb1_1() {
    const cube = new Cube(theme.success);

    this.scene.app3D.scene.add(cube);
    cube.position.copy(SERVER_POSITION);

    const toServer = new TWEEN.Tween(cube.position)
      .to(SERVER_POSITION, REQUEST_TWEEN_TIME)
      .onComplete(() => (cube.material.color = new Color(theme.success)));

    const toPC = new TWEEN.Tween(cube.position)
      .to(PC_CABLE_POSITION, REQUEST_TWEEN_TIME)
      .onComplete(() => (cube.material.color = new Color(theme.danger)));

    toServer.chain(toPC);
    toPC.chain(toServer);

    toPC.start();
  }

  tweenCameraWeb1_1() {
    const lookAt = new Vector3();
    new TWEEN.Tween(this.scene.app3D.camera.position)
      .to(CAMERA_POSITION_WEB1_1, TWEEN_WEB_1_1_TIME)
      .onUpdate(() => {
        this.scene.app3D.camera.lookAt(lookAt);
      })
      .easing(TWEEN.Easing.Quadratic.Out)

      .start();
  }

  tweenCameraWeb1_2() {
    const lookAt = new Vector3();
    new TWEEN.Tween(this.scene.app3D.camera.position)
      .to(
        {
          x: [CAMERA_POSITION_MIDPOINT.x, CAMERA_POSITION_WEB1_2.x],
          y: [CAMERA_POSITION_MIDPOINT.y, CAMERA_POSITION_WEB1_2.y],
          z: [CAMERA_POSITION_MIDPOINT.z, CAMERA_POSITION_WEB1_2.z]
        },
        TWEEN_WEB_1_2_TIME
      )
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => {
        this.scene.app3D.camera.lookAt(lookAt);
      })
      .start();
  }

  tweenCameraWeb1_3() {
    const lookAt = new Vector3();
    new TWEEN.Tween(this.scene.app3D.camera.position)
      .to(CAMERA_POSITION_MIDPOINT, TWEEN_WEB_1_2_TIME)
      .onUpdate(() => {
        this.scene.app3D.camera.lookAt(lookAt);
      })
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
  }
}
