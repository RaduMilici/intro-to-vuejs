<template>
    <CodeView title="external template" :url="SIMPLE_COMPONENT_EXTERNAL_TEMPLATE_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { SIMPLE_COMPONENT_EXTERNAL_TEMPLATE_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      SIMPLE_COMPONENT_EXTERNAL_TEMPLATE_IFRAME_SRC
    };
  }
};
</script>
