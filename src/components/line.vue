<template>
  <div class="line">
    <console-prompt></console-prompt>
    <console-input></console-input>
  </div>
</template>

<script>
import ConsolePrompt from "./prompt.vue";
import ConsoleInput from "./input.vue";

export default {
  name: "line",
  data() {
    return {}
  },
  components: {
    ConsolePrompt,
    ConsoleInput
  }
}
</script>

<style>
.line {
  word-break: break-all;
  height: 100%;
}
</style>
