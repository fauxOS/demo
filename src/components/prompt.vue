<template>
  <span class="prompt">
    <span class="name">{{ name }}</span><span>:</span><span class="cwd">{{ cwd }}</span><span>#&nbsp</span>
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
  float: left;
}

.prompt > .name {
  color: #4cff4c;
}

.prompt > .cwd {
  color: #0059bb;
}
</style>
