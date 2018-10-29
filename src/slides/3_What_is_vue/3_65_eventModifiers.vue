<template>
    <ImageCard title="event modifiers" max-height="400px" :src="EVENT_MOD_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { EVENT_MOD_IMG_SRC } from "./const";
export default {
  name: "eventModifiers",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      EVENT_MOD_IMG_SRC,
      items: [
        "can be chained",
        "<code>event</code> is passed to methods, could be done there 🤔",
        "methods are purely logic; not dealing with event details"
      ]
    };
  }
};
</script>
