<script setup lang="ts">
defineProps<{
  label: string
  value: any
  options: string[]
}>()
</script>

<template>
  <div class="mx-2">
    <label class="block">{{ label }}</label>
    <select
      :value="value"
      @input="(ev) => $emit('update', (ev.target as HTMLSelectElement).value)"
      class="w-full rounded-md border-2 bg-white px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
    >
      <option disabled value=""></option>
      <option v-for="op in options">{{ op }}</option>
    </select>
  </div>
</template>
