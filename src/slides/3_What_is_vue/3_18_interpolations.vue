<template>
    <Slide>
        <Card>
            <div>
                <div style="text-align: center">
                    <h2>interpolations</h2>
                </div>
                <ul>
                    <li>
                        text
                        <br>
                        <code>
                            <span v-html="vhtmlText"></span>
                        </code>
                    </li>

                    <li>
                        JS expression
                        <br>
                        <code>
                            <span v-html="expressionText"></span>
                        </code>
                    </li>

                    <li>
                        attributes
                        <br>
                        <code>
                            <span v-html="attributesText"></span>
                        </code>
                    </li>

                    <li>
                        raw HTML
                        <br>
                        (double mustaches interprets data as text, not HTML)
                        <br>
                        <code>
                            <span v-html="rawHtmlText"></span>
                        </code>
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
  data() {
    return {
      vhtmlText: "&lt;p&gt;{{ message }}&lt;/p&gt;",
      rawHtmlText: '&lt;p v-html="rawHtml"&gt;&lt;/p&gt;',
      attributesText: '&lt;p :class="dynamicClass"&gt&lt;/p&gt',
      expressionText: "&lt;p&gt;{{ ok ? 'YES' : 'NO' }}&lt;/p&gt;"
    };
  },
  computed: {
    warnStyle() {
      return { color: theme.warning };
    }
  }
};
</script>

<style>
li {
  font-size: 4.5rem;
}
li:not(:first-child) {
  margin: 25px 0;
}
</style>
