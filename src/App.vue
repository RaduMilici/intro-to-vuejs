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
      slideIndex: 1
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
* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-family: "Source Sans Pro", sans-serif;
}
</style>

<style scoped>
.app__container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
