<template>
    <ImageCard title="v-else-if" maxHeight="400px" :src="V_ELSE_IF_TEMPLATE_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { V_ELSE_IF_TEMPLATE_IMG_SRC } from "./const";
export default {
  name: "vElseIf",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      V_ELSE_IF_TEMPLATE_IMG_SRC,
      items: [
        "it's like an <code>else if</code> statement",
        "can be chained",
        "must follow a <code>v-if</code> or a <code>v-else-if</code>"
      ]
    };
  }
};
</script>
