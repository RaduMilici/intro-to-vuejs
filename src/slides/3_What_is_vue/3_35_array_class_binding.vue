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
        "pass an array to <code>:class</code> to apply a list of classes",
        "will render the value of those fields",
        "can use object syntax inside array syntax"
      ]
    };
  }
};
</script>

<style scoped>
</style>
