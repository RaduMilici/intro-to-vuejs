<template>
    <CodeView title="dynamic component" :url="DYNAMIC_COMP_BASIC_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { DYNAMIC_COMP_BASIC_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      DYNAMIC_COMP_BASIC_IFRAME_SRC
    };
  }
};
</script>
