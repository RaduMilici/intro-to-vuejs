<template>
    <ImageCard title="v-show" :src="V_SHOW_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { V_SHOW_IMG_SRC } from "./const";
export default {
  name: "vShow",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      V_SHOW_IMG_SRC,
      items: [
        "will always be rendered and remain in the DOM",
        "only toggles the <code>display</code> CSS property of the element"
      ]
    };
  }
};
</script>
