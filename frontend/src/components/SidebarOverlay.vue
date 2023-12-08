<script setup lang="ts">
const props = defineProps<{
  confirm: () => void
  toggle: () => void
}>()
const createRecord = () => {
  props.confirm()
}
const cancel = () => {
  props.toggle()
}
</script>

<template>
  <div
    @click.self="toggle()"
    class="fixed left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-40"
  >
    <div class="fixed right-0 z-20 h-screen w-1/3 bg-slate-200">
      <slot></slot>
      <div class="flex justify-center">
        <button
          @click="cancel()"
          class="m-4 h-9 w-16 rounded-sm bg-gray-300 text-black hover:bg-gray-200"
        >
          cancel
        </button>
        <button
          @click="createRecord()"
          class="m-4 h-9 w-16 rounded-sm bg-red-950 text-white hover:bg-red-600"
        >
          create
        </button>
      </div>
    </div>
  </div>
</template>
