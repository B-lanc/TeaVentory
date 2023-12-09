<script setup lang="ts">
defineProps<{
  title: string
  confirm: () => void
  toggle: () => void
}>()
</script>

<template>
  <div
    @click.self="toggle()"
    class="fixed left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-40"
  >
    <div class="fixed right-0 z-20 h-screen w-2/5 overflow-y-scroll bg-slate-200">
      <h2 class="p-4 text-center text-3xl font-semibold">{{ title }}</h2>
      <slot></slot>
      <div class="flex justify-center">
        <button
          @click="toggle()"
          class="m-4 h-9 w-16 rounded-sm bg-gray-300 text-black hover:bg-gray-200"
        >
          cancel
        </button>
        <button
          @click="confirm()"
          class="m-4 h-9 w-16 rounded-sm bg-red-950 text-white hover:bg-red-600"
        >
          confirm
        </button>
      </div>
    </div>
  </div>
</template>
