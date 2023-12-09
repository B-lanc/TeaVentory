<script setup lang="ts">
import InputComponent from './InputComponent.vue'
import TextAreaComponent from './TextAreaComponent.vue'
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
    ></InputComponent>
    <InputComponent
      label="Name"
      placeholder="item name"
      type="text"
      :value="name"
      @update="(value) => $emit('name', value)"
    ></InputComponent>
    <InputComponent
      label="Size"
      placeholder="item size"
      type="number"
      :value="size"
      @update="(value) => $emit('size', value)"
    ></InputComponent>
    <InputComponent
      label="Stock"
      placeholder="stock count"
      type="number"
      :value="stock"
      @update="(value) => $emit('stock', value)"
    ></InputComponent>
    <InputComponent
      label="Unit"
      placeholder="unit"
      type="text"
      :value="unit"
      @update="(value) => $emit('unit', value)"
    ></InputComponent>
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
      @update="(value) => $emit('delivery_duration', value)"
    ></InputComponent>
    <InputComponent
      label="Estimated delay (day)"
      placeholder="delivery delay"
      type="number"
      :value="delivery_delay"
      @update="(value) => $emit('delivery_delay', value)"
    ></InputComponent>
  </div>
</template>
