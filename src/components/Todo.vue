<template>
  <div>
    <h2>This is the todo page</h2>
    <label for="newTodo">Todo Description:</label>
    <input
      @keyup.enter="addTodo"
      placeholder="Press enter when you're done"
      id="newTodo"
      type="text"
      v-model="input.description" />
    <div>
      <div v-for="(item, index) in todoList">
        <b :class="{ finished: item.done }">{{item.description}}</b>
        <template>
          <a v-if="!item.done" @click="completeTodo(index)">complete</a>
          <a v-else @click="uncompleteTodo(index)">un-complete</a> &bull;
        </template>
        <a @click="removeTodo(index)">delete</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Todo",
    data() {
      return {
        input: {
          description: ""
        }
      }
    },
    computed: {
      todoList() {
        return this.$store.state.todo.list;
      }
    },
    methods: {
      completeTodo(index) {
        this.$store.commit("finishTodo", index);
      },
      addTodo() {
        this.$store.commit("addTodo", this.input.description);
        this.input.description = "";
      },
      uncompleteTodo(index) {
        this.$store.commit("unfinishTodo", index);
      },
      removeTodo(index) {
        this.$store.commit("removeTodo", index);
      }
    }
  }
</script>

<style scoped>
  a {
    cursor: pointer;
  }
  .finished {
    text-decoration: line-through;
  }
</style>
