<template>
    <CodeView title="My first Vue app 🍼👶" :url="FIRST_VUE_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { FIRST_VUE_IFRAME_SRC } from "./const";

export default {
  name: "first_app",
  components: {
    CodeView
  },
  data() {
    return {
      FIRST_VUE_IFRAME_SRC
    };
  }
};
</script>
