<template>
    <CodeView title="v-else template" :url="VELSE_TEMPLATE_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { VELSE_TEMPLATE_IFRAME_SRC } from "./const";

export default {
  name: "vElseTemplateCode",
  components: {
    CodeView
  },
  data() {
    return {
      VELSE_TEMPLATE_IFRAME_SRC
    };
  }
};
</script>
