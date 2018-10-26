<template>
    <ImageCard title="v-for objects" max-height="400px" :src="V_FOR_OBJ_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { V_FOR_OBJ_IMG_SRC } from "./const";
export default {
  name: "vIf",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      V_FOR_OBJ_IMG_SRC,
      items: [
        "access the properties of an object",
        "optional second argument for index of current item"
      ]
    };
  }
};
</script>
