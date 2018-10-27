<template>
    <ImageCard title="listening to events" :src="CLICK_HTML_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { CLICK_HTML_IMG_SRC } from "./const";
export default {
  name: "vIf",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      CLICK_HTML_IMG_SRC,
      items: [
        "<code>@[event name]</code> directive listens to DOM events",
        "run some JavaScript when they’re triggered"
      ]
    };
  }
};
</script>
