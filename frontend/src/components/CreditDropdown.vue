<template>
  <div class="input-group pb-2">
      <select class="custom-select w-100 custom-height ps-2" id="inputGroupSelect01">
        <option selected>Credit Score</option>
        <option value="1">Excellent (800+ FICO® Score)</option>
        <option value="2">Very Good (740-799 FICO® Score)</option>
        <option value="3">Good (670-739 FICO® Score)</option>
        <option value="2">Fair (580-669 FICO® Score)</option>
        <option value="3">Challenged (- 580 FICO® Score)</option>
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