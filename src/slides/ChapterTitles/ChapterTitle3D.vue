<template>
    <Slide background-color="#000">
        <ChapterTitle :text="title"/>
        <Logo3D/>
    </Slide>
</template>

<script>
import { ChapterTitle, Slide } from "../../components";
import Logo3D from "./../0_Welcome/Logo3D";

export default {
  name: "ChapterTitle3D",
  components: {
    Slide,
    ChapterTitle,
    Logo3D
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
