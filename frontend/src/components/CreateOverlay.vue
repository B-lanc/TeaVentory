<script setup lang="ts">
const props = defineProps<{
  confirm: () => void
  toggle: () => void
}>()
const createRecord = () => {
  //TODO
  props.confirm()
}
const cancel = () => {
  props.toggle()
}
</script>

<template>
  <div @click="toggle()" class="fixed left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-40">
    <div class="fixed right-0 z-20 h-screen bg-white">
      <slot></slot>
      <div>
        <button @click="cancel()" class="rounded-md bg-slate-50 text-black">cancel</button>
        <button @click="createRecord()" class="rounded-md bg-red-950 text-white">create</button>
      </div>
    </div>
  </div>
</template>
