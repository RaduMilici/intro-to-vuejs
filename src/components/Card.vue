<template>
    <div class="card__container">
        <div class="card" :style="styles">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { theme } from "../assets/themes";

const TRANSPARENT_OPACITY = 0.9;

export default {
  name: "Card",
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    column: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styles() {
      return {
        backgroundColor: theme.background,
        border: `3px solid ${theme.color}`,
        opacity: this.transparent ? TRANSPARENT_OPACITY : 1,
        flexDirection: this.column ? 'column' : 'row'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 4rem;
    overflow: auto;

  &__container {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
