<template>
    <CodeView title="@click inline method" :url="CLICK_INLINE_HANDLER_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { CLICK_INLINE_HANDLER_IFRAME_SRC } from "./const";

export default {
  name: "vElseIfCode",
  components: {
    CodeView
  },
  data() {
    return {
      CLICK_INLINE_HANDLER_IFRAME_SRC
    };
  }
};
</script>
