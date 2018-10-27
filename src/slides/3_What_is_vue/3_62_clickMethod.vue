<template>
    <ImageCard title="method event handlers" :src="CLICK_METHOD_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { CLICK_METHOD_IMG_SRC } from "./const";
export default {
  name: "methodEventHandlers",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      CLICK_METHOD_IMG_SRC,
      items: [
        "most logic for event handlers is too complex for inline",
        "can also accept the name of a method "
      ]
    };
  }
};
</script>
