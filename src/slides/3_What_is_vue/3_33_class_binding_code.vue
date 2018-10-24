<template>
    <CodeView title="inline object binding" :url="OBJECT_CLASS_BINDING_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { OBJECT_CLASS_BINDING_IFRAME_SRC } from "./const";

export default {
  name: "class_binding_code",
  components: {
    CodeView
  },
  data() {
    return {
      OBJECT_CLASS_BINDING_IFRAME_SRC
    };
  }
};
</script>
