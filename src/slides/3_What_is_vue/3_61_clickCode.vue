<template>
    <CodeView title="@click" :url="CLICK_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { CLICK_IFRAME_SRC } from "./const";

export default {
  name: "vElseIfCode",
  components: {
    CodeView
  },
  data() {
    return {
      CLICK_IFRAME_SRC
    };
  }
};
</script>
