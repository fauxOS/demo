<template>
  <div>
    <console-prompt></console-prompt>
    <console-input></console-input>
  </div>
</template>

<script>
import ConsolePrompt from "./prompt.vue";
import ConsoleInput from "./input.vue";

export default {
  name: "app",
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
#app {
  font-size: 15px;
  font-family: dejavu sans mono, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(48, 57, 66);
}

a {
  color: #42b983;
}
</style>
