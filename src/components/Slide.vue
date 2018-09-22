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
  position: relative;
  height: 90%;
  width: 95%;
  border-radius: 15px;
  overflow: hidden;
}
</style>
