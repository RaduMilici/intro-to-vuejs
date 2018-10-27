<template>
    <ImageCard title="v-for" max-height="400px" :src="V_FOR_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { V_FOR_IMG_SRC } from "./const";
export default {
  name: "vIf",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      V_FOR_IMG_SRC,
      items: [
        "renders a list of elements based on an array",
        "<code>name</code> is the iterated element's alias",
        "<code>frameworks</code> is the array"
      ]
    };
  }
};
</script>
