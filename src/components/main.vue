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
    return {
      msg: "Faux OS Demo"
    }
  },
  components: {
    ConsoleLine
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
