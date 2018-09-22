<template>
    <div class="chapter-text">
        <h1>{{text}}</h1>
    </div>
</template>

<script>
export default {
  name: "ChapterTitle",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/abstracts/mixins.scss";

.chapter-text {
  @extend %text-outline;
  width: 100%;
  position: absolute;
  text-align: center;
  align-self: center;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 3.2em;
  color: #fff;
}
</style>
