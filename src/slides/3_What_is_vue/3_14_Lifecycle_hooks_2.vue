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
        "<code>beforeCreate</code>: before data observation and events",
        "✅ <code>created</code>: events and data observation active",
        "<code>beforeMount</code>: template has been compiled",
        "✅ <code>mounted</code>: used for fetching data, $el available",
        "✅ <code>beforeDestroy</code>: you cleanup events, stop actions",
        "<code>destroyed</code>: component destroyed, events removed",
        "more hooks later on"
      ]
    };
  }
};
</script>
