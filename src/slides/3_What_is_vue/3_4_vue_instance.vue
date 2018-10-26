<template>
    <ListCard title="the Vue instance" :items="items"/>
</template>

<script>
import { ListCard } from "../../components";

export default {
  name: "vue_instance",
  components: {
    ListCard
  },
  data() {
    return {
      items: [
        "<code>new Vue()</code>",
        "takes an options object",
        "complex Vue app = root Vue instance + tree of components",
        "Vue components are also Vue instances"
      ]
    };
  }
};
</script>
