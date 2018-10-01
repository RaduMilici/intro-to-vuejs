<template>
    <Slide>
        <Card>
            <div style="width: 100%; text-align: center">
                <h2>My first Vue app 🍼👶</h2>
                <iframe :src="FIRST_VUE_IFRAME_SRC" :style="IFRAME_STYLE" :sandbox="IFRAME_SANDBOX"></iframe>
            </div>
        </Card>
    </Slide>
</template>

<script>
  import { Slide, Card, List } from "../../components";
  import { FIRST_VUE_IFRAME_SRC, IFRAME_SANDBOX, IFRAME_STYLE } from "./const";

  export default {
    name: "first_app",
    components: {
      Slide,
      Card,
      List
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
