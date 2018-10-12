<template>
    <ListCard title="computed VS methods" :items="items"/>
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
        "both produce the same result? 🤔",
        "remember: computed properties are cached",
        "only re-evaluate when dependencies have changed",
        "methods ALWAYS run when a re-render happens",
        "methods can receive arguments, computed can't"
      ]
    };
  }
};
</script>
