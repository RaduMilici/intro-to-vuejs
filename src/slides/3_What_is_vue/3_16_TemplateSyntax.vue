<template>
    <ListCard :title="title" :items="items"/>
</template>

<script>
import { ListCard, Warning } from "../../components";

export default {
  name: "templateSyntax",
  components: {
    ListCard,
    Warning
  },
  data() {
    return {
      title: "{{ template syntax }}",
      items: [
        "HTML-based template syntax",
        "declaratively bind the DOM to the Vue instance’s data 🧐",
        "works great with reactivity system",
        "figures out minimal number of components to re-render",
        "<strong>interpolates</strong> between variables and <strong>{{ ... }}</strong>"
      ]
    };
  }
};
</script>
