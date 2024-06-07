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
    question: "Does CarMax offer financing?",
    answer: "Yes. We offer financing through several finance sources, including CarMax Auto Finance, a division of CarMax. Most of our customers’ financing decisions are available in 5 minutes or less."
  },
  {
    question: "What does pre-qualification mean?",
    answer: "Generally, a pre-qualification is when a finance company or lender does a basic review of your information and credit history to determine if you’re likely to qualify for financing a car. A pre-qualification usually results in a soft credit inquiry, which won’t impact your credit score."
  },
  {
    question: "How does pre-qualification work?",
    answer: "With CarMax, you can choose to pre-qualify on a specific vehicle or a dollar amount. Simply fill out a pre-qualification request, which will ask for personal, income, and housing information. Then our finance sources will return a decision (usually within 5 minutes). You can use your pre-qualification to shop for a car in our nationwide inventory with your personalized financing terms."
  },
  {
    question: "Will pre-qualifying impact my credit score?",
    answer: "No. For pre-qualification, CarMax’s finance sources use soft inquiries, which have no impact on your credit score. Pre-qualification allows you to shop for a car with your personalized financing terms. Once you’re ready to buy, you’ll have to submit a credit application to get specific offer terms. This credit application will be a hard inquiry, which may impact your credit score."
  },
  {
    question: "What's the benefit of getting pre-qualified?",
    answer: "A pre-qualification is a powerful shopping and affordability tool. Getting pre-qualified allows you to see personalized financing terms on CarMax’s inventory, so you can get an idea of what your monthly payment and APR would be. Pre-qualification allows you to find the right car in your budget without impacting your credit score."
  },
  {
    question: "This is my first car purchase. Can I finance with CarMax?",
    answer: "Our finance sources accommodate most credit profiles, and every CarMax customer can expect the same no-haggle pricing and exceptional customer service."
  },
  {
    question: "I don't have the best credit rating. Can I finance with CarMax?",
    answer: "Our finance sources accommodate most credit profiles, and every CarMax customer can expect the same no-haggle pricing and exceptional customer service."
  },
  {
    question: "Can I use a co-buyer?",
    answer: "Yes, you can add a co-buyer to your pre-qualification request or finance application. A co-buyer may help you receive more favorable terms. Keep in mind our finance sources will also review your co-buyer's information and credit history."
  },
  {
    question: "What can I do to ensure I get the best terms I can?",
    answer: "Our finance sources take multiple factors into consideration when determining whether to pre-qualify you. For example: they will review your credit history for things like on-time payments. If you're able to put more money down, that can lead to better financing terms. Double-check your credit reports, because if they are locked or frozen, our finance sources might not be able to pre-qualify you."
  },
  {
    question: "Why do I have to specify a down payment?",
    answer: "A down payment is one of the factors that our finance sources consider when reviewing a pre-qualification request. You aren’t locked in to the down payment you list on your pre-qualification request – you can change it on your credit application once you’re ready to buy, but your terms may change as a result."
  },
  {
    question: "What should my down payment be?",
    answer: "Your down payment should be whatever amount you feel comfortable paying. Most CarMax customers put down at least 8% of the purchase price. Keep in mind that a higher down payment will mean a lower monthly payment and also may help you get better terms."
  },
  {
    question: "How do CarMax's annual percentage rates (APRs) compare to competitors?",
    answer: "We have a variety of finance sources, so we’re able to offer competitive APRs to CarMax customers with a wide range of credit profiles. If you choose to finance with us, and you find a better APR within 3 business days of your purchase, you can replace your financing at no cost to you."
  },
  {
    question: "I am financing somewhere other than CarMax. What do I need to provide CarMax?",
    answer: "If you already have financing through your bank or an outside lender, you will need to provide a voucher, check or other proof of financing. We’ll help you with that process."
  },
  {
    question: "What's the difference between a pre-qualification and a pre-approval?",
    answer: "Typically, a pre-qualification results in a soft credit inquiry and won't impact your credit score, while a pre-approval results in a hard credit inquiry and may impact your credit score. CarMax's pre-qualification process uses a soft credit inquiry, so you can get pre-qualified with no impact to your credit and shop with your personalized finance terms. Once you're ready to buy, you'll have to submit a credit application to get final offer terms. That application will result in a hard inquiry, which may impact your credit score."
  }
])

const title = ref('BestCars')
</script>

<style scoped>

</style>
