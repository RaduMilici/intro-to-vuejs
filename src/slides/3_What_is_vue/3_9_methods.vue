<template>
    <ListCard title="methods" :items="items"/>
</template>

<script>
import { ListCard, Warning } from "../../components";

export default {
  name: "methods",
  components: {
    ListCard,
    Warning
  },
  data() {
    return {
      items: [
        "functions stored in <code>methods</code> object",
        "handle most of the logic",
        "can be called from template or script",
        "work closely with events (more on that later)"
      ]
    };
  }
};
</script>
