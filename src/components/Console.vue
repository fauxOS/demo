<template>
  <div id="Console" @keydown="capture">
    <console-line v-for="line in lines" :line="line" :key="line">{{ line }}</console-line>
  </div>
</template>

<script>
import ConsoleLine from "./ConsoleLine.vue";

export default {
  name: "Console",
  components: {
    ConsoleLine
  },
  data() {
    return {
      // Records of what the user wrote in the console, line by line
      history: [],
      // The innerHTML content of each line currently on-screen
      lines: [" > echo hello world", "hello world"],
      // The backend's stdin that the console writes to
      set backend(text) {
        console.log("Sent command to backend : " + text);
      },
      // The console's stdin that the backend writes to
      set frontend(text) {
        console.log("Text received from backend : " + text);
      }
    }
  },
  methods: {
    // Key down handler
    capture(key) {
      // On enter, save history, write command to backend, reset
      if (key.keyCode == 13 && !key.shiftKey) {
        key.preventDefault();
        if (this.$el.innerHTML != "") {
          this.historySave();
          this.stdin = this.$el.innerHTML;
          this.reset();
        }
      }
      // Clear the screen on ctrl + L
      else if (key.ctrlKey && key.keyCode == 76) {
        key.preventDefault();
        this.lines = [];
      }
      // Scroll history up or down
      else if (key.keyCode == 38 || key.keyCode == 40) {
        key.preventDefault();
        this.historyScroll(key);
      }
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
