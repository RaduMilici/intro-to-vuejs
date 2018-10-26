<template>
    <ImageCard title="object binding" :src="DYNAMIC_CLASS_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { DYNAMIC_CLASS_IMG_SRC } from "./const";
export default {
  name: "ObjectBinding",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      DYNAMIC_CLASS_IMG_SRC,
      items: [
        "toggle <code>active</code> class based on truthiness of <code>isActive</code>",
        "toggle multiple classes by having more props in object",
        "<code>:class</code> directive can co-exist with plain <code>class</code> attribute"
      ]
    };
  }
};
</script>

<style scoped>
</style>
