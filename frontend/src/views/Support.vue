<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

// List of FAQ topics
const topics = [
  "Security",
  "Making Payments",
  "Selling a Car",
  "Financing",
  "Warranties & More",
  "Seeing a Car",
  "Buying a Car",
  "Finding a Car",
  "Safety Recalls"
]

const router = useRouter()

// Method to handle button clicks
const handleTopicClick = (topic) => {
  router.push({ name: 'TopicPage', params: { name: topic } })
}
</script>

<template>
  <header>
    <Navbar />
  </header>
  <div class="container">
    <!-- FAQ Buttons -->
    <div class="row">
      <h1 class="row justify-content-center">FAQ & Support</h1>
      <h6 class="row justify-content-center">Find answers or connect with a human.</h6>
    </div>
    <div class="row align-items-center">
      <h6>Browse by topic</h6>
      <div v-for="topic in topics" :key="topic" class="col-auto">
        <button type="button" class="btn btn-outline-primary" @click="handleTopicClick(topic)">
          {{ topic }}
        </button>
      </div>
    </div>

    <!-- FAQ Cards -->
    <div class="row justify-content-center mt-4">
      <h6 class="row">Reach a car-buying expert</h6>
      <div class="col-lg-2 card mb-3" style="width: 30rem;">
        <div class="card-body">
          <h3 class="row justify-content-center card-title">Have questions? Just ask</h3>
          <h6 class="row justify-content-center card-subtitle mb-2 text-muted">You can chat with us 24/7.</h6>
          <button class="btn btn-primary w-100 py-2" type="submit">CHAT WITH US</button>
        </div>
      </div>
      <div class="col-lg-2 card mb-3" style="width: 30rem;">
        <div class="card-body">
          <h3 class="row justify-content-center card-title">Ready to talk?</h3>
          <h6 class="row justify-content-center card-subtitle mb-2 text-muted">Want to talk to someone over the phone? Give our customer experience center a call:</h6>
          <button class="btn btn-primary w-100 py-2" type="submit">(800) 123 - 1234</button>
        </div>
      </div>
      <div class="col-lg-2 card mb-3" style="width: 30rem;">
        <div class="card-body">
          <h3 class="row justify-content-center card-title">Contact CarMax Auto Finance</h3>
          <h6 class="row justify-content-center card-subtitle mb-2 text-muted">For questions about your {{ title }} Auto Finance account:
Hours are Mon—Fri: 8am—10pm and Sat 9am—6pm ET</h6>
          <button class="btn btn-primary w-100 py-2" type="submit">(800) 123 - 1235</button>
        </div>
      </div>
      <div class="col-lg-2 card mb-3" style="width: 30rem;">
        <div class="card-body">
          <h3 class="row justify-content-center card-title">Reach us on social media</h3>
          <h6 class="row justify-content-center card-subtitle mb-2 text-muted">Our customer relations team is also happy to help via our social channels.</h6>
          <button class="btn btn-primary w-100 py-2" type="submit">CHAT WITH US</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
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
  
.matters {
  background-color: whitesmoke;
}
</style>
