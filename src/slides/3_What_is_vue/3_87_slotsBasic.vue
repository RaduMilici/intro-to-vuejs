<template>
    <ImageCard title="slot" max-height="300px" :src="SLOT_BASIC_IMG_SRC">
        <List :items="items"/>
    </ImageCard>
</template>

<script>
import { ImageCard, List } from "../../components";
import { SLOT_BASIC_IMG_SRC } from "./const";
export default {
  name: "componentsBasic",
  components: {
    ImageCard,
    List
  },
  data() {
    return {
      SLOT_BASIC_IMG_SRC,
      items: [
        "useful to pass content to a component",
        "on render, <code>&lt;slot&gt;</code> element will be replaced",
        "can contain any HTML and even components"
      ]
    };
  }
};
</script>
