<template>
    <Slide>
        <Card>
            <div>
                <div style="text-align: center">
                    <h2>How do I install it?</h2>
                </div>
                <ul>
                    <li>
                        script include
                        <br>
                        <code>
                            &lt;script src="lib/vue.js"&gt;&lt;/script&gt;
                        </code>
                    </li>
                    <li>
                        CDN
                        <br>
                        <code style="font-size: 2.5rem">
                            &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"&gt;&lt;/script&gt;
                        </code>
                    </li>
                    <li>
                        NPM (recommended for large scale apps)
                        <br>
                        <code>npm install vue</code>
                    </li>
                    <li>
                        CLI
                        <br>
                        <ul>
                            <li>
                                <span>official CLI for quickly scaffolding Single Page Applications</span>
                            </li>
                            <li>
                                <span>batteries-included setup for a modern frontend workflow</span>
                            </li>
                        </ul>
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
  name: "installation",
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
