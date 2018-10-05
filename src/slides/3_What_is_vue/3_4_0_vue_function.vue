<template>
    <ImageCard title="Vue is a constructor function" :src="VUE_FUNCTION_IMG_SRC"/>
</template>

<script>
import { ImageCard } from "../../components";
import { VUE_FUNCTION_IMG_SRC } from "./const";

export default {
  name: "vue_instance",
  components: {
    ImageCard
  },
  data() {
    return {
      VUE_FUNCTION_IMG_SRC,
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
