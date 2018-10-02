<template>
    <Slide>
        <Card>
            <div>
                <List :title="title" :items="items"/>
            </div>
        </Card>
    </Slide>
</template>

<script>
  import Slide from './Slide';
  import Card from './Card';
  import List from './List';
  import Button from './Button';

  export default {
    name: "ListCard",
    components: {
      Slide,
      Card,
      List,
      Button
    },
    props: {
      title: {
        type: String
      },
      items: {
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>