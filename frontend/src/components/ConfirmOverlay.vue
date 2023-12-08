<script setup lang="ts">
const props = defineProps<{
  message: string
  confirm: () => void
  toggle: () => void
}>()
</script>

<template>
  <div
    @click.self="toggle()"
    class="fixed left-0 top-0 z-30 h-screen w-screen bg-black bg-opacity-40"
  >
    <div
      class="fixed left-1/3 top-1/3 z-20 m-auto h-1/3 w-1/3 rounded-sm bg-slate-50 text-center shadow-sm"
    >
      <div class="px-3 pt-5">
        <h3 class="text-2xl">{{ message }}</h3>
      </div>
      <div class="absolute bottom-2 left-0 right-0 flex justify-center">
        <button
          class="m-4 h-12 w-24 rounded-sm bg-gray-300 text-black transition-colors hover:bg-gray-200"
          @click="toggle()"
        >
          No
        </button>
        <button
          class="m-4 h-12 w-24 rounded-sm bg-red-950 text-white transition-colors hover:bg-red-600"
          @click="confirm()"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
</template>
