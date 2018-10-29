<template>
    <CodeView title="key modifiers" :url="KEY_MODS_IFRAME_SRC"/>
</template>

<script>
import { CodeView } from "../../components";
import { KEY_MODS_IFRAME_SRC } from "./const";

export default {
  name: "keyModifiersCode",
  components: {
    CodeView
  },
  data() {
    return {
      KEY_MODS_IFRAME_SRC
    };
  }
};
</script>
