<template>
    <CodeView title="inline style binding" :url="INLINE_STYLE_BINDING_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { INLINE_STYLE_BINDING_IFRAME_SRC } from "./const";

export default {
  name: "inlineStyleBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      INLINE_STYLE_BINDING_IFRAME_SRC
    };
  }
};
</script>
