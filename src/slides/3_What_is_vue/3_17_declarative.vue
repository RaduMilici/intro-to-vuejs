<template>
    <InfoCard :text="text"/>
</template>

<script>
import { InfoCard } from "../../components";
export default {
  name: "declarative",
  components: {
    InfoCard
  },
  data() {
    return {
      text:
        "Declarative code focuses on building the logic of software without actually describing its flow. </br></br>You are saying <strong>'what'</strong>, but not <strong>'how'</strong>."
    };
  }
};
</script>

<style scoped>
</style>
