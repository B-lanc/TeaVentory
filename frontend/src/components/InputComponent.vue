<script setup lang="ts">
defineProps<{
  label: string
  type: string
  value: any
  placeholder?: string
}>()
</script>

<template>
  <div class="mx-2">
    <label class="block">{{ label }}</label>
    <input
      class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="(ev) => $emit('update', (ev.target as HTMLInputElement).value)"
    />
  </div>
</template>
