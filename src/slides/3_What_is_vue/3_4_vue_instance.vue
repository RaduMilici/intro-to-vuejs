<template>
    <ImageCard title="the Vue instance" max-height="300px" :src="VUE_INSTANCE_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { VUE_INSTANCE_IMG_SRC } from "./const";

export default {
  name: "vue_instance",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      VUE_INSTANCE_IMG_SRC,
      items: [
        "takes an options object",
        "<code>el</code>: an element's selector (for mounting)",
        "interacts with that element's HTML"
      ]
    };
  }
};
</script>
