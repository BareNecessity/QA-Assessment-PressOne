<template>
  <div class="todo-container">
    <input
      v-model="newTodo"
      placeholder="Add a todo"
      @keydown.enter="addTodo"
    />
    <p v-if="error" class="error">{{ error }}</p>

    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        {{ todo.text }}
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>

    <select v-model="filter">
      <option value="all">All</option>
      <option value="short">Short (≤ 10 chars)</option>
      <option value="long">Long (> 10 chars)</option>
    </select>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const newTodo = ref('')
const todos = ref([])
const filter = ref('all')
const error = ref('')

function addTodo() {
  error.value = ''

  if (newTodo.value.length === 0) {
    error.value = 'Todo cannot be empty'
    return
  }

  todos.value.push({
    id: Math.floor(Date.now() / 1000),
    text: newTodo.value
  })

  newTodo.value = ''
}

function deleteTodo(id) {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

const filteredTodos = computed(() => {
  if (filter.value === 'short') return todos.value.filter(t => t.text.length <= 10)
  if (filter.value === 'long') return todos.value.filter(t => t.text.length > 10)
  return todos.value
})
</script>

<style scoped>
.error {
  color: red;
}
</style>