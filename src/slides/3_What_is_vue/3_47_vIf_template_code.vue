<template>
    <CodeView title="v-if template" :url="VIF_TEMPLATE_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { VIF_TEMPLATE_IFRAME_SRC } from "./const";

export default {
  name: "vIfTemplateCode",
  components: {
    CodeView
  },
  data() {
    return {
      VIF_TEMPLATE_IFRAME_SRC
    };
  }
};
</script>
