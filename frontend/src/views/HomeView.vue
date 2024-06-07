<template>
  <header>
    <Navbar/>
  </header>
  <div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/13 ford cmax.webp" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/15 cadillac cts.webp" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/13 ford escape.webp" class="d-block w-100" alt="...">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <div class="container">
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
    <div class="row justify-content-center">
      <div class="card mb-3" style="width: 30rem;">
        <div class="card-body">
          <h6 class="row justify-content-center card-subtitle mb-2 text-muted">SELL/TRADE IN</h6>
          <h3 class="row justify-content-center card-title">Real offers.</h3>
          <h3 class="row justify-content-center card-title">Really fast.</h3>
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
          <button class="btn btn-primary w-100 py-2" type="submit">GET STARTED</button>
          <h6 class="row justify-content-center card-title">Most qualify. Some we’ll ask to verify in-person</h6>
        </div>
      </div>
    </div>
  </div>
  
  <footer>
    <Footer/>
  </footer>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

</script>

<style scoped>
</style>
