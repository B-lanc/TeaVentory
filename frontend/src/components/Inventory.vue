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
          <div class="col-span-3 m-auto py-1">
            <div class="border-b border-black">Name</div>
            <div>SKU</div>
          </div>
          <h4 class="col-span-3 m-auto py-1">Supplier</h4>
          <h4 class="col-span-1 m-auto py-1">Size</h4>
          <h4 class="col-span-1 m-auto py-1">Stock</h4>
          <h4 class="col-span-1 m-auto py-1">Unit</h4>
          <h4 class="col-span-1 m-auto py-1">Delivery Duration (day)</h4>
          <h4 class="col-span-1 m-auto py-1">Estimated Delay (day)</h4>
          <h4 class="col-span-1 m-auto py-1">Action</h4>
        </div>
        <div
          v-for="(item, index) in records.items"
          class="grid grid-cols-12 border-x-2 border-b-2 border-black py-1 font-mono font-light"
          :class="index % 2 ? 'bg-blue-100' : 'bg-blue-50'"
        >
          <div class="col-span-3 m-auto">
            <div class="border-b border-black">{{ item.name }}</div>
            <div>{{ item.inv_id }}</div>
          </div>
          <h4 class="col-span-3 m-auto">{{ item.supplier }}</h4>
          <h4 class="col-span-1 m-auto">{{ item.size }}</h4>
          <h4 class="col-span-1 m-auto">{{ item.stock }}</h4>
          <h4 class="col-span-1 m-auto">{{ item.unit }}</h4>
          <h4 class="col-span-1 m-auto">{{ item.delivery_duration }}</h4>
          <h4 class="col-span-1 m-auto">{{ item.delivery_delay }}</h4>
          <div class="col-span-1 my-auto">
            <div><button class="bg-green-400 w-10/12 hover:bg-green-600 my-auto rounded-sm">Edit</button></div>
            <div><button class="bg-red-400 w-10/12 hover:bg-red-700 my-auto rounded-sm">Delete</button></div>
          </div>
        </div>
      </div>
      <div v-else>
        {{ errorMessage }}
      </div>
    </div>
    <Transition>
      <CreateOverlay :toggle="toggleOverlay" :confirm="createRecord" v-if="activeCreateOverlay">
      </CreateOverlay
    ></Transition>
  </div>
</template>
