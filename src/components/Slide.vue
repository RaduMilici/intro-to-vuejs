<template>
    <div class="slide__container" :style="{backgroundColor}">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "Slide",
  props: {
    backgroundColor: {
      type: String,
      default: "#fff"
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
