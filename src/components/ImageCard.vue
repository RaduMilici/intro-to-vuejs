<template>
    <CardSlide>
        <div class="container">
            <h1>{{ title }}</h1>
            <img :style="{maxHeight}" :src="src">
            <slot></slot>
        </div>
    </CardSlide>
</template>

<script>
import CardSlide from "./CardSlide";

export default {
  name: "ImageCard",
  components: {
    CardSlide
  },
  props: {
    title: {
      type: String
    },
    src: {
      type: String
    },
    maxHeight: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped>
img {
  border-radius: 5px;
  max-width: 100%;
  max-height: 75vh;
  width: auto;
  height: auto;
}
.container {
  text-align: center;
}
h1 {
  font-size: 5rem;
  font-weight: 400;
  margin: 0 0 10px 0;
}
</style>
