<script setup lang="ts">
import InputComponent from './InputComponent.vue'
import TextAreaComponent from './InputComponentTextArea.vue'
import SelectComponent from './InputComponentSelect.vue'
defineProps<{
  inv_id: string
  name: string
  size: number
  stock: number
  unit: string
  address: string
  delivery_duration: number
  delivery_delay: number
}>()
</script>

<template>
  <div>
    <InputComponent
      label="Inventory ID"
      placeholder="inventory id"
      type="text"
      :value="inv_id"
      @update="(value) => $emit('inv_id', value)"
    />
    <InputComponent
      label="Name"
      placeholder="item name"
      type="text"
      :value="name"
      @update="(value) => $emit('name', value)"
    />
    <InputComponent
      label="Size"
      placeholder="item size"
      type="number"
      :value="size"
      @update="(value) => $emit('size', parseInt(value, 10))"
    />
    <InputComponent
      label="Stock"
      placeholder="stock count"
      type="number"
      :value="stock"
      @update="(value) => $emit('stock', parseInt(value, 10))"
    />
    <SelectComponent
      label="Unit"
      :options="['gram', 'ml', 'pcs', 'slice']"
      :value="unit"
      @update="(value) => $emit('unit', value)"
    />
    <TextAreaComponent
      label="Supplier address and phone"
      placeholder="address"
      :rows="5"
      :cols="33"
      :value="address"
      @update="(value) => $emit('address', value)"
    >
    </TextAreaComponent>
    <InputComponent
      label="Delivery time (day)"
      placeholder="delivery time"
      type="number"
      :value="delivery_duration"
      @update="(value) => $emit('delivery_duration', parseInt(value, 10))"
    />
    <InputComponent
      label="Estimated delay (day)"
      placeholder="delivery delay"
      type="number"
      :value="delivery_delay"
      @update="(value) => $emit('delivery_delay', parseInt(value, 10))"
    />
  </div>
</template>
