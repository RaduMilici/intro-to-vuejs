<template>
    <Slide>
        <iframe class="slide-iframe" :src='slideUrl' width='100%' height='100%' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
    </Slide>
</template>

<script>
import { Slide } from "../../components";
import { slideUrl } from "./const";

export default {
  name: "Timeline",
  components: {
    Slide
  },
  data() {
    return {
      slideUrl
    };
  }
};
</script>

<style scoped>
.slide-iframe {
  position: absolute;
}
</style>
