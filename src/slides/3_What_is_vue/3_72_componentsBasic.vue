<template>
    <ImageCard title="component basics" max-height="300px" :src="COMPONENTS_BASIC_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { COMPONENTS_BASIC_IMG_SRC } from "./const";
export default {
  name: "componentsBasic",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      COMPONENTS_BASIC_IMG_SRC,
      items: [
        "just a Vue instances with a name",
        "a <strong>small</strong>, <strong>self-contained</strong> and <strong>reusable</strong> module",
        "tree of components used to build large-scale apps"
      ]
    };
  }
};
</script>
