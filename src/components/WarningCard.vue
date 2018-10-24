<template>
    <CardSlide width="70%">
        <Warning :text="text"/>
    </CardSlide>
</template>

<script>
import CardSlide from "./CardSlide";
import Warning from "./Warning";

export default {
  name: "WarningCard",
  components: {
    CardSlide,
    Warning
  },
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style scoped>
</style>
