<template>
    <ImageCard title="array binding" :src="DYNAMIC_STYLE_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { DYNAMIC_STYLE_IMG_SRC } from "./const";
export default {
  name: "arrayClassBinding",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      DYNAMIC_STYLE_IMG_SRC,
      items: [
        "pass an array to <strong>:class</strong> to apply a list of classes",
        "can use object syntax inside array syntax"
      ]
    };
  }
};
</script>

<style scoped>
</style>
