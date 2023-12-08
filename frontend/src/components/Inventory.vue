<script setup lang="ts">
import pb from '@/pocketbaseConnection'
import CreateOverlay from './CreateOverlay.vue'
import ConfirmOverlay from './ConfirmOverlay.vue'
import { ref, onMounted } from 'vue'

const errorMessage = ref('Loading... Please Wait')
const records = ref()

const activeCreateOverlay = ref(false)
const toggleOverlay = () => {
  activeCreateOverlay.value = !activeCreateOverlay.value
}

const deleteOverlayActive = ref(false)
const deleteOverlayMessage = ref('')
const deleteOverlayFunction = ref(() => {})
const deleteOverlayToggle = () => {
  deleteOverlayActive.value = !deleteOverlayActive.value
}
const deleteOverlayInit = (id: string, inv_id: string, name: string) => {
  deleteOverlayMessage.value = `Would you like to delete the item "${name}" with ID: "${inv_id}"`
  deleteOverlayActive.value = true
  deleteOverlayFunction.value = () => {
    pb.collection('inventory').delete(id)
  }
}

const newRecordSchema = ref({
  inv_id: '',
  name: '',
  size: 0,
  unit: '',
  stock: 0,
  supplier: '',
  delivery_duration: 0,
  delivery_delay: 0
})

onMounted(async () => {
  try {
    records.value = await pb.collection('inventory').getList(1, 50, {})
  } catch (e) {
    records.value = ''
    errorMessage.value = 'Could not load the inventory'
  }
})

const createRecord = async () => {
  try {
    const newRecord = await pb.collection('inventory').create(newRecordSchema.value)
    records.value.items.push(newRecord)
  } catch (e) {
    alert(`Failed to submit data.... ${e}`)
  }
  activeCreateOverlay.value = false
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
            <div>
              <button
                class="my-auto w-10/12 rounded-sm bg-green-400 transition-colors hover:bg-green-600 hover:text-white"
              >
                Edit
              </button>
            </div>
            <div>
              <button
                @click="deleteOverlayInit(item.id, item.inv_id, item.name)"
                class="my-auto w-10/12 rounded-sm bg-red-400 transition-colors hover:bg-red-700 hover:text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        {{ errorMessage }}
      </div>
    </div>
    <Transition>
      <CreateOverlay :toggle="toggleOverlay" :confirm="createRecord" v-if="activeCreateOverlay">
        <div class="mx-2">
          <label class="block">Inventory ID:</label>
          <input
            type="text"
            class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
            v-model="newRecordSchema.inv_id"
            placeholder="inventory id"
          />
        </div>
        <div class="mx-2">
          <label class="block">Name:</label>
          <input
            type="text"
            class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
            v-model="newRecordSchema.name"
            placeholder="item name"
          />
        </div>
        <div class="mx-2">
          <label class="block">Size:</label>
          <input
            type="number"
            class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
            v-model="newRecordSchema.size"
            placeholder="item size"
          />
        </div>
        <div class="mx-2">
          <label class="block">Stock:</label>
          <input
            type="number"
            class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
            v-model="newRecordSchema.stock"
            placeholder="stock count"
          />
        </div>
        <div class="mx-2">
          <label class="block">Unit:</label>
          <input
            type="text"
            class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
            v-model="newRecordSchema.unit"
            placeholder="unit"
          />
        </div>
        <div class="mx-2">
          <label class="block">Supplier address and phone:</label>
          <textarea
            class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
            v-model="newRecordSchema.supplier"
            rows="5"
            cols="33"
            placeholder="address"
          />
        </div>
        <div class="mx-2">
          <label class="block">Delivery time (day):</label>
          <input
            type="number"
            class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
            v-model="newRecordSchema.delivery_duration"
            placeholder="delivery time"
          />
        </div>
        <div class="mx-2">
          <label class="block">Estimated delay (day):</label>
          <input
            type="number"
            class="w-full rounded-md border-2 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-800"
            v-model="newRecordSchema.delivery_delay"
            placeholder="delivery delay"
          />
        </div> </CreateOverlay
    ></Transition>

    <!-- Delete overlay -->
    <Transition>
      <ConfirmOverlay
        v-if="deleteOverlayActive"
        :toggle="deleteOverlayToggle"
        :confirm="deleteOverlayFunction"
        :message="deleteOverlayMessage"
      />
    </Transition>
  </div>
</template>
