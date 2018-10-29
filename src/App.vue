<template>
  <div class="app__container">
    <!--<component :is="currentSlide"></component>-->
    <router-view></router-view>
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
      slideIndex: null
    };
  },
  components: {
    Button
  },
  computed: {
    currentSlideNum() {
      return parseInt(this.$route.path.substr(1));
    }
  },
  methods: {
    changeSlide(num) {
      const index = this.slideIndex + num;
      if (index >= 0 && index < this.slides.length) {
        this.slideIndex = index;
        this.$router.push(`/${index}`);
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
  },
  mounted() {
    this.slideIndex = this.currentSlideNum || 0;
    this.$router.push(`/${this.slideIndex}`);
  },
  watch: {
    $route: {
      handler: function() {
        this.slideIndex = this.currentSlideNum;
      },
      deep: true
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
  overflow: hidden;
}
h1 {
  font-size: 5rem;
  font-weight: 400;
  margin: 0;
}
ul {
  list-style-type: circle;
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
  pointer-events: none;
  position: absolute;
  align-self: flex-end;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
