<template>
    <CodeView title="data binding" :url="DATABIND_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { DATABIND_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      DATABIND_IFRAME_SRC
    };
  }
};
</script>
