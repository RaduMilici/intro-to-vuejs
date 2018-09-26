<template>
    <Slide>
        <div class="webGlContainer"></div>
        <Card transparent column>
            <List title="web 1.0" :items="listItems"/>
        </Card>
    </Slide>
</template>

<script>
import { Slide, Card, List } from "../../components";
import Scene from "./Scene";

export default {
  name: "History",
  components: {
    Slide,
    Card,
    List
  },
  data() {
    return {
      scene: null,
      listItems: [
        "In the early days of the web, all web sites made one request to the server, and the server responded with the entire web page to be displayed.",
        "Query parameters, cookies, and request headers were just about all web developers had in their toolkit with which interactivity could be accomplished.",
        "Web servers did all the grunt work rendering dynamic web pages."
      ]
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
