<template>
    <ListCard title="class and style binding" :items="items"/>
</template>

<script>
import { ListCard, Warning } from "../../components";

export default {
  name: "classStyle",
  components: {
    ListCard,
    Warning
  },
  data() {
    return {
      items: [
        "common to want dynamic classes, ids and styles",
        "all these are <strong>attributes</strong>",
        "works great with computed",
        "can also apply array of classes / styles"
      ]
    };
  }
};
</script>
