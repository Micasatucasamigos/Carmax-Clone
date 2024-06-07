<template>
  <nav>
    <ol class="breadcrumb">
      <li
        v-for="{crumb,ci} in crumbs"
        :key="ci"
        class="breadcrumb-item align-items-center"
      >
        <button class="btn btn-link" :class="{ disabled: isLast(ci) }" @click="selected(crumb)"></button>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// Define the props
const props = defineProps({
  crumbs: {
    type: Array,
    required: true
  }
})

// Define the emits
const emit = defineEmits(['selected'])

// Define the isLast method
const isLast = (index) => {
  return index === props.crumbs.length - 1
}

// Define the selected method
const selected = (crumb) => {
  emit('selected', crumb)
}
</script>

<style scoped>
.breadcrumb {
  background-color: white;
  color:black;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.37rem;
}
</style>