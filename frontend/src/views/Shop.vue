<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

// List of all car cards data
const allCars = ref([
  { imgSrc: '../assets/2012 toyota sienna le 110.webp', title: '2012 Toyota Sienna LE', price: '$15,998', mileage: '110K mi' },
  { imgSrc: '../assets/2012 jeep patriot latitude 90.webp', title: '2012 Jeep Patriot Latitude', price: '$13,599', mileage: '90K mi' },
  { imgSrc: '../assets/2012 acura mdx 74.webp', title: '2012 Acura MDX', price: '$16,998', mileage: '74K mi' },
  { imgSrc: '../assets/2012 cadillac cts 98.webp', title: '2012 Cadillac CTS', price: '$15,998', mileage: '98K mi' },
  { imgSrc: '../assets/12 nissan versa sv.webp', title: '2012 Nissan Versa SV', price: '$12,599', mileage: '74K mi' },
  { imgSrc: '../assets/2012 Jeep Grand cherokee laredo.webp', title: '2012 Jeep Grand Cherokee Laredo', price: '$15,998', mileage: '94K mi' },
  { imgSrc: '../assets/2012 nissan sentra sr.webp', title: '2012 Nissan Sentra SR', price: '$11,998', mileage: '104K mi' },
  { imgSrc: '../assets/2012 ford taurus sho.webp', title: '2012 Ford Taurus SHO', price: '$15,998', mileage: '104K mi' },
  { imgSrc: '../assets/2012 Jeep Grand cherokee laredo 115.webp', title: '2012 Jeep Grand Cherokee Laredo', price: '$14,599', mileage: '115K mi' },
  { imgSrc: '../assets/2013 porsche boxster s.webp', title: '2013 Porsche Boxster S', price: '$46,998', mileage: '33K mi' },
  { imgSrc: '../assets/2013 porsche panamera gts 59.webp', title: '2013 Porsche Panamera GTS', price: '$38,998', mileage: '59K mi' },
  { imgSrc: '../assets/2013 porsche 911 carrera 4s 54.webp', title: '2013 Porsche 911 Carrera 4S', price: '$73,998', mileage: '54K mi' },
  { imgSrc: '../assets/2013 porsche boxster 14.webp', title: '2013 Porsche Boxster', price: '$40,998', mileage: '14K mi' },
  { imgSrc: '../assets/2013 porsche cayman 30.webp', title: '2014 Porsche Cayman', price: '$47,998', mileage: '30K mi' },
  { imgSrc: '../assets/2015 Porsche Macan S 27.webp', title: '2015 Porsche Macan S', price: '$33,998', mileage: '27K mi' },
  { imgSrc: '../assets/2015 Porsche Macan S 50.webp', title: '2015 Porsche Macan S', price: '$29,998', mileage: '50K mi' },
  { imgSrc: '../assets/2015 Porsche Macan Turbo 59.webp', title: '2015 Porsche Macan Turbo', price: '$32,998', mileage: '59K mi' },
  { imgSrc: '../assets/2015 Porsche Cayman 33.webp', title: '2015 Porsche Cayman', price: '$47,998', mileage: '33K mi' },
  { imgSrc: '../assets/2016 Porsche Macan S 58.webp', title: '2016 Porsche Macan S', price: '$29,998', mileage: '58K mi' },
  { imgSrc: '../assets/2022 BMW M4 Comp.webp', title: '2022 BMW M4 Competition', price: '$75,998', mileage: '7K mi' },
  { imgSrc: '../assets/2022 BMW 330i xdrive 20.webp', title: '2022 BMW 330i xDrive', price: '$39,998', mileage: '20K mi' },
  { imgSrc: '../assets/2022 bmw 840i gran coupe 36.webp', title: '2022 BMW 840i Gran Coupe', price: '$59,998', mileage: '36K mi' },
  { imgSrc: '../assets/2022 bmw 530e plugin hybrid xdrive 10.webp', title: '2022 BMW 530e Plug-in Hybrid xDrive', price: '$46,998', mileage: '10K mi' },
  { imgSrc: '../assets/2022 bmw x5 sdrive40i 34.webp', title: '2022 BMW X5 sDrive40i', price: '$38,998', mileage: '34K mi' }

])

// Number of items to display initially and on each load more click
const itemsToShow = ref(21)

// Method to load more items
const loadMore = () => {
  itemsToShow.value += 21
}

// Function to resolve image paths
const resolveImagePath = (path) => {
  return new URL(path, import.meta.url).href
}

// State for the dropdown
const isDropdownOpen = ref(false)

// Method to toggle the dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// Method to close the dropdown when clicking outside
const closeDropdown = (event) => {
  if (!event.target.closest('.dropdown')) {
    isDropdownOpen.value = false
  }
}

// Add event listener for clicking outside
document.addEventListener('click', closeDropdown)
</script>

<template>
  <!-- Navbar Component -->
  <header>
    <Navbar/>
  </header>
  <div class="container">
    <div class="row">
      <!-- Vertical Filter Navbar -->
      <nav class="col-lg-3 col-md-4 col-sm-12 nav flex-column sticky-nav">
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" @click.prevent="toggleDropdown">
            Make
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" @click.prevent="toggleDropdown">
            Body Type
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" @click.prevent="toggleDropdown">
            Fuel Type
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" @click.prevent="toggleDropdown">
            Year
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" @click.prevent="toggleDropdown">
            Price
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" @click.prevent="toggleDropdown">
            Mileage
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" @click.prevent="toggleDropdown">
            Color
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" @click.prevent="toggleDropdown">
            Drivetrain
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" @click.prevent="toggleDropdown">
            Transmission
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" @click.prevent="toggleDropdown">
            Engine
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </nav>
      
      <!-- Car Cards -->
      <div class="col-lg-9 col-md-8 col-sm-12">
        <div class="row">
          <div v-for="(car, index) in allCars.slice(0, itemsToShow)" :key="index" class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="card">
              <a href="#" class="btn"><img :src="resolveImagePath(car.imgSrc)" class="card-img-top" alt="..."></a>
              <div class="card-body">
                <h6>{{ car.title }}</h6>
                <h4 class="card-title">{{ car.price }} | {{ car.mileage }}</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <button v-if="itemsToShow < allCars.length" @click="loadMore" class="btn btn-primary">Load More</button>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>


<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.sticky-nav {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
}
</style>
