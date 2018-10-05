<template>
    <CodeView title="computed VS methods" :url="COMPUTED_VS_METHODS_VUE_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { COMPUTED_VS_METHODS_VUE_IFRAME_SRC } from "./const";

export default {
  name: "computedVsMethodsCode",
  components: {
    CodeView
  },
  data() {
    return {
      COMPUTED_VS_METHODS_VUE_IFRAME_SRC
    };
  }
};
</script>
