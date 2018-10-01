<template>
    <Slide>
        <Card>
            <div>
                <div style="text-align: center">
                    <h2>How do I install it?</h2>
                </div>
                <ul>
                    <li>
                        direct &lt;script&gt; include
                        <br>
                        <code>
                            &lt;script src="lib/vue.js"&gt;&lt;/script&gt;
                        </code>
                    </li>
                    <li>
                        CDN (use a specific version number that you can update manually)
                        <br>
                        <code style="font-size: 2rem">
                            &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"&gt;&lt;/script&gt;
                        </code>
                    </li>
                    <li>
                        NPM (the recommended method when building large scale applications)
                        <br>
                        <code>npm install vue</code>
                    </li>
                    <li>
                        CLI
                        <br>
                        <span>Vue provides an official CLI for quickly scaffolding ambitious Single Page Applications.</span>
                        <br>
                        <span>It provides batteries-included build setups for a modern frontend workflow.</span>
                    </li>
                </ul>
                <code></code>
            </div>
        </Card>
    </Slide>
</template>

<script>
import { Slide, Card, List, Button } from "../../components";
import { theme } from "../../assets/themes";
export default {
  name: "3_2_installation",
  components: {
    Slide,
    Card,
    List,
    Button
  },
  computed: {
    warnStyle() {
      return { color: theme.warning };
    }
  }
};
</script>

<style>
li:not(:first-child) {
  margin: 25px 0;
}
</style>
