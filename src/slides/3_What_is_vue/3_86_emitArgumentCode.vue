<template>
    <CodeView title="custom events passing data" :url="EMIT_ARGUMENT_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { EMIT_ARGUMENT_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      EMIT_ARGUMENT_IFRAME_SRC
    };
  }
};
</script>
