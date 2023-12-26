<script setup lang="ts">
import InputComponent from '@/components/InputComponent.vue'
import pb from '@/pocketbaseConnection'
import { onMounted, ref } from 'vue'

import type { FullRecipeResponse, InventoryResponse } from '@/types/pocketbase-types'

const startDate = ref(new Date().toISOString().slice(0, 10))
const endDate = ref(new Date().toISOString().slice(0, 10))
const forecastPeriod = ref(0)
const ItemCount = ref()
const duration = ref(0)
const fullRecipe = ref<FullRecipeResponse<unknown>[]>()
const inventory = ref<InventoryResponse<unknown>[]>()
const management: any = ref([])
const loadingMessage = ref('Nothing Loaded Yet')

const loadData = async () => {
  loadingMessage.value = 'Loading... please wait.'
  management.value = []
  duration.value =
    (new Date(endDate.value).getTime() - new Date(startDate.value).getTime()) /
      1000 /
      60 /
      60 /
      24 +
    1
  try {
    const transactions = await pb.collection('transactions').getFullList({
      filter: `datetime >= "${startDate.value}" && datetime <= "${endDate.value}"`
    })
    ItemCount.value = transactions.reduce((acc: any, curr) => {
      acc[curr.item_id] = acc[curr.item_id]
        ? acc[curr.item_id] + curr.qty / duration.value
        : curr.qty / duration.value

      if (curr.topping_id) {
        acc[curr.topping_id] = acc[curr.topping_id]
          ? acc[curr.topping_id] + curr.qty / duration.value
          : curr.qty / duration.value
      }
      return acc
    }, {})
    console.log(ItemCount.value)

    ItemCount.value = Object.entries(ItemCount.value)

    const D: any = {}
    ItemCount.value.forEach((it: any) => {
      fullRecipe.value!.forEach((ma: any) => {
        if (it[0] == ma.item_id) {
          if (ma.inv_id) {
            if (D[ma.inv_id]) {
              D[ma.inv_id] = D[ma.inv_id] + ma.qty * it[1]
            } else {
              D[ma.inv_id] = ma.qty * it[1]
            }
          }
          if (ma.mid_inv_id) {
            if (D[ma.mid_inv_id]) {
              D[ma.mid_inv_id] = D[ma.mid_inv_id] + (ma.qty * it[1] * ma.mid_qty) / ma.mid_size
            } else {
              D[ma.mid_inv_id] = (ma.qty * it[1] * ma.mid_qty) / ma.mid_size
            }
          }
        }
      })
    })

    inventory.value.forEach((el: any) => {
      const dd = parseInt(el.delivery_delay, 10)
      const ddur = parseInt(el.delivery_duration, 10)
      const forecast = forecastPeriod.value
      const man = {
        inv_id: el.inv_id,
        name: el.name,
        unit: el.unit,
        stock: el.stock,
        supplier: el.supplier,
        size: el.size,
        need: D[el.id] * (forecast + dd),
        rop: D[el.id] * (ddur + dd),
        D: D[el.id],
        dd: dd,
        forecast: forecast
      }
      management.value.push(man)
    })
  } catch (e) {
    console.log(e)
    alert('Some error')
  }
}

onMounted(async () => {
  try {
    fullRecipe.value = await pb.collection('FullRecipe').getFullList()
    inventory.value = await pb.collection('inventory').getFullList()
  } catch (e) {
    alert('could not load data...')
  }
})
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="flex flex-row justify-between font-serif">
      <h2>Inventory Management</h2>
    </div>
    <div class="flex flex-row justify-between font-serif">
      <InputComponent
        label="Start Date"
        type="date"
        :value="startDate"
        @update="(val) => (startDate = val)"
      />
      <InputComponent
        label="End Date"
        type="date"
        :value="endDate"
        @update="(val) => (endDate = val)"
      />
      <InputComponent
        label="Forecast Period"
        placeholder="forecast period"
        type="number"
        :value="forecastPeriod"
        @update="(val) => (forecastPeriod = parseInt(val, 10))"
      />
      <button
        @click="loadData()"
        class="mr-4 w-36 rounded-md bg-red-400 px-4 py-4 transition-colors hover:bg-red-500"
      >
        Load
      </button>
    </div>
    <div class="h-full w-full overflow-auto bg-blue-50 px-5 text-center">
      <div v-if="management.length" class="text-md sm:text-xs md:text-sm">
        <div class="grid grid-cols-12 border-2 border-black bg-blue-200">
          <div class="col-span-1 m-auto py-1">
            <div class="border-b border-black">Name</div>
            <div>SKU</div>
          </div>
          <h4 class="col-span-3 m-auto py-1">Supplier</h4>
          <div class="col-span-1 m-auto py-1">
            <div class="border-b border-black">Stock</div>
            <div>Unit</div>
          </div>
          <div class="col-span-2 m-auto py-1">
            <div class="border-b border-black">Need</div>
            <div>Unit</div>
          </div>
          <div class="col-span-2 m-auto py-1">
            <div class="border-b border-black">ROP</div>
            <div>Unit</div>
          </div>
          <h4 class="col-span-1 m-auto py-1">Note</h4>
          <div class="col-span-2 m-auto py-1">
            <div class="border-b border-black">EOQ</div>
            <div>Unit</div>
          </div>
        </div>
        <div
          v-for="(item, index) in management"
          :key="item.id"
          class="grid grid-cols-12 border-x-2 border-b-2 border-black py-1 font-mono font-light"
          :class="index % 2 ? 'bg-blue-100' : 'bg-blue-50'"
        >
          <div class="col-span-1 m-auto">
            <div class="border-b border-black">{{ item.name }}</div>
            <div>{{ item.inv_id }}</div>
          </div>
          <h4 class="col-span-3 m-auto">{{ item.supplier }}</h4>
          <div class="col-span-1 m-auto">
            <div class="border-b border-black">{{ (item.stock / item.size).toFixed(2) }}</div>
            <div>pcs</div>
          </div>
          <div class="col-span-2 m-auto">
            <div class="border-b border-black">{{ (item.need / item.size).toFixed(2) }}</div>
            <div>pcs</div>
          </div>
          <div class="col-span-2 m-auto">
            <div class="border-b border-black">
              {{ item.supplier === 'MENANTEA' ? 0 : (item.rop / item.size).toFixed(2) }}
            </div>
            <div>pcs</div>
          </div>
          <h4 class="col-span-1 m-auto">{{ item.stock <= item.rop ? 'RESTOCK' : 'OK' }}</h4>
          <div class="col-span-2 m-auto">
            <div class="border-b border-black">
              {{ ((item.need - item.stock) / item.size).toFixed(2) }}
            </div>
            <div>pcs</div>
          </div>
        </div>
      </div>
      <div v-else>
        {{ loadingMessage }}
      </div>
    </div>
  </div>
</template>
