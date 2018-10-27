<template>
    <CodeView title="@click handler" :url="CLICK_HANDLER_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { CLICK_HANDLER_IFRAME_SRC } from "./const";

export default {
  name: "vElseIfCode",
  components: {
    CodeView
  },
  data() {
    return {
      CLICK_HANDLER_IFRAME_SRC
    };
  }
};
</script>
