<template>
    <ImageCard title="custom events" max-height="300px" :src="AT_EMIT_BASIC_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { AT_EMIT_BASIC_IMG_SRC } from "./const";
export default {
  name: "componentsBasic",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      AT_EMIT_BASIC_IMG_SRC,
      items: [
        "listen just like a native DOM event",
        "can call methods on parent"
      ]
    };
  }
};
</script>
