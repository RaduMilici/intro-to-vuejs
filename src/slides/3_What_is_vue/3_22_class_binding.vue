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
        "toggle <strong>active</strong> class based on truthiness of data prop <strong>isActive</strong>",
        "toggle multiple classes by having more props in object",
        "<strong>:class</strong> directive can co-exist with plain <strong>class</strong> attribute"
      ]
    };
  }
};
</script>

<style scoped>
</style>
