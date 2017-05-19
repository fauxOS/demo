<template>
  <span class="console-line">
    {{ line }}
    <span class="input-container" v-if="input">
      <input id="input" autofocus @keydown="capture" v-model="userInput"
      autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
    </span>
  </span>
</template>

<script>

export default {
  name: "ConsoleLine",
  props: ["line", "input"],
  components: {},
  data() {
    return {
      // Where the user's input goes
      userInput: "",
      // The location in history that is in userInput
      historyIndex: this.$parent.history.length,
      // The location that we save the current userInput to
      historyLength: this.$parent.history.length
    }
  },
  computed: {},
  methods: {
    // Key down handler
    capture(key) {
      // On enter, save history, write command to backend, remove input line
      if (key.keyCode == 13 && !key.shiftKey) {
        key.preventDefault();
        if (this.$el.innerHTML != "") {
          this.historySave();
          // Update history index and length
          this.historyIndex = this.$parent.history.length;
          this.historyLength = this.$parent.history.length;
          // Send command to backend
          this.$parent.backend = this.userInput;
          this.replace();
        }
      }
      // Clear the screen on ctrl + L
      else if (key.ctrlKey && key.keyCode == 76) {
        key.preventDefault();
        this.$parent.lines = [];
      }
      // Scroll history up or down
      else if (key.keyCode == 38 || key.keyCode == 40) {
        key.preventDefault();
        this.historyScroll(key);
      }
    },

    historySave() {
      this.$parent.history[ this.historyLength ] = this.userInput;
    },

    // Scroll in history
    historyScroll(key) {
      // Save the current draft
      if (this.historyIndex == this.historyLength) {
        this.historySave();
      }
      // Up
      // Prevent the index from getting lower than 0
      if (key.keyCode == 38 && this.historyIndex != 0) {
        this.historyIndex--;
      }
      // Down
      else if (key.keyCode == 40) {
        // Prevent the index from getting higher than the history length
        if (this.historyIndex < this.historyLength) {
          this.historyIndex++;
        }
      }
      this.userInput = this.$parent.history[ this.historyIndex ];
    },

    // Switches userInput and line
    replace() {
      this.$parent.lines.push(this.userInput);
      this.userInput = "";
    }
  }
}
</script>

<style>
.console-line {
  word-break: break-all;
  display: block;
  color: #dedede;
  padding: 0.25%;
  height: 1.2em;
}

.input-container {
  display: table;
  width: 100%;
}

#input {
  color: #dedede;
  border: none;
  outline: none;
  height: 100%;
  background: inherit;
  font-size: inherit;
  font-family: inherit;
  display: table-cell;
  width: 100%;
}
</style>
