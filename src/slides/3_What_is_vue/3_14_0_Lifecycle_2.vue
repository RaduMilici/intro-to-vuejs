<template>
    <ImageCard title="destroy hooks" :src="LIFECYCLE_3_IMG_SRC"/>
</template>

<script>
import { ImageCard } from "../../components";
import { LIFECYCLE_3_IMG_SRC } from "./const";

export default {
  name: "Lifecycle_1",
  components: {
    ImageCard
  },
  data() {
    return {
      LIFECYCLE_3_IMG_SRC,
      items: [
        "new Vue()",
        "takes an options object",
        "complex Vue app = root Vue instance + tree of nested components",
        "Vue components are also Vue instances"
      ]
    };
  }
};
</script>
