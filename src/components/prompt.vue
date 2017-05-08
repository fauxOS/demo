<template>
  <span class="prompt">
    <span class="name">{{ name }}</span><span class="colon">:</span><span class="cwd">{{ cwd }}</span><span class="symbol">{{ symbol }}</span>
  </span>
</template>

<script>
export default {
  name: "prompt",
  data() {
    return {
      name: "faux",
      cwd: "/",
      symbol: "#"
    }
  }
}
</script>

<style>
.prompt {
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
}

.prompt > .name {
  color: #4cff4c;
}

.prompt > .cwd {
  color: #0059bb;
}
</style>
