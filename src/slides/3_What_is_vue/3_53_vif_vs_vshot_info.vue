<template>
    <InfoCard :text="text"/>
</template>

<script>
import { InfoCard } from "../../components";
import { ES6_INLINE_STYLE_IMG_SRC } from "./const";

export default {
  name: "vIfVShow",
  components: {
    InfoCard
  },
  data() {
    return {
      ES6_INLINE_STYLE_IMG_SRC,
      text: ""
    };
  }
};
</script>
