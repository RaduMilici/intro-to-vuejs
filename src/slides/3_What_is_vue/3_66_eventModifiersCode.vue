<template>
    <CodeView title="event modifiers" :url="EVENT_MOD_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { EVENT_MOD_IFRAME_SRC } from "./const";

export default {
  name: "eventModifiersCode",
  components: {
    CodeView
  },
  data() {
    return {
      EVENT_MOD_IFRAME_SRC
    };
  }
};
</script>
