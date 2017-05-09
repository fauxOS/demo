<template>
  <span class="prompt">
    <span class="name">{{ name }}</span><span>:</span><span class="cwd">{{ cwd }}</span><span>#</span>
  </span>
</template>

<script>
export default {
  name: "prompt",
  data() {
    return {
      name: "faux",
      cwd: "/"
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
