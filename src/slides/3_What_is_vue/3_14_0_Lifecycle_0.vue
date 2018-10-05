<template>
    <ImageCard title="creation hooks" :src="LIFECYCLE_1_IMG_SRC"/>
</template>

<script>
import { ImageCard } from "../../components";
import { LIFECYCLE_1_IMG_SRC } from "./const";

export default {
  name: "Lifecycle_0",
  components: {
    ImageCard
  },
  data() {
    return {
      LIFECYCLE_1_IMG_SRC,
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
