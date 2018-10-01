<template>
    <Slide>
        <Card>
            <div>
                <List title="What is Vue.js?" :items="list"/>
            </div>
            <!--<iframe :src="FIRST_VUE_IFRAME_SRC" :style="IFRAME_STYLE" :sandbox="IFRAME_SANDBOX"></iframe>-->
        </Card>
    </Slide>
</template>

<script>
import { Slide, Card, List, Button } from "../../components";
import { FIRST_VUE_IFRAME_SRC, IFRAME_SANDBOX, IFRAME_STYLE } from "./const";

export default {
  name: "What_is_vue",
  components: {
    Slide,
    Card,
    List,
    Button
  },
  data() {
    return {
      FIRST_VUE_IFRAME_SRC,
      IFRAME_SANDBOX,
      IFRAME_STYLE,
      list: [
        "Just JavaScript",
        "A framework for building user interfaces",
        "Designed from the ground up to be incrementally adoptable",
        "Perfectly capable of powering sophisticated Single-Page Applications",
        "Can be used in combination with modern tooling and supporting libraries"
      ]
    };
  }
};
</script>
