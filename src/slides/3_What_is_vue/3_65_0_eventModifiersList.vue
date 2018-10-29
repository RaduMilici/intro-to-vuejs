<template>
    <ListCard title="event modifiers" :items="items"/>
</template>

<script>
import { ListCard, Warning } from "../../components";

export default {
  name: "eventModifiersList",
  components: {
    ListCard,
    Warning
  },
  data() {
    return {
      items: [
        "<strong>stop</strong>: don't bubble event to parent elements",
        "<strong>prevent</strong>: stops default action",
        "<strong>capture</strong>: event is captured by the outermost element",
        "<strong>self</strong>: only trigger if target is the element itself, not child",
        "<strong>once</strong>: listener removed when it triggers for the first time",
        "<strong>passive</strong>: provide major performance boost to scrolling"
      ]
    };
  }
};
</script>
