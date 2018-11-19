<template>
    <CodeView title="prop validation" :url="PROPS_VALIDATION_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { PROPS_VALIDATION_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      PROPS_VALIDATION_IFRAME_SRC
    };
  }
};
</script>
