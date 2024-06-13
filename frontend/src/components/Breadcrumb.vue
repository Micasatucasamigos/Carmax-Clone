<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(crumb, ci) in crumbs"
        :key="ci"
        class="breadcrumb-item"
        :class="{ active: isLast(ci) }"
        aria-current="page"
      >
        <button
          v-if="!isLast(ci)"
          class="btn btn-link"
          @click="selected(crumb)"
        >
          {{ crumb }}
        </button>
        <span v-else>{{ crumb }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

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

// Get the router instance
const router = useRouter()

// Define the selected method
const selected = (crumb) => {
  emit('selected', crumb)
  
  // Navigate to the Support page when the first breadcrumb is clicked
  if (crumb === 'Support') {
    router.push({ name: 'support' })
  }
}
</script>

<style scoped>
.breadcrumb-item+.breadcrumb-item::before {
  content: '>'; /* Change this to your desired divider */
}
</style>
