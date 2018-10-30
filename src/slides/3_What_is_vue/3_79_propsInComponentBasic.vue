<template>
    <ImageCard title="props" max-height="300px" :src="PROPS_IN_COMPONENT_BASIC_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { PROPS_IN_COMPONENT_BASIC_IMG_SRC } from "./const";
export default {
  name: "componentsBasic",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      PROPS_IN_COMPONENT_BASIC_IMG_SRC,
      items: [
        "custom attributes defined inside a component",
        "value passed as prop &rArr; becomes property of component"
      ]
    };
  }
};
</script>
