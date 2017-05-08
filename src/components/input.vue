<template>
	<div>
    <input v-model="input">
	</div>
</template>

<script>
export default {
  name: "input",
  data() {
    return {
      input: ""
    }
  }
}
</script>

<style>
input {
  font-size: 15px;
  font-family: dejavu sans mono, monospace;
}
</style>
