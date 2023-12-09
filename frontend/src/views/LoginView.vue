<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import pb from '@/pocketbaseConnection'
import InputComponent from '@/components/InputComponent.vue'

const router = useRouter()
const username = ref('')
const password = ref('')
const loginFailMessage = ref('')

const navigateToHome = () => {
  router.push({ name: 'home' })
}
const loginButtonPress = async () => {
  try {
    await pb.collection('users').authWithPassword(username.value, password.value)
    navigateToHome()
  } catch (e) {
    loginFailMessage.value = 'Username or Password is Incorrect, Please try again!'
  }
}
</script>

<template>
  <div class="flex h-screen items-center justify-center bg-slate-100">
    <div class="w-96 rounded-md bg-white px-8 py-12">
      <h1 class="pb-5 text-center text-4xl font-bold">Login Page</h1>
      <InputComponent
        label="Username:"
        placeholder="username"
        type="text"
        :value="username"
        @update="(val) => (username = val)"
      />
      <InputComponent
        label="Password"
        placeholder="password"
        type="password"
        :value="password"
        @update="(val) => (password = val)"
        @keyup.enter="loginButtonPress()"
      />
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
