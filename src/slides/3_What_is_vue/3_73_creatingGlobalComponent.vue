<template>
    <ImageCard title="my first component" max-height="300px" :src="FIRST_COMPONENT_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { FIRST_COMPONENT_IMG_SRC } from "./const";
export default {
  name: "componentsBasic",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      FIRST_COMPONENT_IMG_SRC,
      items: [
        "has a name",
        "<code>el</code> only needed on root instance",
        "can have <code>data</code>, <code>computed</code>, <code>methods</code>, <code>watch</code>",
        "<code>template</code> interacts with Vue just as before"
      ]
    };
  }
};
</script>
