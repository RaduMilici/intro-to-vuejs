<template>
    <ImageCard title="one way data flow" max-height="300px" :src="ONE_WAY_DATA_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { ONE_WAY_DATA_IMG_SRC } from "./const";
export default {
  name: "componentsBasic",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      ONE_WAY_DATA_IMG_SRC,
      items: [
        "props form <strong>one-way-down</strong> binding between parent child",
        "when parent prop updates, will flow down to the child",
        "not other way around",
        "prevents child from accidentally mutating the parent"
      ]
    };
  }
};
</script>
