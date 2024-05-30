<template>
  <!-- Navbar header -->
  <nav class="bg-body-tertiary border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><RouterLink to="/" class="nav-link link-body-emphasis px-2 active" aria-current="page">BestCars</RouterLink></li>
        <li class="nav-item"><RouterLink to="/shop" class="nav-link link-body-emphasis px-2">Shop</RouterLink></li>
        <li class="nav-item"><RouterLink to="/selltrade" class="nav-link link-body-emphasis px-2">Sell/Trade</RouterLink></li>
        <li class="nav-item"><RouterLink to="/finance" class="nav-link link-body-emphasis px-2">Finance</RouterLink></li>
        <!-- Dropdown Menu -->
        <li class="nav-item">
          <div class="dropdown" @mouseover="showMoreMenu = true" @mouseleave="showMoreMenu = false">
            <button class="btn dropdown-toggle">
              More
            </button>
            <div class="dropdown-menu" :class="{ show: showMoreMenu }">
              <router-link to="/aboutus" class="dropdown-item">About Us</router-link>
              <router-link to="/support" class="dropdown-item">Support</router-link>
            </div>
          </div>
        </li>
      </ul>
      <ul class="nav">
        <li class="nav-item">
          <div class="dropdown" @mouseover="showLocationMenu = true" @mouseleave="showLocationMenu = false">
            <button class="btn dropdown-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
            </button>
            <div class="dropdown-menu" :class="{ show: showLocationMenu }">
              <RouterLink to="/login" class="nav-link link-body-emphasis px-2">Login</RouterLink>
              <RouterLink to="/signup" class="nav-link link-body-emphasis px-2">Sign Up</RouterLink>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <div class="dropdown" @mouseover="showUserMenu = true" @mouseleave="showUserMenu = false">
            <button class="btn dropdown-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
              </svg>
            </button>
            <div class="dropdown-menu" :class="{ show: showUserMenu }">
              <RouterLink to="/login" class="nav-link link-body-emphasis px-2">Login</RouterLink>
              <RouterLink to="/signup" class="nav-link link-body-emphasis px-2">Sign Up</RouterLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <!-- Searchbar header -->
  <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <form class="col-12 col-lg-auto mb-3 mb-lg-0 search" role="search">
        <input type="search" class="form-control" placeholder="Search by make, model, or keyword" aria-label="Search">
      </form>
    </div>
  </header>
</template>

<script setup>
  import { ref } from 'vue'
  const title = ref('BestCars')
  const showMoreMenu = ref(false)
  const showLocationMenu = ref(false)
  const showUserMenu = ref(false)
</script>

<style scoped>
  .search {
    width: 100%;
  }
* {
  background-color: gainsboro;
}
nav {
  margin: 0;
  padding: 0;
}
</style>