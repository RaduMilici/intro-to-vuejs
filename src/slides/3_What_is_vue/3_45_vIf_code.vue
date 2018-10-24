<template>
    <CodeView title="v-if" :url="VIF_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { VIF_IFRAME_SRC } from "./const";

export default {
  name: "vIf_code",
  components: {
    CodeView
  },
  data() {
    return {
      VIF_IFRAME_SRC
    };
  }
};
</script>
