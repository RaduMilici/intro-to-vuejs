<template>
    <CodeView title="methods" :url="METHODS_VUE_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { METHODS_VUE_IFRAME_SRC } from "./const";

export default {
  name: "methodsCode",
  components: {
    CodeView
  },
  data() {
    return {
      METHODS_VUE_IFRAME_SRC
    };
  }
};
</script>
