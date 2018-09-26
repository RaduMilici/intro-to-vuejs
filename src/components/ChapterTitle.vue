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
  font-size: 120px;
  font-weight: 200;
  color: #fff;
  user-select: none;
}
</style>
