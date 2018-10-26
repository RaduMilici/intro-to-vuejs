<template>
    <CodeView title="v-for computed" :url="VFOR_COMPUTED_OBJ_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { VFOR_COMPUTED_OBJ_IFRAME_SRC } from "./const";

export default {
  name: "vElseIfCode",
  components: {
    CodeView
  },
  data() {
    return {
      VFOR_COMPUTED_OBJ_IFRAME_SRC
    };
  }
};
</script>
