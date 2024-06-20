<template>
  <!-- Navbar -->
  <header>
    <Navbar/>
  </header>
  <!-- Title/Img Container -->
  <div class="container">
    <div class="row">
      <h1>2012 Acura MDX</h1>
      <div class="col-md-4">
        <h5>$16,998* | 74k miles</h5>
        <h4></h4>
      </div>
      <div class="card xsmall-card" @click="copyToClipboard">
        <div class="card-body">
          <p>Stock {{ text }}</p>
        </div>
      </div>
      <p>Stock #</p>
      <p>VIN #</p>
    </div>
  </div>
  <!-- Overview & Specs Container -->
  <div class="container">
    <div class="row">
      <h2>Overview</h2>
      <div class="col-md-4">
        <img src="../assets/newtires.svg" height="40px">
        <h5>New Tires</h5>
        <p>Replaced 4 tires to meet our standards</p>
      </div>
      <div class="col-md-4">
        <img src="../assets/lowmiles.svg" height="40px">
        <h5>Low Miles Per Year</h5>
        <p>Less than 9,000 miles per year</p>
      </div>
      <div class="col-md-4">
        <img src="../assets/8loaded.svg" height="40px">
        <h5>Loaded</h5>
        <p>Rear Entertainment System, Third Row Seat, 4WD/AWD, Leather Seats, Navigation System</p>
      </div>
      <div class="col-md-4">
        <h5>16 city/21 hwy</h5>
        <p>Miles per gallon</p>
      </div>
      <div class="col-md-4">
        <h5>6-cyl, Gas, 3.7L</h5>
        <p>Engine</p>
      </div>
      <div class="col-md-4">
        <h5>All Wheel Drive</h5>
        <p>Drive type</p>
      </div>
      <div class="col-md-4">
        <h5>Automatic</h5>
        <p>Transmission</p>
      </div>
      <div class="col-md-4">
        <h5>Up to 7</h5>
        <p>Passengers</p>
      </div>
      <div class="col-md-4">
        <h5>Gray/Black</h5>
        <p>Color</p>
      </div>
      <div class="col-md-4">
        <h5>None</h5>
        <p>Prior Use</p>
      </div>
    </div>
    <div class="row">
      <h2>Features & Specs</h2>
      <p>Explore trim levels and research for the Acura MDX</p>
      <div class="card">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="../assets/8.svg" class="" alt="Image Description" height="100px">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">Loaded</h2>
              <h6 class="card-subtitle mb-2 text-muted">More premium features than other cars like it.</h6>
              <a href="#" @click.prevent="showPopup">How is feature score calculated?</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <p>Rear entertainment system</p>
      </div>
      <div class="col-md-6">
        <p>Third Row Seat</p>
      </div>
      <div class="col-md-6">
        <p>All Wheel Drive</p>
      </div>
      <div class="col-md-6">
        <p>Leather Seats</p>
      </div>
      <div class="col-md-6">
        <p>Navigation System</p>
      </div>
      <div class="col-md-6">
        <p>Sunroof(s)</p>
      </div>
      <div class="col-md-6">
        <p>Running Boards</p>
      </div>
      <div class="col-md-6">
        <p>Rear View Camera</p>
      </div>
      <div class="col-md-6">
        <p>Rear Seat Heaters</p>
      </div>
      <div class="col-md-6">
        <p>Front Seat Heaters</p>
      </div>
    </div>
  </div>
  <!-- Pre-Qualified Container -->
  <div class="container">
    <div class="row">
      <h2>See your pre-qualified payments, upfront</h2>
      <div class="card col-md-4">
        <div class="row no-gutters">
          <div class="col-md-3">
            <img src="../assets/credit.svg" class="" alt="Image Description" height="55px">
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">No impact to your credit score</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-md-4">
        <div class="row no-gutters">
          <div class="col-md-3">
            <img src="../assets/time.svg" class="" alt="Image Description" height="55px">
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">Takes most customers less than 5 minutes</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-md-4">
        <div class="row no-gutters">
          <div class="col-md-3">
            <img src="../assets/finance.svg" class="]" alt="Image Description" height="55px">
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">See your terms for this car and others</h5>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary col-md-3">GET PRE-QUALIFIED</button>
    </div>
  </div>
  <!-- History Container -->
  <div class="container">
    <div class="row">
      <h2>History & inspection</h2>
      <div class="col-md-6">
        <h4>History</h4>
        <p>Access details like number of previous owners, reported accidents and more in your free AutoCheck® vehicle history report.</p>
      </div>
      <div class="col-md-6">
        <h4>Inspection</h4>
        <p>Every car we sell undergoes a 125-point inspection and reconditioning process. Anything that doesn’t meet our standards is repaired or replaced by our highly trained technicians. Learn more about CarMax Certified standards.</p>
      </div>
      <div class="">
        <img src="../assets/auto-check.svg"/>
      </div>
      <ul class="list-group col-md-6">
        <li class="list-group-item">
          <img src="../assets/check2.svg" class="img-fluid mr-3" alt="Image Description" style="max-width: 50px;">
          3 Owners
        </li>
        <li class="list-group-item">
          <img src="../assets/check2.svg" class="img-fluid mr-3" alt="Image Description" style="max-width: 50px;">
          No flood or frame damage
        </li>
        <li class="list-group-item">
          <img src="../assets/check2.svg" class="img-fluid mr-3" alt="Image Description" style="max-width: 50px;">
          No odometer problems
        </li>
      </ul>
      <ul class="list-group col-md-6">
        <li class="list-group-item">
          <img src="../assets/check2.svg" class="img-fluid mr-3" alt="Image Description" style="max-width: 50px;">
          No major dents or dings
        </li>
        <li class="list-group-item">
          <img src="../assets/check2.svg" class="img-fluid mr-3" alt="Image Description" style="max-width: 50px;">
          Tires & wheels checked 15 ways
        </li>
        <li class="list-group-item">
          <img src="../assets/check2.svg" class="img-fluid mr-3" alt="Image Description" style="max-width: 50px;">
          Deep cleaned interior
        </li>
      </ul>
      <div class="card medium-card">
        <div class="card-body">
          <img src="../assets/exclamation-triangle-fill.svg" class="img-fluid mr-3" alt="Image Description" style="max-width: 50px;">
          <a href="https://www.nhtsa.gov/recalls?vin=2HNYD2H44CH548541" target="blank">Check for Unrepaired Safety Recalls</a>
          <p>Some cars may have unrepaired safety recalls. CarMax is not a manufacturer-authorized repair facility, but your local Acura dealer will provide recall repair services for free.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Warranty Container -->
  <div class="container">
    <div class="row">
      <h2>Warranty</h2>
      <div class="col-md-6">
        <h4>Included with this car</h4>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <img src="../assets/check2.svg" class="img-fluid mr-3" alt="Image Description" style="max-width: 50px;">
                90-day or 4,000 mile limited warranty (whichever comes first)
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Guaranteed coverage on all parts and labor for covered systems during the warranty period, with zero cost to you. Systems Covered: Frame and Body; Engine; Transmission and Drive Shaft; Differential; Cooling, Electrical, Fuel, Steering, Suspension, Restraint, Brake, and Exhaust Systems; Gauges; HVAC; Tires; Wheels. Ask your store for specific details or to request a copy of our limited warranty.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <img src="../assets/exclamation-triangle-fill.svg" class="img-fluid mr-3" alt="Image Description" style="max-width: 50px;">
                No manufacturer warranty remaining
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>No manufacturer warranty remaining on this vehicle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Optional MaxCare® protection</h4>
      </div>
      <p>*Price excludes tax, title, tags and $150 documentary fee (not required by law). Price assumes that final purchase will be made in the State of TX, unless vehicle is non-transferable. Vehicle subject to prior sale. Applicable transfer fees are due in advance of vehicle delivery and are separate from sales transactions. See store for written details. We make every effort to provide accurate information, but please verify before purchasing.</p>
    </div>
  </div>
  <!-- Footer -->
  <footer>
    <Footer/>
  </footer>

  <!-- Popup Modal -->
  <div v-if="isPopupVisible" class="modal" tabindex="-1" role="dialog" style="display: block;">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">What is the feature summary?</h5>
          <button type="button" class="close" @click="closePopup" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>We analyze a year's worth of CarMax inventory data about features on a vehicle's make and model to generate a custom score for each vehicle so you can quickly see how a vehicle compares to others like it.</p>
          <h6>1-3 The Basics</h6>
          <p>More potential savings with more basic features.</p>
          <h6>4-7 Well Equipped</h6>
          <p>Some extra features compared to cars of the same make and model.</p>
          <h6>8-10 Loaded</h6>
          <p>More premium features than other cars like it.</p>          
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

const isPopupVisible = ref(false);

const showPopup = () => {
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
};
</script>

<style scoped>
.card-img {
  width: 100%;
  height: auto;
}

.modal {
  background-color: rgba(0, 0, 0, 0.5);
}


.medium-card {
  display: flex;
  flex-direction: column;
}

.card-body {
  flex: 1; /* Allow card body to grow and take up remaining space */
}

.xsmall-card {
  display: flex;
  flex-direction: column;
}
</style>

 

