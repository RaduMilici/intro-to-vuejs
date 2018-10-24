<template>
    <CodeView title="array binding" :url="ARRAY_CLASS_BINDING_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { ARRAY_CLASS_BINDING_IFRAME_SRC } from "./const";

export default {
  name: "arrayClassBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      ARRAY_CLASS_BINDING_IFRAME_SRC
    };
  }
};
</script>
