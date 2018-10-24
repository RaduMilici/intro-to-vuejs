<template>
    <ImageCard title="v-if template" :src="V_IF_TEMPLATE_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { V_IF_TEMPLATE_IMG_SRC } from "./const";
export default {
  name: "vIfGroup",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      V_IF_TEMPLATE_IMG_SRC,
      items: [
        "toggle more than one element? 🤔",
        "use <strong>&lt;template&gt;</strong>, an invisible wrapper",
        "final result will not include the <strong>&lt;template&gt;</strong> element"
      ]
    };
  }
};
</script>
