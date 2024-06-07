<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import StateDropdown from "../components/StateDropdown.vue"
import CreditDropdown from "../components/CreditDropdown.vue"
import TermlengthDropdown from "../components/TermlengthDropdown.vue"
import FinancingAccordian from '../components/FinancingAccordian.vue'


</script>

<template>
  <!-- Navbar Component -->
  <header>
    <Navbar/>
  </header>

  <div class="container">
    <h1 class="row justify-content-center">Get financing results without impacting your credit</h1>
    <div class="row justify-content-center">
      <div class="card mb-3" style="width: 30rem;">
        <div class="card-body">
          <h3 class="row justify-content-center card-title">Pre-qualify with no impact to your credit</h3>
          <h6 class="row justify-content-center card-subtitle mb-2 text-muted">Most cars qualify, some we'll ask to see in person.</h6>
          <div class="form-floating pb-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">License Plate Number</label>
          </div>
          <StateDropdown/>
          <CreditDropdown/>
          <div class="form-floating pb-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">Zip Code</label>
          </div>
          <div class="form-floating pb-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">VIN</label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">GET PRE-QUALIFIED</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <h1 class="row justify-content-center">Car payment calculator</h1>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card mb-3" style="width: 100%;">
                <div class="card-body">
                    <div class="form-floating pb-2">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                        <label for="floatingInput">Vehicle Price</label>
                    </div>
                    <div class="form-floating pb-2">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                        <label for="floatingInput">Down Payment</label>
                    </div>
                    <StateDropdown/>
                    <CreditDropdown/>
                    <div class="form-floating pb-2">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                        <label for="floatingInput">APR</label>
                    </div>
                    <p>Estimated based on your credit score.</p>
                    <TermlengthDropdown/>
                    <button class="btn btn-primary w-100 py-2" type="submit">GET PRE-QUALIFIED</button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card mb-3" style="width: 100%;">
                <div class="card-body">
                    <h6 class="row justify-content-center card-subtitle mb-2 text-muted">Most cars qualify, some we'll ask to see in person.</h6>
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
                    <button class="btn btn-primary w-100 py-2" type="submit">SHOP WITH THIS BUDGET</button>
                </div>
            </div>
        </div>
    </div>
  </div>

  <div class="container">
    <h1 class="row justify-content-center">Financing FAQs</h1>
    <FinancingAccordian/>
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
</style>