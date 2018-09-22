<template>
    <Slide background-color="#335378">
        <ChapterTitle text="intro to Vue.js"/>
        <Logo3D/>
    </Slide>
</template>

<script>
import { ChapterTitle, Slide } from "../../components";
import Logo3D from "./Logo3D";

export default {
  name: "Welcome",
  components: {
    Slide,
    ChapterTitle,
    Logo3D
  }
};
</script>
