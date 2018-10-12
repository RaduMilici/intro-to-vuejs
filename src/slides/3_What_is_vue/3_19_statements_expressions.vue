<template>
    <InfoCard>
        <ul :style="style">
            <li>
                ✅ expressions
                <br>
                <code>
                    <span v-html="expression1"></span>
                </code>
                <br>
                <code>
                    <span v-html="expression2"></span>
                </code>
            </li>

            <li>
                ❌ statements
                <br>
                <code>
                    <span v-html="statement1"></span>
                </code>
            </li>

            <li>
                ❌ flow control (use ternary)
                <br>
                <code>
                    <span v-html="flow1"></span>
                </code>
            </li>
        </ul>
    </InfoCard>
</template>

<script>
import { theme } from "../../assets/themes";
import { InfoCard } from "../../components";
export default {
  name: "declarative",
  components: {
    InfoCard
  },
  data() {
    return {
      expression1: "{{ number + 1 }}",
      expression2: "{{ ok ? 'YES' : 'NO' }}",
      statement1: "const num = 10;",
      flow1: 'if (ok) { return "true"; }'
    };
  },
  computed: {
    style() {
      return { color: theme.primary };
    }
  }
};
</script>
