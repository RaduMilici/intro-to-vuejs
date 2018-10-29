<template>
    <WarningCard :text="warningText"/>
</template>

<script>
import { WarningCard } from "../../components";

export default {
  name: "dataFunctionWarn",
  components: {
    WarningCard
  },
  data() {
    return {
      warningText: `<div style="text-align: center"><strong><code>data</code> must be a function</strong><br><br>
A component’s <code>data</code> must be a function, so that each instance can maintain an independent copy of the returned object.<br><br>
Otherwise, changing one object would affect the data of all other instances.</div>`
    };
  }
};
</script>
