<template>
    <WarningCard :text="warningText"/>
</template>

<script>
import { WarningCard } from "../../components";

export default {
  name: "xssAttack",
  components: {
    WarningCard
  },
  data() {
    return {
      warningText: `Dynamically rendering HTML can be very dangerous. It can lead to cross-site scripting (XSS) vulnerabilities. Use HTML interpolation on trusted content and never on user-provided content.`
    };
  }
};
</script>
