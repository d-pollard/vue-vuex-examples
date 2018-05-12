<template>
  <div>
    <p>This counter is at: {{counter}}</p>
    <ChangeCount  btn-txt="+" :change-amt="1"/>
    <ChangeCount v-if="counter >= -20"  btn-txt="-" :change-amt="-1"/>
    <span v-show="counter >= 20" v-for="x in Math.abs(Math.floor(counter/20))">
      <ChangeCount  :btn-txt="'+' + (x * 20)" :change-amt="x * 20"/>
      <ChangeCount v-if="counter >= -20" :btn-txt="'+' + (x * 20)" :change-amt="-(x * 20)"/>
    </span>
  </div>
</template>

<script>
  import ChangeCount from "./counter/ChangeCount";
  export default {
    name: "Counter",
    components: {ChangeCount},
    computed: {
      counter() {
        return this.$store.state.counter.counter;
      }
    }
  }
</script>

<style scoped>

</style>
