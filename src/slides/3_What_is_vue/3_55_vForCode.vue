<template>
    <CodeView title="v-for" :url="VFOR_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { VFOR_IFRAME_SRC } from "./const";

export default {
  name: "vElseIfCode",
  components: {
    CodeView
  },
  data() {
    return {
      VFOR_IFRAME_SRC
    };
  }
};
</script>
