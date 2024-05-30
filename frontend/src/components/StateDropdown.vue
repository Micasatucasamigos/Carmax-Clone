<template>
    <div class="input-group mb-3">
      <select class="custom-select" id="inputGroupSelect01">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('BestCars')
</script>

<style scoped>
  /* .flex-container {
    display: flex;
  } */
  /* * {
    background-color: lightblue;
  }
  footer {
    margin: 0;
    height: 100%;
  }
  h1 {
    color: white;
  }
  h2 {
    color: white;
  }
  a {
    color: black;
  } */
</style>