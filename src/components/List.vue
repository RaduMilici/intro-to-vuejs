<template>
    <div>
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="item in items" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "List",
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
