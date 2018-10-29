<template>
    <ImageCard title="data binding" max-height="400px" :src="BINDING_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { BINDING_IMG_SRC } from "./const";
export default {
  name: "dataBinding",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      BINDING_IMG_SRC,
      items: [
        "<code>v-model</code> directive creates two-way data binding",
        "when model (JS) gets updated so does the UI and reverse",
        "works on form input, textarea, checkbox, radio and select"
      ]
    };
  }
};
</script>
