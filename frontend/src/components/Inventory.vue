<script setup lang="ts">
import pb from '@/pocketbaseConnection'

const records = await pb.collection('inventory').getList(1, 50, {})

console.log(records)
</script>

<template>
  <div class="flex flex-col">
    <div class="flex h-12 justify-between px-3 py-2 font-serif">
      <h2>Inventory</h2>
      <div>Something else idk</div>
    </div>
    <div class="h-full w-full bg-blue-50 p-5">{{ records }}</div>
  </div>
</template>
