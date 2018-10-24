<template>
    <ListCard title="conditional rendering" :items="items"/>
</template>

<script>
import { ListCard, Warning } from "../../components";

export default {
  name: "conditionalRendering",
  components: {
    ListCard,
    Warning
  },
  data() {
    return {
      items: [
        "render only the parts you need",
        "fully dynamic and reactive",
        "relates to state of the application (more on this later)"
      ]
    };
  }
};
</script>
