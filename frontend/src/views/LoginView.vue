<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import pb from '@/pocketbaseConnection'

const router = useRouter()
const username = ref('')
const password = ref('')
const loginFailMessage = ref('')

const navigateToHome = () => {
  router.push({ name: 'home' })
}
const loginButtonPress = async () => {
  try {
    const authdata = await pb.collection('users').authWithPassword(username.value, password.value)
    navigateToHome()
  } catch (e) {
    loginFailMessage.value = 'Username or Password is Incorrect, Please try again!'
  }
}
</script>

<template>
  <div class="flex h-screen items-center justify-center bg-slate-100">
    <div class="h-1/2 w-96 rounded-md bg-white px-8 py-12">
      <h1 class="pb-5 text-center text-4xl font-bold">Login Page</h1>
      <div>
        <label class="block">Username:</label>
        <input
          type="text"
          class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
          v-model="username"
          placeholder="username"
        />
      </div>
      <div class="mt-3">
        <label class="block">Password:</label>
        <input
          type="password"
          class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
          v-model="password"
          placeholder="password"
        />
      </div>
      <div class="mt-5">
        <button
          class="w-full rounded-md border bg-green-500 py-2 hover:bg-green-400"
          @click="loginButtonPress()"
        >
          Login
        </button>
      </div>
      <div class="mt-5 w-full overflow-hidden">
        <h3 class="break-words text-center text-red-900">
          {{ loginFailMessage }}
        </h3>
      </div>
    </div>
  </div>
</template>
