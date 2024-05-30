<template>
  <!-- Footer section -->
<div class="container-fluid px-0 bg-custom-footer">
  <div class="container">
    <footer class="row">
      <!-- Socials Icon Links -->
      <div class="d-flex flex-column flex-sm-row py-4 my-4 border-bottom-dark">
        <h1 class="nav-item"><RouterLink to="/" class="nav-link link-body-emphasis px-2 active" aria-current="page">{{title}}</RouterLink></h1>
        <a href="https://www.instagram.com/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
          </svg>
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
          </svg>
        </a>
      </div>
      <!-- Page Links -->
      <div class="row row-cols-lg-4 justify-content-center">
        <div class="col-6 col-md-2 mb-3">
          <h5>Shop</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Browse by category</a></li>
            <li class="nav-item"><RouterLink to="/shop" class="nav-link link-body-emphasis px-2">View all inventory</RouterLink></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"></a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Find a store</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-2 mb-3">
          <h5>Sell/Trade</h5>
          <ul class="nav flex-column">
            <li class="nav-item"><RouterLink to="/selltrade" class="nav-link link-body-emphasis px-2">How it works</RouterLink></li>
            <li class="nav-item"><RouterLink to="/selltrade" class="nav-link link-body-emphasis px-2">Get an online offer</RouterLink></li>
          </ul>
        </div>
        <div class="col-6 col-md-2 mb-3">
          <h5>Finance</h5>
          <ul class="nav flex-column">
            <li class="nav-item"><RouterLink to="/finance" class="nav-link link-body-emphasis px-2">How it works</RouterLink></li>
            <li class="nav-item"><RouterLink to="/finance" class="nav-link link-body-emphasis px-2">Get pre-qualified</RouterLink></li>
          </ul>
        </div>
        <div class="col-6 col-md-2 mb-3">
          <h5>About</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><router-link to="/aboutus" class="dropdown-item">About Best Cars</router-link></li>
            <li class="nav-item mb-2"><router-link to="/support" class="dropdown-item">Contact Us</router-link></li>          
          </ul>
        </div>
      </div>
      <div class="row">
          <p class="text-center">By using {{ title }}, you consent to the monitoring and storing of your interactions with the website, including with a {{ title }} vendor, for use in improving and personalizing our services. See our Privacy Policy for details.
        </p>
        </div>
      <div class="flex-column flex-sm-row justify-content-center py-4 my-4 border-top-dark">
        <p class="text-center">Privacy Policy | Do Not Sell or Share My Information | Financial Privacy Policy | Interest-Based Ads | Terms of Use | Responsible Disclosure | {{title}} Recall Policy | CA Supply Chain Transparency | Accessibility | Feedback</p>
        <p class="text-center">© 2024 {{ title }}, Inc. All rights reserved.</p>
      </div>
    </footer>
  </div>
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
  }
  .bg-custom-footer {
  background-color: gainsboro; /* Replace with your desired background color */
}
.border-top-dark {
  border-top: 1px solid #000; /* You can change the color to your preferred shade */
}
.border-bottom-dark {
  border-bottom: 1px solid #000; /* You can change the color to your preferred shade */
}
</style>