<template>
    <CodeView title="props" :url="PROPS_BASIC_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { PROPS_BASIC_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      PROPS_BASIC_IFRAME_SRC
    };
  }
};
</script>
