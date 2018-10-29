<template>
    <CodeView title="🔥 data binding bonus 🔥" :url="DATABIND2_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { DATABIND2_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode2",
  components: {
    CodeView
  },
  data() {
    return {
      DATABIND2_IFRAME_SRC
    };
  }
};
</script>
