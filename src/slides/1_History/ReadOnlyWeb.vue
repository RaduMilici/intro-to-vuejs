<template>
    <Card column :style="{textAlign: 'center'}">
        <h1>The first iteration of the web represents the web 1.0, which, according to Berners-Lee, is the “read-only web.”</h1>
        <div :style="{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}">
            <img :src="IE_5_LOGO_URL">
            <img :src="DANCING_BABY_URL">
            <img :src="UNDER_CONSTRUCTION_URL">
            <img :src="IE_5_WIKIPEDIA_URL">
        </div>
        <br>
        <Button type="success" @click="$emit('click')">NEXT</Button>
    </Card>
</template>

<script>
import { Slide, Card, List, Button } from "../../components";
import {
  IE_5_WIKIPEDIA_URL,
  IE_5_LOGO_URL,
  DANCING_BABY_URL,
  UNDER_CONSTRUCTION_URL
} from "./const";
export default {
  name: "ReadOnlyWeb",
  components: {
    Slide,
    Card,
    List,
    Button
  },
  data() {
    return {
      IE_5_WIKIPEDIA_URL,
      IE_5_LOGO_URL,
      DANCING_BABY_URL,
      UNDER_CONSTRUCTION_URL
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 4rem;
}
</style>
