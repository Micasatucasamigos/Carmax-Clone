<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <h2 class="accordion-header" :id="'flush-heading' + (index + 1)">
        <button
          class="accordion-button collapsed"
          type="button"
          :data-bs-toggle="'collapse'"
          :data-bs-target="'#flush-collapse' + (index + 1)"
          :aria-controls="'flush-collapse' + (index + 1)">
          {{ item.question }}
        </button>
      </h2>
      <div
        :id="'flush-collapse' + (index + 1)"
        class="accordion-collapse collapse"
        :aria-labelledby="'flush-heading' + (index + 1)"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    question: "Can I sell my car to BestCars without buying a car from BestCars?",
    answer: "Yes, and our offer will be the same whether you're buying from us or not."
  },
  {
    question: "Is the online offer a real offer or an estimate?",
    answer: "We provide real offers, both online and in-store, and all of our offers are good for 7 days. If you have an online offer to redeem, bring it to any BestCars store. Once we verify that your car's condition matches the information we received online, you'll leave with payment in hand. Some offers are adjusted after the verification process."
  },
  {
    question: "Can I negotiate my online offer?",
    answer: "No, all of our offers are firm and are valid for 7 days."
  },
  {
    question: "Can I get both an online and in-store appraisal?",
    answer: "If you have an online offer, an additional appraisal isn't needed unless the offer is no longer valid. We use the same appraisal criteria online and in-store, and every car's condition is verified in person when an online offer is redeemed. We only adjust online offers if a car's condition differs from the information we received online."
  },
  {
    question: "Do I have to get my offer online?",
    answer: "No, you're always welcome to bring your car to a BestCars store for an in-store appraisal. To get an in-store appraisal, you can either make an appointment or simply stop by whenever it's convenient for you."
  },
  {
    question: "What do I do after I get an online offer?",
    answer: "If you want to redeem your offer and sell your car to BestCars, you have 7 days from the day the offer is made. You can either make an appointment or simply bring the car to us anytime we're open. We'll verify your car's condition, finalize your offer, and you'll be able to leave with payment in hand."
  },
  {
    question: "Will you pick up my vehicle from my home?",
    answer: "We currently offer pickup service in select markets. You can also redeem an offer at any BestCars store."
  },
  {
    question: "Do I need an appointment to sell my car?",
    answer: "No, you don't need an appointment to sell your car. However, an appointment will help us get you in and out in as little time as possible."
  },
  {
    question: "Do I have to sell my car at the same location that gave me an offer?",
    answer: "You may sell your car at any BestCars location with the same written offer for seven days. If your appraisal was completed more than seven days ago, we will re-appraise your car and provide an updated offer."
  },
  {
    question: "How do you determine my offer?",
    answer: "We review current market conditions as well as your car's specific year, make, model, mileage, and vehicle history report. We examine your car's condition inside and out for major defects like frame or flood damage. We also test drive your car and check to see if the brakes and turn signals are working (among other things). If repairs are needed, we may adjust our offer accordingly. In regard to cleanliness, the long-term maintenance and care of your car is what's most important in determining our appraisal offer."
  },
  {
    question: "What do I need to sell my car?",
    answer: "Requirements can vary from state to state, but there are a few items you'll need no matter where you are."
  },
  {
    question: "How do I get paid for my car?",
    answer: "You will leave with payment in hand the same day you sell us your car. We pay with a bank draft, which is a type of check where payment is guaranteed to be available by the issuing bank. A bank draft must be deposited and cannot be cashed. Before attempting to draw on the bank draft, always check with your bank to see if they have a specific hold policy on deposits."
  },
  {
    question: "What if I owe more on my car than the amount of your offer?",
    answer: "If your payoff amount is more than the offer for your car, the difference is called negative equity. In some cases, the negative equity can be included in your financing when you buy a BestCars car. If not, we'll calculate the difference between your pay-off and our offer to you and you can pay BestCars directly. If the amount you owe is less than $250, we will accept a personal check. BestCars stores accept cashier's checks, certified checks, certified funds, cash, and debit cards. BestCars Car Buying Centers (locations that only buy cars) can accept cashier's checks, certified checks, and certified funds. Our written offers are good for seven days, giving you time to get any necessary funds to settle your transaction."
  },
  {
    question: "Do you buy leased cars?",
    answer: "Yes! In most cases, you can sell your leased car in almost the same way as any other financed car. We'll appraise the car, then contact the leasing company for a payoff quote and process any equity you might have. Please note that BestCars cannot purchase a vehicle currently leased through the following companies: Nissan Motor Acceptance, Infiniti Financial Services, Honda Finance, Southeast Toyota Financial, GM Financial, Ford Credit, Mazda Credit, World Omni, Volvo Financial, Lincoln Credit, Acura Financial, BMW Financial Services, Volkswagen Credit, Audi Financial Services, Ally Financial and Tesla. Also, be aware that your leased car might not be eligible for trade-in tax savings. Check with your leasing company for complete details."
  }
])

const title = ref('BestCars')
</script>

<style scoped>

</style>
