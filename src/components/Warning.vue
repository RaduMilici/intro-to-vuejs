<template>
    <div class="warning">
        <div class="warning__sign">
            <div>
                &#9888;
            </div>
        </div>
        <div>
            <span>{{ text }}</span>
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
  display: flex;
  border: 1px solid orange;
  padding: 1rem;
  color: orange;
  font-size: 4.5rem;
  font-weight: 400;

  &__sign {
    width: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
