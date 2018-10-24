<template>
    <ListCard title="inline styles binding" :items="items"/>
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
        "ok if we want a simple effect 👌",
        "don't overuse it",
        "also doesn't have to be inline",
        "can use any source as long as it gets an object"
      ]
    };
  }
};
</script>
