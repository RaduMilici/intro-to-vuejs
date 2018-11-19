<template>
    <CodeView title="named slot" :url="SLOTS_NAMED_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { SLOTS_NAMED_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      SLOTS_NAMED_IFRAME_SRC
    };
  }
};
</script>
