<template>
  <span class="prompt">{{ prompt }}</span>
</template>

<script>
export default {
  name: "prompt",
  data() {
    return {
      prompt: "faux:/#"
    }
  }
}
</script>

<style>
.prompt {
  font-size: 15px;
  font-family: dejavu sans mono, monospace;
  color: #808080
}
</style>
