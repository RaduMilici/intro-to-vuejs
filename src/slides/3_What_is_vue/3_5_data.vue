<template>
    <ListCard title="data" :items="items"/>
</template>

<script>
import { ListCard, Warning } from "../../components";

export default {
  name: "vuedata",
  components: {
    ListCard,
    Warning
  },
  data() {
    return {
      items: [
        "properties in <code>data</code> added to Vue’s reactivity system",
        "when they change, the view will <q>react</q>"
      ]
    };
  }
};
</script>
