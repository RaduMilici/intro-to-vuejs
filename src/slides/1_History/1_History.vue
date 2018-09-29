<template>
    <Slide>
        <div class="webGlContainer"></div>
        <Card :small="stateIndex !== 5" :transparent="stateIndex !== 5" column :position="currentPosition" v-if="showList">
            <List :title="cardTitle" :items="currentText"/>
            <Button type="success" @click="onClickNext">NEXT</Button>
        </Card>
        <ReadOnlyWeb v-if="stateIndex === 3" @click="onClickNext"/>
        <Card column v-if="stateIndex === 4">
            <div :style="{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}">
                <img :src="IE_5_URL" :style="{marginRight: '100px'}">
                <List title="The hero we needed" :items="currentText"/>
            </div>
            <br>
            <Button type="success" @click="onClickNext">NEXT</Button>
        </Card>
    </Slide>
</template>

<script>
import { Slide, Card, List, Button } from "../../components";
import { IE_5_URL } from "./const";
import ReadOnlyWeb from "./ReadOnlyWeb";
import Tweens from "./Tweens";
import Scene from "./Scene";

export default {
  name: "History",
  components: {
    Slide,
    Card,
    List,
    Button,
    ReadOnlyWeb
  },
  data() {
    return {
      scene: null,
      tweens: null,
      stateIndex: 0,
      IE_5_URL,
      listItems: [
        [
          "In the early days of the web, all web sites made one request to the server.",
          "The server responded with the entire web page to be displayed."
        ],
        [
          "Web servers did all the grunt work rendering dynamic web pages.",
          " Most web-apps were closed source."
        ],
        "Query parameters, cookies, and request headers were just about all web developers had in their toolkit with which interactivity could be accomplished.",
        null,
        [
          "This all changed in 1999 when Microsoft released IE5 with XMLHttpRequest.",
          "A means to send a request to the server and receive the response after a page was loaded.",
          "This was a game changer."
        ],
        [
          "At first, this was used to swap the contents of one <div> on the page.",
          "This then evolved to XML to represent data that would be parsed by JavaScript in the browser.",
          "Douglas Crockford specified the JSON format, which gained rapid following."
        ]
      ],
      positions: ["right", "left", "center"],
      listIndices: [0, 1, 2, 5]
    };
  },
  computed: {
    currentText() {
      const text = this.listItems[this.stateIndex];
      return Array.isArray(text) ? text : [text];
    },
    cardTitle() {
      return this.stateIndex < 5 ? "Web 1.0" : "Web 2.0";
    },
    currentPosition() {
      return this.positions[this.stateIndex];
    },
    showList() {
      return this.listIndices.indexOf(this.stateIndex) !== -1;
    }
  },
  methods: {
    async onClickNext() {
      this.stateIndex++;

      switch (this.stateIndex) {
        case 1:
          this.tweens.web1_2();
          break;
        case 2:
          this.tweens.web1_3();
          break;
        case 6:
          this.tweens.web2_1();
          this.tweens.controls.autoRotate = true;
      }
    }
  },
  async mounted() {
    this.scene = new Scene();
    this.scene.setup();
    this.scene.makeLine();
    this.tweens = new Tweens(this.scene);
    this.scene.loadPC();
    await this.scene.loadServer();
    this.scene.app3D.start();
    this.tweens.web1_1();
  },
  beforeDestroy() {
    if (this.scene.app3D) {
      this.scene.app3D.stop();
    }
  }
};
</script>

<style scoped>
.webGlContainer {
  width: 100%;
}
</style>
