<template>
    <div class="title">
        <span>{{text}}</span>
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

.title {
  @extend %text-outline;
  width: 100%;
  position: absolute;
  text-align: center;
  align-self: center;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 120px;
  font-weight: 200;
  color: #fff;
}
</style>
