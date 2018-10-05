<template>
    <div class="list-container">
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
h1 {
  font-size: 5rem;
  font-weight: 400;
  margin: 0;
}

li {
  font-size: 4.5rem;
}
.list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 4.5rem;
}

li:not(:first-child) {
  margin: 15px 0;
}
</style>
