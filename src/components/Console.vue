<template>
  <div id="Console" @click="focus">
    <console-line v-for="line in lines" :line="line" :key="line">{{ line }}</console-line>
    <console-line v-if="input" :input="input" :prompt="true"></console-line>
  </div>
</template>

<script>
import ConsoleLine from "./ConsoleLine.vue";

export default {
  name: "Console",
  props: [],
  components: {
    ConsoleLine
  },
  data() {
    self = this;
    return {
      // Are we actively accepting user input?
      input: true,
      // Records of what the user wrote in the console, line by line
      history: [],
      // The innerHTML content of each line currently on-screen
      lines: [],
      // The backend's stdin that the console writes to
      set backend(text) {
        console.log("Sent command to backend : " + text);
      },
      // The console's stdin that the backend writes to
      set frontend(text) {
        const newLines = text.split("\n");
        // Append to last line, not to a new one
        if (this.lines.length > 0) {
          this.lines[ this.lines.length - 1 ] += newLines[0];
          self.$forceUpdate();
        } else {
          this.lines.push(newLines[0]);
        }
        for (let i = 1; i < newLines.length; i++) {
          this.lines.push( newLines[i] );
        }
      }
    }
  },
  computed: {},
  methods: {
    focus() {
      document.querySelector("#input").focus();
    }
  }
}
</script>

<style>
html body {
  height: 100%;
}

#Console {
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
