<script setup lang="ts">
defineProps<{
  label: string
  value: any
  placeholder?: string
  rows: number
  cols: number
}>()
</script>

<template>
  <div class="mx-2">
    <label class="block">{{ label }}</label>
    <textarea
      class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
      :placeholder="placeholder"
      :value="value"
      :rows="rows"
      :cols="cols"
      @input="(ev) => $emit('update', (ev.target as HTMLTextAreaElement).value)"
    ></textarea>
  </div>
</template>
