<template>
    <CardSlide>
        <Info :text="text">
            <slot></slot>
        </Info>
    </CardSlide>
</template>

<script>
import CardSlide from "./CardSlide";
import Info from "./Info";

export default {
  name: "InfoCard",
  components: {
    CardSlide,
    Info
  },
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style scoped>
</style>
