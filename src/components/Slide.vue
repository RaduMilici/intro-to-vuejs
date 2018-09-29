<template>
    <div class="slide__container" :style="{color, backgroundColor}">
      <slot></slot>
    </div>
</template>

<script>
import { theme } from "../assets/themes";

export default {
  name: "Slide",
  props: {
    color: {
      type: String,
      default: theme.primary
    },
    backgroundColor: {
      type: String,
      default: theme.background
    }
  }
};
</script>

<style scoped>
.slide__container {
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
