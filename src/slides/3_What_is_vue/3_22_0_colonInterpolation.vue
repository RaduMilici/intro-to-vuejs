<template>
    <ImageCard title="colon interpolation" max-height="300px" :src="COLON_INTERPOLATION_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { COLON_INTERPOLATION_IMG_SRC } from "./const";
export default {
  name: "inlineStyleBinding",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      COLON_INTERPOLATION_IMG_SRC,
      items: [
        "Vue only evaluates expressions if attributes prefixed with <code>:</code>",
        "without a <code>:</code> values are evaluated as strings",
        "same rule for component's props (more later)"
      ]
    };
  },
  created() {
    console.log(this);
  }
};
</script>

<style scoped>
</style>
