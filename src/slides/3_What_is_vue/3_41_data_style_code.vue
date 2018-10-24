<template>
    <CodeView title="data style binding" :url="DATA_STYLE_BINDING_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { DATA_STYLE_BINDING_IFRAME_SRC } from "./const";

export default {
  name: "dataStyle",
  components: {
    CodeView
  },
  data() {
    return {
      DATA_STYLE_BINDING_IFRAME_SRC
    };
  }
};
</script>
