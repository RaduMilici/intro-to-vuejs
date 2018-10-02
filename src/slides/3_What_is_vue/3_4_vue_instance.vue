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
        "Every Vue application starts by creating a new Vue instance.",
        "It takes an options object as a constructor argument.",
        "A Vue application consists of a root Vue instance created with new Vue organized into a tree of nested, reusable components.",
        "Vue components are also Vue instances, and so accept the same options object."
      ]
    };
  }
};
</script>
