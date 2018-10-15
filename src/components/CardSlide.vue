<template>
    <Slide>
        <Card :width="width">
            <slot></slot>
        </Card>
    </Slide>
</template>

<script>
import Slide from "./Slide";
import Card from "./Card";

export default {
  name: "CardSlide",
  components: {
    Slide,
    Card
  },
  props: {
    title: {
      type: String
    },
    width: {
      type: String,
      default: ""
    },
    items: {
      type: Array
    }
  }
};
</script>

<style scoped>
</style>
