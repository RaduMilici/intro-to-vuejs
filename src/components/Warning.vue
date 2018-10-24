<template>
    <div class="warning">
        <div class="warning__sign">
            <div>
                ⚠️
            </div>
        </div>
        <div>
            <span v-html="text"></span>
        </div>
    </div>
</template>

<script>
export default {
  name: "Warning",
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.warning {
  margin: 0 2rem;
  display: flex;
  border: 1px solid orange;
  padding: 1rem;
  color: orange;
  font-size: 4.5rem;
  font-weight: 400;

  &__sign {
    width: 25rem;
    display: flex;
    margin: 0 2rem;
    font-size: 8.5rem;
    justify-content: center;
    align-items: center;
  }
}
</style>
