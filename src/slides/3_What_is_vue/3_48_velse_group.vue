<template>
    <ImageCard title="v-else template" maxHeight="400px" :src="V_ELSE_TEMPLATE_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { V_ELSE_TEMPLATE_IMG_SRC } from "./const";
export default {
  name: "vIfGroup",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      V_ELSE_TEMPLATE_IMG_SRC,
      items: [
        "it's like an else statement directive",
        "must immediately follow a <strong>v-if</strong> or a <strong>v-else-if</strong>"
      ]
    };
  }
};
</script>
