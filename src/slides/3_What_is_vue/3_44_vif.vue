<template>
    <ImageCard title="v-if" :src="V_IF_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { V_IF_IMG_SRC } from "./const";
export default {
  name: "vIf",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      V_IF_IMG_SRC,
      items: [
        "it's like an <code>if</code> statement",
        "shows or hides content based on its value",
        "⚠️ has to be attached to a <strong>single element</strong>",
        "events are destroyed and re-created on toggles"
      ]
    };
  }
};
</script>
