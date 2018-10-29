<template>
    <ListCard title="key modifiers" :items="items"/>
</template>

<script>
import { ListCard, Warning } from "../../components";

export default {
  name: "keyModifiers",
  components: {
    ListCard,
    Warning
  },
  data() {
    return {
      items: [
        "<code>.enter</code>",
        "<code>.tab</code>",
        "<code>.delete</code> (captures both “Delete” and “Backspace” keys)",
        "<code>.esc</code>",
        "<code>.space</code>",
        "<code>.up</code> / <code>.down</code> / <code>.left</code> / <code>.right</code>",
        "any key exposed in <code>KeyboardEvent.key</code>"
      ]
    };
  }
};
</script>
