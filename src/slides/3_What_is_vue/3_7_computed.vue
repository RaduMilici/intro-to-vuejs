<template>
    <ListCard title="computed properties" :items="items"/>
</template>

<script>
import { ListCard, Warning } from "../../components";

export default {
  name: "computed",
  components: {
    ListCard,
    Warning
  },
  data() {
    return {
      items: [
        "functions stored in <code>computed</code> object",
        "for complex logic, use a computed property",
        "cached based on their dependencies",
        "only re-evaluate when dependencies have changed"
      ]
    };
  }
};
</script>
