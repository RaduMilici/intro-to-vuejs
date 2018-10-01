<template>
  <div class="app__container">
    <component :is="currentSlide"></component>
    <div class="button__container">
      <Button type="success" @click="changeSlide(-1)" :style="showButton('left')">&larr;</Button>
      <Button type="success" @click="changeSlide(1)" :style="showButton('right')">&rarr;</Button>
    </div>
  </div>
</template>

<script>
import { Button } from "./components";
import slides from "./slides";

export default {
  data() {
    return {
      slides,
      slideIndex: slides.length - 1
    };
  },
  components: {
    Button
  },
  computed: {
    currentSlide() {
      return this.slides[this.slideIndex];
    }
  },
  methods: {
    changeSlide(num) {
      const index = this.slideIndex + num;
      if (index >= 0 && index < this.slides.length) {
        this.slideIndex = index;
      }
    },
    showButton(position) {
      if (position === "left") {
        return this.slideIndex === 0 ? { visibility: "hidden" } : null;
      }
      if (position === "right") {
        return this.slideIndex === this.slides.length - 1
          ? { visibility: "hidden" }
          : null;
      }
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
  font-weight: 200;
}
</style>

<style scoped>
.app__container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button__container {
  position: absolute;
  align-self: flex-end;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
