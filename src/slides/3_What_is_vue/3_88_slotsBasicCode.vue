<template>
    <CodeView title="slot" :url="SLOTS_BASIC_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { SLOTS_BASIC_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      SLOTS_BASIC_IFRAME_SRC
    };
  }
};
</script>
