<template>
    <Slide>
        <Card>
            <div class="code-view">
                <h2>{{ title }}</h2>
                <iframe :src="url" :style="IFRAME_STYLE" :sandbox="IFRAME_SANDBOX"></iframe>
            </div>
        </Card>
    </Slide>
</template>

<script>
import { Slide, Card, List } from "../components";
import { IFRAME_SANDBOX, IFRAME_STYLE } from "../slides/3_What_is_vue/const";

export default {
  name: "CodeView",
  components: {
    Slide,
    Card,
    List
  },
  props: {
    title: {
      type: String
    },
    url: {
      type: String
    }
  },
  data() {
    return {
      IFRAME_SANDBOX,
      IFRAME_STYLE
    };
  }
};
</script>

<style scoped>
h2 {
  margin-top: 0;
}
.code-view {
  text-align: center;
  width: 100%;
}
</style>
