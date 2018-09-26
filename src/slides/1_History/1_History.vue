<template>
    <Slide>
        <div class="webGlContainer"></div>
    </Slide>
</template>

<script>
import { Slide } from "../../components";
import Scene from "./Scene";

export default {
  name: "History",
  components: {
    Slide
  },
  data() {
    return {
      scene: null
    };
  },
  methods: {},
  async mounted() {
    this.scene = new Scene();
    this.scene.setup();
    await this.scene.loadPC();
    await this.scene.loadServer();
    this.scene.makeLines();
  },
  beforeDestroy() {
    this.scene.app3D.stop();
  }
};
</script>

<style scoped>
.webGlContainer {
  width: 100%;
}
</style>
