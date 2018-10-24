<template>
    <ListCard title="inline object binding" :items="items"/>
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
        "can be too verbose",
        "doesn't have to be inline",
        "can use any source as long as it gets an object"
      ]
    };
  }
};
</script>
