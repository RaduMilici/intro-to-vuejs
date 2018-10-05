<template>
    <Slide>
        <Card>
            <div>
                <List title="What is Vue.js?" :items="list"/>
            </div>
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
        "just JavaScript",
        "framework for building user interfaces",
        "designed to be incrementally adoptable",
        "capable of sophisticated Single-Page Applications",
        "can be used in combination with modern tooling"
      ]
    };
  }
};
</script>
