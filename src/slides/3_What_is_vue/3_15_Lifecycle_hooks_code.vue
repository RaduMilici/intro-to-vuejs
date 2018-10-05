<template>
    <CodeView title="lifecycle hooks" :url="LIFECYCLE_HOOKS_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { LIFECYCLE_HOOKS_IFRAME_SRC } from "./const";

export default {
  name: "Lifecycle_hooks_code",
  components: {
    CodeView
  },
  data() {
    return {
      LIFECYCLE_HOOKS_IFRAME_SRC
    };
  }
};
</script>
