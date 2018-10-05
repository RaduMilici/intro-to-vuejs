<template>
    <WarningCard :text="warningText"/>
</template>

<script>
import { WarningCard } from "../../components";

export default {
  name: "dataWarn",
  components: {
    WarningCard
  },
  data() {
    return {
      warningText: `Properties in data are only reactive if they existed when the instance was created.
        Adding properties after that will not trigger any view updates.`
    };
  }
};
</script>
