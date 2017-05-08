<template>
  <div id="app">
    <console-line></console-line>
  </div>
</template>

<script>
import ConsoleLine from "./line.vue";

export default {
  name: "app",
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

#app {
  font-size: 17px;
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
  flex: 1 1;
  flex-direction: column;
}

a {
  color: #8bb2ff;
}
</style>
