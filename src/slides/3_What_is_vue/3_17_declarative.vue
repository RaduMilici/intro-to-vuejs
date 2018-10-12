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
        "Declarative code focuses on building the logic of software without actually describing its flow. You are saying 'what', but not 'how'."
    };
  }
};
</script>

<style scoped>
</style>
