<template>
    <CodeView title="🔥 props bonus 🔥" :url="PROPS_BONUS_BASIC_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { PROPS_BONUS_BASIC_IFRAME_SRC } from "./const";

export default {
  name: "dataBindingCode",
  components: {
    CodeView
  },
  data() {
    return {
      PROPS_BONUS_BASIC_IFRAME_SRC
    };
  }
};
</script>
