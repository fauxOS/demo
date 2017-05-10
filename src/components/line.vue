<template>
  <span class="line" id="input-line">
    <console-prompt></console-prompt>
    <console-input></console-input>
  </span>
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
  display: block;
  color: #dedede;
  padding: 0.25%;
}
</style>
