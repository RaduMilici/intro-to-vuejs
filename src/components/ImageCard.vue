<template>
    <CardSlide>
        <div class="container">
            <h1>{{ title }}</h1>
            <img :src="src">
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
  margin: 0;
}
</style>
