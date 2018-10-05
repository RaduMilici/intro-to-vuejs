<template>
    <CodeView title="computed properties" :url="COMPUTED_VUE_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { COMPUTED_VUE_IFRAME_SRC } from "./const";

export default {
  name: "computedVsMethodsCode",
  components: {
    CodeView
  },
  data() {
    return {
      COMPUTED_VUE_IFRAME_SRC
    };
  }
};
</script>
