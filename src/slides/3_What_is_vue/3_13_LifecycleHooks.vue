<template>
    <ListCard title="lifecycle hooks" :items="items"/>
</template>

<script>
import { ListCard, Warning } from "../../components";

export default {
  name: "lifecycleHooks",
  components: {
    ListCard,
    Warning
  },
  data() {
    return {
      items: [
        "a Vue instance goes through some initialization steps",
        "set up data binding, compile HTML, append to DOM",
        "allow us to add logic at specific stages"
      ]
    };
  }
};
</script>
