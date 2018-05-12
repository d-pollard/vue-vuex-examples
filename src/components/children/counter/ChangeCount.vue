<template>
  <button @click="changeCount">
    {{changeAmt}}
  </button>
</template>

<script>
  export default {
    name: "ChangeCount",
    props: {
      btnTxt: {
        type:     String,
        required: true,
        default:  'Blah'
      },
      changeAmt: {
        type:     Number,
        required: true,
        default:  10
      }
    },
    computed: {
      counter() {
        return this.$store.state.counter.counter;
      }
    },
    methods: {
      changeCount() {
        this.$store.commit("changeCounter", this.changeAmt);
        console.log(`The counter has been changed ${this.changeAmt}`);
        console.log("The counter has been changed " + this.changeAmt);
      }
    }
  }
</script>

<style scoped>

</style>
