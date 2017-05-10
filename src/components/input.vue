<template>
  <span class="input" :id="id" @keydown="capture"
    autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
    contenteditable="true"></span>
</template>

<script>
export default {
  name: "input",
  mounted() {
    this.$el.focus();
  },
  data() {
    return {
      id: "input",
      history: this.$parent.$parent.history,
      // The index of the
      historyLength: this.$parent.$parent.history.length,
      // Where we are typing at any given moment
      historyIndex: this.$parent.$parent.history.length
    }
  },
  methods: {
    // Key down handler
    capture(key) {
      // Save history, write command to backend, reset
      if (key.keyCode == 13 && !key.shiftKey) {
        key.preventDefault();
        if (this.$el.innerHTML != "") {
          this.historySave();
          this.$parent.$parent.stdin = this.$el.innerHTML;
          this.reset();
        }
      }
      // Clear the screen
      if (key.ctrlKey && key.keyCode == 76) {
        key.preventDefault();
        this.$parent.$parent.clear();
      }
      // Scroll history up or down
      if (key.keyCode == 38 || key.keyCode == 40) {
        this.historyScroll(key);
      }
    },

    // Save the current line into the history array in the last slot
    historySave() {
      console.log("History saved at index " + this.historyLength + " : " + this.$el.innerHTML);
      this.history[ this.historyLength ] = this.$el.innerHTML;
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
      this.$el.innerHTML = this.history[ this.historyIndex ] || "";
      console.log("Scrolled to history index : " + this.historyIndex);
    },

    // Preserve the entered line and make a new input element
    reset() {
      this.id = "";
      this.$el.contentEditable = false;
      this.$parent.$el.id = "";
      const newLine = document.createElement("span");
      newLine.class = "line";
      this.$parent.$parent.$el.appendChild(newLine);
      return new this.$parent.$options.components.line({
        el: newLine,
        parent: this.$parent.$parent
      });
    }
  }
}
</script>

<style>
.input {
  color: #dedede;
  border: none;
  outline: none;
  height: 100%;
  display: flex;
}
</style>
