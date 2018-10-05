<template>
    <ListCard title="lifecycle hooks" :items="items"/>
</template>

<script>
import { ListCard, Warning } from "../../components";

export default {
  name: "lifecycleHooks2",
  components: {
    ListCard,
    Warning
  },
  data() {
    return {
      items: [
        "beforeCreate: before data observation and events",
        "created: events and data observation active",
        "beforeMount: template has been compiled",
        "mounted: used for fetching data, $el available",
        "beforeDestroy: you cleanup events, stop actions",
        "destroyed: component destroyed, events removed",
        "a few more hooks later on"
      ]
    };
  }
};
</script>
