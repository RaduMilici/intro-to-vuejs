<template>
    <CodeView title="interpolations" :url="INTERPOLATIONS_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { INTERPOLATIONS_IFRAME_SRC } from "./const";

export default {
  name: "Lifecycle_hooks_code",
  components: {
    CodeView
  },
  data() {
    return {
      INTERPOLATIONS_IFRAME_SRC
    };
  }
};
</script>
