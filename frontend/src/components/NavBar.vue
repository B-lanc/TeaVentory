<script setup lang="ts">
import pb from '@/pocketbaseConnection'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'
import { ref, watch } from 'vue'

const router = useRouter()

const logout = () => {
  pb.authStore.clear()
  router.push({ name: 'login' })
}
const routes = ref([
  { id: 0, name: 'Dashboard', link: '/', isActive: false },
  { id: 1, name: 'Inventory', link: '/inventory', isActive: false },
  { id: 2, name: 'Report', link: '/report', isActive: false },
  { id: 3, name: 'Employees', link: '/employees', isActive: false },
  { id: 4, name: 'Settings', link: '/settings', isActive: false },
  { id: 5, name: 'Help', link: '/help', isActive: false }
])

watch(
  router.currentRoute,
  () => {
    routes.value = routes.value.map((route) => {
      if (route.link === router.currentRoute.value.path) {
        route.isActive = true
      } else {
        route.isActive = false
      }
      return route
    })
  },
  { immediate: true }
)
</script>

<template>
  <div class="h-screen w-36 bg-slate-100">
    <nav class="flex flex-col pl-7 font-sans text-lg font-light">
      <RouterLink
        v-for="route in routes"
        class="hover:font-semibold"
        :class="{ 'font-bold': route.isActive }"
        :key="route.id"
        :to="route.link"
        >{{ route.name }}</RouterLink
      >
      <button class="text-left hover:font-semibold" @click="logout()">Logout</button>
    </nav>
  </div>
</template>
