<template>
  <!-- Navbar -->
  <nav class="py-2 bg-body-tertiary border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><RouterLink to="/" class="nav-link link-body-emphasis px-2 active" aria-current="page">{{ title }}</RouterLink></li>
      </ul>
    </div>
  </nav>
  <!-- Login form -->
  <div class="container">
    <div class="row">
      <div class="col-lg-6 mx-auto">
        <form class="form-signin">
          <div class="py-5">
            <h1>Create an account</h1>
            <p>To continue, create a {{ title }} account.</p>
          </div>
          <div class="form-floating pb-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">First Name</label>
          </div>
          <div class="form-floating pb-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">Last Name</label>
          </div>
          <div class="form-floating pb-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating pb-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">Phone Number</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
            <label for="floatingPassword">Password</label>
            <p>Include a minimum of 8 characters and at least one number and one letter. No spaces, please.</p>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">CREATE ACCOUNT</button>
          <p class="pb-5 pt-2">Already have an account? <span><RouterLink to="/login">Sign in</RouterLink></span> </p>
        </form>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <div class="border-top"></div>
  <div class="container">
    <div class="row d-flex flex-column flex-sm-row justify-content-between py-4 ">
      <div class="col-lg-6 mx-auto">
        <p>By using {{ title }}.com, you consent to the monitoring and storing of your interactions with the website, including with a {{ title }} vendor, for use in improving and personalizing our services. See our Privacy Policy for details.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('BestCars')
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>