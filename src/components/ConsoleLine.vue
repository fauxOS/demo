<template>
  <span class="console-line">{{ line }}</span>
</template>

<script>

export default {
  name: "ConsoleLine",
  props: ["line"],
  data() {
    return {}
  },
  components: {}
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
</style>
