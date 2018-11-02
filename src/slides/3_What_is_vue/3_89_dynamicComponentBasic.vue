<template>
    <ImageCard title="dynamic component" max-height="300px" :src="DYNAMIC_COMPONENT_BASIC_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { DYNAMIC_COMPONENT_BASIC_IMG_SRC } from "./const";
export default {
  name: "componentsBasic",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      DYNAMIC_COMPONENT_BASIC_IMG_SRC,
      items: [
        "dynamically switch between components",
        "<code>:is</code> special attribute",
        "use name of a registered component"
      ]
    };
  }
};
</script>
