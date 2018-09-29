<template>
    <button type="button" class="btn" :style="style" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
import { theme } from "../assets/themes";
const BUTTON_TYPES = ["primary", "success", "warning", "danger"];
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      validator(value) {
        return BUTTON_TYPES.indexOf(value) !== -1;
      }
    }
  },
  computed: {
    style() {
      return this.type
        ? {
            color: this.type === "primary" ? theme.background : theme.primary,
            backgroundColor: theme[this.type]
          }
        : null;
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 5px;
  padding: 1.5rem 2rem;
  font-size: 2rem;
  border: 0;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
}
</style>
