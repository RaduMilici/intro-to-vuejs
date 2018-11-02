<template>
    <ImageCard title="custom events" max-height="300px" :src="EMIT_BASIC_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { EMIT_BASIC_IMG_SRC } from "./const";
export default {
  name: "componentsBasic",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      EMIT_BASIC_IMG_SRC,
      items: [
        "components are usually nested",
        "some features may require communicating up to parent",
        "call the built-in <code>$emit</code> method"
      ]
    };
  }
};
</script>
