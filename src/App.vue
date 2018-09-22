<template>
  <div class="app__container">
    <component :is="currentSlide"></component>
  </div>
</template>

<script>
import slides from "./slides";

export default {
  data() {
    return {
      slides,
      slideIndex: 0
    };
  },
  computed: {
    currentSlide() {
      return this.slides[this.slideIndex];
    }
  }
};
</script>

<style>
.app__container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}
</style>
