<template>
    <div class="warning">
        <div class="warning__sign">
            <div>
                🧐
            </div>
        </div>
        <div>
            <slot></slot>
            <span v-if="text" v-html="text"></span>
        </div>
    </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.warning {
  display: flex;
  border: 1px solid orange;
  padding: 1rem;
  color: orange;
  font-size: 4.5rem;
  font-weight: 400;
  max-width: 100%;

  &__sign {
    width: 25rem;
    margin: 0 2rem;
    font-size: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
