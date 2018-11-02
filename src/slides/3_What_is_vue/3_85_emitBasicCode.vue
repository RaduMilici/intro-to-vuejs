<template>
    <CodeView title="custom events" :url="EMIT_BASIC_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { EMIT_BASIC_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      EMIT_BASIC_IFRAME_SRC
    };
  }
};
</script>
