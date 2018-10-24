<template>
    <div class="list-container">
        <h1 v-if="title">{{ title }}</h1>
        <ul>
            <li v-for="item in items" :key="item">
                <span v-html="item"></span>
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
      default: null
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
  margin: 0 0 5rem 0;
}

ul {
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
  text-align: left;
}

li:not(:first-child) {
  margin: 15px 0;
}
</style>
