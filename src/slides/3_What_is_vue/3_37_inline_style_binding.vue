<template>
    <ImageCard title="inline style binding" :src="DYNAMIC_INLINE_STYLE_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { DYNAMIC_INLINE_STYLE_IMG_SRC } from "./const";
export default {
  name: "inlineStyleBinding",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      DYNAMIC_INLINE_STYLE_IMG_SRC,
      items: [
        "looks like CSS, but is a JavaScript object",
        "use either camelCase or kebab-case (with quotes)",
        "also works well with data / computed"
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
