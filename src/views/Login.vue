<template>
  <div class="login-form">
    <input v-model="username" placeholder="Username" />
    <button @click="login">Login</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const error = ref('')
const router = useRouter()

function login() {
  if (!username.value.trim()) {
    error.value = 'Username is required'
    return
  }

  localStorage.setItem('username', username.value)
  router.push('/')
}
</script>