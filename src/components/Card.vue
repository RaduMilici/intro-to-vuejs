<template>
    <div class="card__container" :style="containerStyles">
        <div class="card" :style="cardStyles">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { theme } from "../assets/themes";

const TRANSPARENT_OPACITY = 0.9;
const SMALL_WIDTH = "40%";
const NORMAL_WIDTH = "80%";
const POSITIONS = ["left", "right", "top", "bottom", "center"];

export default {
  name: "Card",
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    column: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      validator(value) {
        return POSITIONS.indexOf(value) !== -1;
      }
    }
  },
  computed: {
    cardStyles() {
      return {
        backgroundColor: theme.background,
        border: `1px solid ${theme.primary}`,
        opacity: this.transparent ? TRANSPARENT_OPACITY : 1,
        width: this.small ? SMALL_WIDTH : NORMAL_WIDTH,
        flexDirection: this.column ? "column" : "row"
      };
    },
    containerStyles() {
      let justifyContent;
      let alignItems;

      switch (this.position) {
        case "left":
          justifyContent = "flex-start";
          break;
        case "right":
          justifyContent = "flex-end";
          break;
        case "top":
          alignItems = "flex-start";
          break;
        case "bottom":
          alignItems = "flex-end";
          break;
        case "center":
        default:
          justifyContent = "center";
          alignItems = "center";
      }

      return { justifyContent, alignItems };
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
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
