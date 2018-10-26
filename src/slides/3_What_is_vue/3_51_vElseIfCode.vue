<template>
    <CodeView title="v-else-if" :url="VELSEIF_TEMPLATE_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { VELSEIF_TEMPLATE_IFRAME_SRC } from "./const";

export default {
  name: "vElseIfCode",
  components: {
    CodeView
  },
  data() {
    return {
      VELSEIF_TEMPLATE_IFRAME_SRC
    };
  }
};
</script>
