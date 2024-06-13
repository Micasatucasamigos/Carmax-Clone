<template>
  <header>
    <Navbar />
  </header>
  <!-- Who we are section -->
  <div class="container px-4 py-4" id="icon-grid">
    <h1 class="row pb-4 justify-content-center">Who We Are</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 g-4 py-1">
      <div class="col d-flex align-items-start">
        <div>
          <p>At {{ title }}, our commitment to innovation and iconic customer experiences have made us the nation's largest retailer of used cars. As the original disruptor of the automotive industry, our “no-haggle” prices transformed car buying and selling from a stressful, dreaded event into the honest, straightforward experience all people deserve. We've been raising the bar on customer experiences ever since.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <p>Today, our customers have the ability to buy completely on their terms, whether that's online, in the store, or using a seamless combination of both. And as we move into the future, we stay committed to transparency, to creating offerings that put you in control, and delivering iconic car buying experiences unlike any you've seen before.</p>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
          <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
        </svg>
        <div>
          <p>24-hour test drives</p>
        </div>
      </div>
      <div class="col">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-house-heart" viewBox="0 0 16 16">
          <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982"/>
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
        </svg>
        <div>
          <p>Home delivery</p>
        </div>
      </div>
      <div class="col">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
          <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
          <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
          <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
        </svg>
        <div>
          <p>Express pickup</p>
        </div>
      </div>
    </div>
  </div>
  <!-- What matters to us section -->
  <div class="container-fluid px-0 py-5 bg-custom" id="icon-grid">
    <div class="container px-4">
      <h1 class="row pb-4 justify-content-center">What Matters To Us</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 g-4 py-1">
        <div class="col d-flex align-items-start">
          <div class="img-container">
            <img src="../assets/what_matters_associate_1x.jpg" class="img-fluid">
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="text-container">
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Our Associates</h3>
            <p>Our success is possible because of the hard work and dedication of our 30,000+ associates nationwide. If you join our team, you'll join a culture of transparency, integrity, and an unwavering focus on doing what's right for each other, our customers, and our communities. We're committed to helping you innovate, learn, grow, and shape your career in ways you haven't even imagined.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="text-container">
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Our Customers</h3>
            <p>We put integrity and transparency at the heart of every interaction with you, whether that interaction is online, on the phone, or in person. We are committed to bringing clarity to each decision you make so you can feel confident about buying the car you love – and enjoy the ride while you do it.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="img-container">
            <img src="../assets/what_matters_customer_1x.jpg" class="img-fluid">
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="img-container">
            <img src="../assets/what_matters_community_1x.jpg" class="img-fluid">
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="text-container">
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Our Communities</h3>
            <p>We invest both time and resources where we live and work, not only because it's the right thing to do, but also because we are passionate about helping our communities thrive. Between {{ title }} and The {{ title }} Foundation, we have invested over $100 million to date in causes important to our associates.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="text-container">
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Diversity & Inclusion</h3>
            <p>Our vision is for everyone, everywhere to have the same opportunity to reach their full potential. Our culture of innovation, diversity, and inclusion is grounded in our core values, where winning together is driven by embracing and celebrating our differences. At {{ title }}, every associate is welcomed, supported, and valued for their unique perspectives and backgrounds.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="img-container">
            <img src="../assets/what_matters_diversity_1x.jpg" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- What we do section -->
  <div class="container what-we-do px-4 py-5" id="icon-grid">
    <h1 class="row mb-4 justify-content-center ">What We Do</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-5 py-1">
      <div class="col d-flex align-items-start justify-content-end">
        <div>
          <img src="../assets/icon_what_we_do_stores.svg">
          <h1 class="row justify-content-center">240+</h1>
          <h5 class="text-center">stores in 41 states</h5>
        </div>
      </div>
      <div class="col d-flex align-items-start justify-content-center">
        <div>
          <img src="../assets/icon_what_we_do_employee.svg">
          <h1 class="row justify-content-center">30,000+</h1>
          <h5 class="text-center">Employees</h5>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <img src="../assets/icon_what_we_do_inventory.svg">
          <h1 class="row justify-content-center">45,000+</h1>
          <h5 class="text-center">{{ title }} Certified cars</h5>
        </div>
      </div>
      <div class="col d-flex align-items-start justify-content-end">
        <div>
          <img src="../assets/icon_what_we_do_cars_sold.svg">
          <h1 class="row justify-content-center">11+ million</h1>
          <h5 class="text-center">cars sold</h5>
        </div>
      </div>
      <div class="col d-flex align-items-start justify-content-center">
        <div>
          <img src="../assets/icon_what_we_do_cars_appraised.svg">
          <h1 class="row justify-content-center">42+ million</h1>
          <h5 class="text-center">cars appraised</h5>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <img src="../assets/icon_what_we_do_cars_purchased.svg">
          <h1 class="row justify-content-center">12+ million</h1>
          <h5 class="text-center">cars purchased</h5>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
const title = ref('BestCars')
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.img-container {
  width: 100%;
  max-width: 100%;
}

.img-container img {
  width: 100%;
  height: auto;
}

.text-container {
  width: 100%;
}

.text-container h3,
.text-container p {
  margin-bottom: 1rem;
}
.bg-custom {
  background-color:gainsboro
}
.what-we-do {
  width: 50%;
}
.who-we-are {
  width: 50%;
}
</style>
