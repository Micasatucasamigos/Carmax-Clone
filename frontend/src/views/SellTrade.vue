<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import StateDropdown from "../components/StateDropdown.vue"
import SellingAccordian from "../components/SellingAccordian.vue"

</script>

<template>
  <!-- Navbar Component -->
  <header>
    <Navbar/>
  </header>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <h1 class="row mb-4 justify-content-center">Sell Your Car on Your Terms</h1>
    </div>
    <!-- Real Offer Card -->
    <div class="row justify-content-center">
      <div class="card mb-5" style="width: 30rem;">
        <div class="card-body">
          <h3 class="row justify-content-center card-title">Get a Real Offer in Minutes</h3>
          <h6 class="row justify-content-center card-subtitle mb-4 text-muted">Most cars qualify, some we'll ask to see in person.</h6>
          <div class="form-floating pb-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">License Plate Number</label>
          </div>
          <StateDropdown/>
          <div class="form-floating pb-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">Zip Code</label>
          </div>
          <div class="form-floating pb-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">VIN</label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">GET MY OFFER</button>
        </div>
      </div>
    </div>
    <!-- How it Works Card -->
    <div class="row justify-content-center ">
      <div class="card mb-5" style="width: 65rem;">
        <div class="card-body">
          <h3 class="row justify-content-center card-title mb-4">How it Works</h3>
          <div class="row justify-content-center">
            <div class="col row justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-laptop " viewBox="0 0 16 16">
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
              </svg>
              <h6 class="row justify-content-center">Get your offer</h6>
              <h6 class="row justify-content-center card-subtitle mb-2 text-muted">It takes 2 minutes.</h6>
            </div>
            <div class="col row justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
              </svg>
              <h6 class="row justify-content-center">Make an appointment</h6>
              <h6 class="row justify-content-center card-subtitle mb-2 text-muted">Redeem it or compare your options for 7 days.</h6>              
            </div>
            <div class="col row justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
              </svg>
              <h6 class="row justify-content-center">Come get paid</h6>
              <h6 class="row justify-content-center card-subtitle mb-2 text-muted">We'll verify your offer and pay you on the spot.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Center Section -->
    <div class="container-fluid container-now mb-5" id="icon-grid">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 g-5 py-1">
          <div class="col d-flex align-items-start">
            <div class="img-container">
              <img src="../assets/Selltrade1.webp" class="img-fluid">
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="text-container">
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">We'll buy yours even if you don't buy ours</h3>
              <p>Whether it goes on our lot or to auction, we want to make an offer for your car.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="text-container">
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Same-day payment, 7-day offer</h3>
              <p>Leave with payment in hand or take up to 7 days to compare your options.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="img-container">
              <img src="../assets/Selltrade2.webp" class="img-fluid">
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="img-container">
              <img src="../assets/Selltrade3.webp" class="img-fluid">
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="text-container">
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">An offer you can count on</h3>
              <p>No matter where you sell, start with a custom offer from BestCars.</p>
            </div>
          </div>
        </div>
      </div>
  </div>
    <!-- What To Bring With You Card -->
    <div class="row justify-content-center mb-5">
      <div class="card mb-3" style="width: 30rem;">
        <div class="card-body">
          <h3 class="row justify-content-center card-title">What To Bring With You</h3>
          <h6 class="row justify-content-center card-subtitle mb-2 text-muted">Requirements vary from state to state.</h6>
          <ol class="mt-4">
            <li>Valid, state-issued ID for all titleholders (all titleholders should be present).</li>
            <li>Valid, current vehicle registration.</li>
            <li>All keys, fobs, and remotes.</li>
            <li>Payoff information: Bring your account number and lender phone number. Have a co-signer? Their signature is needed to sell your car.</li>
            <li>Special documentation needed: Type of documentation varies based on why titleholder(s) can’t come to BestCars.</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="faq mb-5">
      <h3 class="row justify-content-center card-title mb-4">Frequently Asked Questions</h3>
      <SellingAccordian/>
    </div>
  </div>
  <footer>
    <Footer/>
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
.img-container {
  width: 100%; /* This will make the container take the full width of the parent */
  max-width: 300px; /* You can adjust the max-width to control the image size */
  margin: 0 auto; /* This will center the image container */
}

.img-container img {
  width: 100%; /* This will make the image take the full width of the container */
  height: auto; /* This will maintain the aspect ratio of the image */
}
.container-now {
  width: 35%;
}
</style>