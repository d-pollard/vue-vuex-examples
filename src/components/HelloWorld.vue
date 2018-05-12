<template>
  <div>
    <h1>Hello world component</h1>
    <p>{{msg}}</p>
    <counter />
  </div>
</template>

<script>
import Counter from "./children/Counter";
export default {
  name: 'HelloWorld',
  components: {Counter},
  data () {
    return {
      msg: 'Welcome to Your Derek.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
