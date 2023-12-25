<script setup lang="ts">
import pb from '@/pocketbaseConnection'
import SidebarOverlay from '@/components/SidebarOverlay.vue'
import ConfirmOverlay from '@/components/ConfirmOverlay.vue'
import InventorySidebar from '@/components/InventorySidebar.vue'
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'

import type { ListResult } from 'pocketbase'
import type { InventoryResponse, InventoryRecord } from '@/types/pocketbase-types'

const errorMessage = ref('Loading... Please Wait')
const records: Ref<ListResult<InventoryResponse> | undefined> = ref()
const RecordSchema = ref({
  inv_id: '',
  name: '',
  size: 0,
  unit: '',
  stock: 0,
  supplier: '',
  delivery_duration: 0,
  delivery_delay: 0
})
const RecordSchemaZeroer = () => {
  RecordSchema.value.inv_id = ''
  RecordSchema.value.name = ''
  RecordSchema.value.size = 0
  RecordSchema.value.unit = ''
  RecordSchema.value.stock = 0
  RecordSchema.value.supplier = ''
  RecordSchema.value.delivery_duration = 0
  RecordSchema.value.delivery_delay = 0
}

const createOverlayActive = ref(false)
const createOverlayToggle = () => {
  createOverlayActive.value = !createOverlayActive.value
}
const createRecord = async () => {
  try {
    const newRecord = await pb.collection('inventory').create(RecordSchema.value)
    records.value!.items.push(newRecord)
  } catch (e) {
    alert(`Failed to submit data.... ${e}`)
  }
  createOverlayActive.value = false
  RecordSchemaZeroer()
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
    try {
      pb.collection('inventory').delete(id)
      records.value!.items = records.value!.items.filter((item) => item.id !== id)
      deleteOverlayToggle()
    } catch (e) {
      alert('Could not delete record')
    }
  }
}

const editOverlayActive = ref(false)
const editOverlayFunction = ref(() => {})
const EditRecordSchema = ref({
  inv_id: '',
  name: '',
  size: 0,
  unit: '',
  stock: 0,
  supplier: '',
  delivery_duration: 0,
  delivery_delay: 0
})
const editOverlayToggle = () => {
  editOverlayActive.value = !editOverlayActive.value
}
const editOverlayInit = (item: InventoryRecord) => {
  editOverlayActive.value = true
  EditRecordSchema.value.inv_id = item.inv_id
  EditRecordSchema.value.name = item.name
  EditRecordSchema.value.size = item.size
  EditRecordSchema.value.stock = item.stock!
  EditRecordSchema.value.unit = item.unit
  EditRecordSchema.value.supplier = item.supplier!
  EditRecordSchema.value.delivery_duration = item.delivery_duration!
  EditRecordSchema.value.delivery_delay = item.delivery_delay!
  editOverlayFunction.value = () => {
    try {
      pb.collection('inventory').update(item.id, EditRecordSchema.value)
      records.value!.items = records.value!.items.map((it) => {
        if (it.id === item.id) {
          it.inv_id = EditRecordSchema.value.inv_id
          it.name = EditRecordSchema.value.name
          it.size = EditRecordSchema.value.size
          it.stock = EditRecordSchema.value.stock
          it.unit = EditRecordSchema.value.unit
          it.supplier = EditRecordSchema.value.supplier
          it.delivery_duration = EditRecordSchema.value.delivery_duration
          it.delivery_delay = EditRecordSchema.value.delivery_delay
        }
        return it
      })
      editOverlayToggle()
    } catch (e) {
      alert('Could not edit record')
    }
  }
}

onMounted(async () => {
  try {
    records.value = await pb.collection('inventory').getList(1, 500, {})
  } catch (e) {
    errorMessage.value = 'Could not load the inventory'
  }
})
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="flex justify-between font-serif">
      <h2 class="px-7 py-7 text-3xl">Inventory</h2>
      <div class="my-auto">
        <button
          @click="createOverlayToggle()"
          class="mr-4 rounded-md bg-red-400 px-4 py-4 transition-colors hover:bg-red-500"
        >
          CREATE NEW RECORD
        </button>
      </div>
    </div>
    <div class="h-full w-full overflow-auto bg-blue-50 px-5 text-center">
      <div v-if="records" class="text-md sm:text-xs md:text-sm">
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
          :key="item.id"
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
                @click="editOverlayInit(item)"
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

    <!-- Create Overlay -->
    <Transition>
      <SidebarOverlay
        title="Create New Record"
        :toggle="createOverlayToggle"
        :confirm="createRecord"
        v-if="createOverlayActive"
      >
        <InventorySidebar
          :inv_id="RecordSchema.inv_id"
          @inv_id="(val) => (RecordSchema.inv_id = val)"
          :name="RecordSchema.name"
          @name="(val) => (RecordSchema.name = val)"
          :size="RecordSchema.size"
          @size="(val) => (RecordSchema.size = val)"
          :stock="RecordSchema.stock"
          @stock="(val) => (RecordSchema.stock = val)"
          :unit="RecordSchema.unit"
          @unit="(val) => (RecordSchema.unit = val)"
          :address="RecordSchema.supplier"
          @address="(val) => (RecordSchema.supplier = val)"
          :delivery_duration="RecordSchema.delivery_duration"
          @delivery_duration="(val) => (RecordSchema.delivery_duration = val)"
          :delivery_delay="RecordSchema.delivery_delay"
          @delivery_delay="(val) => (RecordSchema.delivery_delay = val)"
        >
        </InventorySidebar> </SidebarOverlay
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

    <!-- Edit overlay -->
    <Transition>
      <SidebarOverlay
        title="Edit record"
        :toggle="editOverlayToggle"
        :confirm="editOverlayFunction"
        v-if="editOverlayActive"
      >
        <InventorySidebar
          :inv_id="EditRecordSchema.inv_id"
          @inv_id="(val) => (EditRecordSchema.inv_id = val)"
          :name="EditRecordSchema.name"
          @name="(val) => (EditRecordSchema.name = val)"
          :size="EditRecordSchema.size"
          @size="(val) => (EditRecordSchema.size = val)"
          :stock="EditRecordSchema.stock"
          @stock="(val) => (EditRecordSchema.stock = val)"
          :unit="EditRecordSchema.unit"
          @unit="(val) => (EditRecordSchema.unit = val)"
          :address="EditRecordSchema.supplier"
          @address="(val) => (EditRecordSchema.supplier = val)"
          :delivery_duration="EditRecordSchema.delivery_duration"
          @delivery_duration="(val) => (EditRecordSchema.delivery_duration = val)"
          :delivery_delay="EditRecordSchema.delivery_delay"
          @delivery_delay="(val) => (EditRecordSchema.delivery_delay = val)"
        >
        </InventorySidebar> </SidebarOverlay
    ></Transition>
  </div>
</template>
