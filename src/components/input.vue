<template>
  <span class="input" :id="id" @keyup="submit" contenteditable="true" autocomplete="off" autocorrect="off" spellcheck="false">
  </span>
</template>

<script>
export default {
  name: "input",
  mounted() {
    this.$el.focus();
  },
  data() {
    return {
      "id": "input"
    }
  },
  methods: {
    // Extract the text and submit the command
    submit(key) {
      if (key.keyCode != 13) {
        return;
      } else if (!key.shiftKey) {
        let text = this.$el.innerText;
        console.log(text);
        this.reset();
        return text;
      }
    },

    // Reset the console and make a new input element
    reset() {
      this.id = "";
      this.$el.contentEditable = false;
      this.$parent.line = "line-submitted";
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
}
</style>
