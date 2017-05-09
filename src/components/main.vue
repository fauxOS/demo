<template>
  <div id="console">
    <console-line></console-line>
  </div>
</template>

<script>
import ConsoleLine from "./line.vue";

export default {
  name: "console",
  data() {
    return {}
  },
  components: {
    ConsoleLine
  }
}
</script>

<style>
html body {
  height: 100%;
}

#console {
  font-size: 1.2em;
  font-family: dejavu sans mono, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #101010;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: auto;
  position: fixed;
}

a {
  color: #77d0ff;
}
</style>
