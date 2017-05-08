<template>
  <span class="input" contenteditable="true" v-model="input"></span>
</template>

<script>
export default {
  name: "input",
  data() {
    return {
      input: " "
    }
  }
}
</script>

<style>
.input {
  width: 100%;
  color: #dedede;
  border: none;
  outline: none;
  display: inline-block;
  height: 100%;
}
</style>
