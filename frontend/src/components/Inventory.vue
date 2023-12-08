<script setup lang="ts">
import pb from '@/pocketbaseConnection'
import CreateOverlay from './CreateOverlay.vue'
import { ref, onMounted } from 'vue'

const errorMessage = ref('Loading... Please Wait')
const records = ref()
const activeCreateOverlay = ref(false)
const toggleOverlay = () => {
  activeCreateOverlay.value = !activeCreateOverlay.value
}
onMounted(async () => {
  try {
    records.value = await pb.collection('inventory').getList(1, 50, {})
    console.log(records.value)
  } catch (e) {
    records.value = ''
    errorMessage.value = 'Could not load the inventory'
  }
})

const createRecord = () => {
  //TODO
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-between font-serif">
      <h2 class="px-7 py-7 text-3xl">Inventory</h2>
      <div class="my-auto">
        <button
          @click="toggleOverlay()"
          class="mr-4 rounded-md bg-red-400 px-4 py-4 hover:bg-red-500"
        >
          CREATE NEW RECORD
        </button>
      </div>
    </div>
    <div class="h-full w-full bg-blue-50 px-5 text-center">
      <div v-if="records">
        <div class="grid grid-cols-12 border-2 border-black bg-blue-200">
          <h4 class="col-span-2 py-1 hover:cursor-pointer hover:bg-blue-400">Inventory ID</h4>
          <h4 class="col-span-2 py-1 hover:cursor-pointer hover:bg-blue-400">Name</h4>
          <h4 class="col-span-1 py-1 hover:cursor-pointer hover:bg-blue-400">Size</h4>
          <h4 class="col-span-1 py-1 hover:cursor-pointer hover:bg-blue-400">Stock</h4>
          <h4 class="col-span-1 py-1 hover:cursor-pointer hover:bg-blue-400">Unit</h4>
          <h4 class="col-span-5 py-1 hover:cursor-pointer hover:bg-blue-400">Supplier</h4>
        </div>
        <div
          v-for="(item, index) in records.items"
          class="grid grid-cols-12 border-x-2 border-b-2 border-black py-1 font-mono font-light hover:bg-blue-400"
          :class="index % 2 ? 'bg-blue-100' : 'bg-blue-50'"
        >
          <h4 class="col-span-2">{{ item.inv_id }}</h4>
          <h4 class="col-span-2">{{ item.name }}</h4>
          <h4 class="col-span-1">{{ item.size }}</h4>
          <h4 class="col-span-1">{{ item.stock }}</h4>
          <h4 class="col-span-1">{{ item.unit }}</h4>
          <h4 class="col-span-5">{{ item.supplier }}</h4>
        </div>
      </div>
      <div v-else>
        {{ errorMessage }}
      </div>
    </div>
    <Transition>
      <CreateOverlay
        :toggle="toggleOverlay"
        :confirm="createRecord"
        v-if="activeCreateOverlay"
      >
      </CreateOverlay
    ></Transition>
  </div>
</template>
