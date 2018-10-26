<template>
    <ListCard title="key 🔑" :items="items"/>
</template>

<script>
import { ListCard, Warning } from "../../components";

export default {
  name: "tooVerbose",
  components: {
    ListCard,
    Warning
  },
  data() {
    return {
      items: [
        "if an element changes, Vue re-renders all elements ",
        "give Vue a hint so it can track each node’s identity",
        "with key <strong>Vue re-renders only changed element</strong>",
        "reuse and reorder existing elements",
        "when possible, use the unique id of each item"
      ]
    };
  }
};
</script>
