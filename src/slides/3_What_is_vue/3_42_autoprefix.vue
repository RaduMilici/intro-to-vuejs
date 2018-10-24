<template>
    <InfoCard :text="text"/>
</template>

<script>
import { InfoCard } from "../../components";
import { ES6_INLINE_STYLE_IMG_SRC } from "./const";

export default {
  name: "autoprefix",
  components: {
    InfoCard
  },
  data() {
    return {
      ES6_INLINE_STYLE_IMG_SRC,
      text:
        "Using a CSS property that requires vendor prefixes in <strong>:style</strong>?</br></br>Vue will automatically detect and add appropriate prefixes.</br></br>display: flex;</br>display: -webkit-box;</br>display: -ms-flexbox;</br>"
    };
  }
};
</script>
