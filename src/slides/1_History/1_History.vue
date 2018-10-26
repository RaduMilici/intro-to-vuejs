<template>
    <Slide>
        <div class="webGlContainer"></div>
        <Card :small="stateIndex !== 5" :transparent="stateIndex !== 5" column :position="currentPosition" v-if="showList">
            <List :title="cardTitle" :items="currentText"/>
            <br>
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
          "all web sites made one request to the server",
          "server responded with the entire web page"
        ],
        ["servers did all the hard work", "most web-apps were closed source"],
        "Query parameters, cookies, and headers were all web devs had for adding interactivity",
        null,
        [
          "this all changed in 1999 when Microsoft released IE5 with XMLHttpRequest",
          "sends a request to the server and receives the response <strong>after</strong> a page was loaded",
          "this was a game changer"
        ],
        [
          "this was used to swap the contents of one <div> on the page",
          "then evolved to XML parsed by JavaScript in the browser",
          "Douglas Crockford specified the JSON format, which gained rapid following"
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
