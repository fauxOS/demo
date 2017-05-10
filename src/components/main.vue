<template>
  <div id="console" @click="focus">
    <console-line></console-line>
  </div>
</template>

<script>
import ConsoleLine from "./line.vue";

export default {
  name: "console",
  data() {
    return {
      history: [],
      // The backend's "standard input"
      set stdin(text) {
        console.log("Sent command to backend : " + text);
      }
    }
  },
  methods: {
    // Delete all submitted lines
    clear() {
      const lines = document.querySelectorAll("#console > .line");
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.id != "input-line") {
          line.parentElement.removeChild(line);
        }
      }
    },

    // Focus on the input component whenever the cursor clicks the page
    focus() {
      document.querySelector("#input").focus();
    }
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
