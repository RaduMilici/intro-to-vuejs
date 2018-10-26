<template>
    <CodeView title="v-for objects" :url="VFOR_OBJ_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { VFOR_OBJ_IFRAME_SRC } from "./const";

export default {
  name: "vElseIfCode",
  components: {
    CodeView
  },
  data() {
    return {
      VFOR_OBJ_IFRAME_SRC
    };
  }
};
</script>
