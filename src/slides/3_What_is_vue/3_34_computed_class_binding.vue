<template>
    <CodeView title="computed object binding" :url="COMPUTED_CLASS_BINDING_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { COMPUTED_CLASS_BINDING_IFRAME_SRC } from "./const";

export default {
  name: "class_binding_code",
  components: {
    CodeView
  },
  data() {
    return {
      COMPUTED_CLASS_BINDING_IFRAME_SRC
    };
  }
};
</script>
