<template>
  <span v-bind:class="line">
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
    return {
      line: "line"
    }
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
  display: inline-block;
  color: #dedede;
  padding: 1%;
  width: 95%;
  height: 95%;
}
.line-submitted {
  word-break: break-all;
  display: inline-block;
  color: #dedede;
  padding: 1%;
  width: 95%;
  height: auto;
}
</style>
