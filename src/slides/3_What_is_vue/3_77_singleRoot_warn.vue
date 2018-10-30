<template>
    <WarningCard :text="warningText"/>
</template>

<script>
import { WarningCard } from "../../components";

export default {
  name: "dataFunctionWarn",
  components: {
    WarningCard
  },
  data() {
    return {
      warningText: `
<img src="https://i.imgur.com/UIrwcm8.png" style="margin-top: 10px; border-radius: 5px">
<br>
Every component must have a <strong>single root element</strong>.
<br><br>
Wrap the template in a parent element, like a <code>&lt;div&gt;</code>.
<br><br>
You can't use <code>&lt;template&gt;</code> as a parent.
`
    };
  }
};
</script>
