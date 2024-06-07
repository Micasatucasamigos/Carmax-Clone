<template>
  <div class="input-group pb-2">
      <select class="custom-select w-100 custom-height ps-2" id="inputGroupSelect01">
        <option selected>Term Length</option>
        <option value="1">36 months</option>
        <option value="2">48 months</option>
        <option value="3">60 months</option>
        <option value="2">72 months</option>
      </select>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('BestCars')
</script>

<style>
.custom-height {
  height: 50px;
}
</style>