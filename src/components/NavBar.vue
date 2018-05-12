<template>
  <div>
    <router-link :to="{name: 'HelloWorld'}">Hello World Page</router-link>
    <router-link :to="{name: 'Test'}">Test Page</router-link>
    <router-link :to="{name: 'Todo'}">Todo Page</router-link>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>

</style>
