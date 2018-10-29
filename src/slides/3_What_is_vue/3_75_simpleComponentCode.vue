<template>
    <CodeView title="my first component" :url="SIMPLE_COMPONENT_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { SIMPLE_COMPONENT_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      SIMPLE_COMPONENT_IFRAME_SRC
    };
  }
};
</script>
