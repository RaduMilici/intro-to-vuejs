<template>
    <ImageCard title="props" max-height="300px" :src="PROPS_BASIC_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { PROPS_BASIC_IMG_SRC } from "./const";
export default {
  name: "componentsBasic",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      PROPS_BASIC_IMG_SRC,
      items: [
        "components should be customizable",
        "can pass data for them to process",
        "useful when you don’t know what you’re to render (fetch)"
      ]
    };
  }
};
</script>
