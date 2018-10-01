<template>
    <Slide>
        <Card>
            <div :style="{textAlign: 'center'}">
                <div :style="warnStyle">
                    <h1>We assume beginner level knowledge of</h1>
                    <h1>⚠HTML, CSS, and JavaScript⚠</h1>
                </div>
                <p>If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step.</p>
                <p>Grasp the basics then come back!</p>
            </div>
        </Card>
    </Slide>
</template>

<script>
  import { Slide, Card, List, Button } from "../../components";
  import { theme } from "../../assets/themes";
  export default {
    name: "3_1_warning",
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
  }
</script>
