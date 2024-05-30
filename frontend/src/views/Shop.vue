<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <!-- Navbar Component -->
  <header>
    <Navbar/>
  </header>
  <div class="container">
  <div class="row">
    <!-- Vertical Filter Navbar -->
    <nav class="col-lg-3 col-md-4 col-sm-12 nav flex-column">
      <a class="nav-link active" href="#">Active</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link active" href="#">Active</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </nav>
    <!-- Car Cards -->
    <div class="col-lg-9 col-md-8 col-sm-12">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2015 Cadillac CTS Luxury</h6>
              <h4 class="card-title">$17,998 | 108K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2017 Chevrolet Cruze LS</h6>
              <h4 class="card-title">$14,998 | 59K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card">
            <a href="#" class="btn"><img src="../assets/hero.webp" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h6>2018 Ford Focus SE</h6>
              <h4 class="card-title">$13,998 | 90K mi</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
  <footer>
    <Footer />
  </footer>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
