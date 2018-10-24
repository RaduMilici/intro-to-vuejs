<template>
    <ListCard title="🔥 lifecycle hooks bonus 🔥" :items="items"/>
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
        "<strong>beforeCreate</strong>: before data observation and events",
        "✅ <strong>created</strong>: events and data observation active",
        "<strong>beforeMount</strong>: template has been compiled",
        "✅ <strong>mounted</strong>: used for fetching data, $el available",
        "✅ <strong>beforeDestroy</strong>: you cleanup events, stop actions",
        "<strong>destroyed</strong>: component destroyed, events removed",
        "more hooks later on"
      ]
    };
  }
};
</script>
