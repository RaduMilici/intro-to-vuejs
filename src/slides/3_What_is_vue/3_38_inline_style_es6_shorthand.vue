<template>
    <InfoCard :text="text">
        <div>
            <img style="width: 100%" :src="ES6_INLINE_STYLE_IMG_SRC">
        </div>
    </InfoCard>
</template>

<script>
import { InfoCard } from "../../components";
import { ES6_INLINE_STYLE_IMG_SRC } from "./const";

export default {
  name: "es6InlineStyle",
  components: {
    InfoCard
  },
  data() {
    return {
      ES6_INLINE_STYLE_IMG_SRC,
      text: "object property value shorthand works"
    };
  }
};
</script>
