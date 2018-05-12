<template>
  <div>
    <h2>This is a test component</h2>
    <counter />
  </div>
</template>

<script>
  import Counter from "./children/Counter";
  export default {
    name: "Test",
    components: {Counter}
  }
</script>

<style scoped>

</style>
