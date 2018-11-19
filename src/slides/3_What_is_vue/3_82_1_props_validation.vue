<template>
    <ImageCard title="prop validation" max-height="630px" :src="PROP_VALIDATION_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { PROP_VALIDATION_IMG_SRC } from "./const";
export default {
  name: "componentsBasic",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      PROP_VALIDATION_IMG_SRC,
      items: []
    };
  }
};
</script>
