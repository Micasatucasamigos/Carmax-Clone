<template>
  
</template>

<script setup>
const faqData = {
  "Security": [
    {
      question: "What is two-step authentication?",
      answer: "Two-step authentication is a secure way to access your account. As an added layer of protection, when you sign in (step 1), we’ll send you a 6-digit security code via a phone call, text, or authenticator app (step 2). You’ll enter both your password and the security code you receive to get into your account."
    },
    {
      question: "I sold or lost my phone and cannot complete two-step authentication anymore. What should I do?",
      answer: "If you no longer have access to your smartphone or authenticator app, you can reset two-step authentication by following the self-service reset process. You'll need to log in with your password, verify your email account, and may be prompted to confirm some additional information."
    },
    {
      question: "My phone number is correct, but I'm not receiving the two-step authentication SMS texts. What can I do?",
      answer: "Yes, and our offer will be the same whether you're buying from us or not."
    },
    {
      question: "My phone number is correct, but I'm not receiving the two-step authentication phone calls. What can I do?",
      answer: "We provide real offers, both online and in-store, and all of our offers are good for 7 days. If you have an online offer to redeem, bring it to any BestCars store. Once we verify that your car's condition matches the information we received online, you'll leave with payment in hand. Some offers are adjusted after the verification process."
    },
    {
      question: "Two-step authentication isn't working for me. How can I troubleshoot this?",
      answer: "Make sure the correct smartphone number is listed in the Secure and manage your account section (found under Profile Settings) of your MyBestCars account profile so we can send you a security code. If you're trying to log into your BestCars Auto Finance account and have questions, call 800-925-3612. For all other two-step authentication issues, call 800-519-1511."
    },
    {
      question: "What is an authenticator app?",
      answer: "An authenticator app is an app you can download on your smartphone that generates secure, two-step authentication codes for your account."
    },
    {
      question: "How do I set up an authenticator app for two-step authentication?",
      answer: "Install an authenticator app on your mobile device. Popular options include Google Authenticator, Microsoft Authenticator, Authy, LastPass, and Duo Mobile. Once installed, you can proceed through the setup process. You'll be prompted to scan a QR code or enter a key associating your authentication app with your MyBestCars account."
    },
    {
      question: "Why do I need two-step authentication to get into my account?",
      answer: "Using two-step authentication helps protect you if your login ID and/or password are compromised. Two-step authentication, also known as two-factor or multi-factor authentication, is an industry standard requirement for financial institutions. It helps verify that you are who you say you are by asking for two items: your password and a security code."
    },
    {
      question: "How do I update my two-step authentication?",
      answer: "List"
    },
    {
      question: "I'm getting a new phone. Will my authenticator app keep working?",
      answer: "List"
    },
    {
      question: "Can I turn off two-step authentication?",
      answer: "To make sure your account is protected, some actions, like accessing your financial or account information, require two-step authentication and can’t be disabled."
    },
    {
      question: "Why am I periodically asked to reauthenticate?",
      answer: "Even if you've confirmed you're using a secure device or browser, we'll occasionally ask you to complete two-step verification again to confirm your identity. This is best practice for financial institutions, and it helps protect you from identity fraud."
    },
    
  ],
  "Making Payments": [
    {
      question: "If I finance with BestCars, what are my options for making payments?",
      answer: "To manage your account and make payments online, start by setting up a MyBestCars account. Please note that you'll need to verify your email, and it may take up to an hour to get your verification email."
    },
    {
      question: "When is my first payment due?",
      answer: "You can select the first payment date that works best for you. It can be up to 45 days from your contract date. We'll also send you a welcome email or letter with your BestCars Auto Finance account information and monthly payment details."
    },
    {
      question: "Where can I find my BestCars Auto Finance account number to access details about my account?",
      answer: "You can find your BestCars Auto Finance account number on the welcome email or letter you received or you can contact our Customer Service team at "
    },
    {
      question: "How do I request benefits under the Servicemembers Civil Relief Act (SCRA)?",
      answer: "List"
    },
    {
      question: "Where can I access my BestCars Auto Finance account?",
      answer: "List"
    },
  ],
  "Selling a Car": [
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
  ],
  "Financing": [
    {
      question: "Does BestCars offer financing?",
      answer: "Yes. We offer financing through several finance sources, including BestCars Auto Finance, a division of BestCars. Most of our customers’ financing decisions are available in 5 minutes or less."
    },
    {
      question: "What does pre-qualification mean?",
      answer: "Generally, a pre-qualification is when a finance company or lender does a basic review of your information and credit history to determine if you’re likely to qualify for financing a car. A pre-qualification usually results in a soft credit inquiry, which won’t impact your credit score."
    },
    {
      question: "How does pre-qualification work?",
      answer: "With BestCars, you can choose to pre-qualify on a specific vehicle or a dollar amount. Simply fill out a pre-qualification request, which will ask for personal, income, and housing information. Then our finance sources will return a decision (usually within 5 minutes). You can use your pre-qualification to shop for a car in our nationwide inventory with your personalized financing terms."
    },
    {
      question: "Will pre-qualifying impact my credit score?",
      answer: "No. For pre-qualification, BestCars’s finance sources use soft inquiries, which have no impact on your credit score. Pre-qualification allows you to shop for a car with your personalized financing terms. Once you’re ready to buy, you’ll have to submit a credit application to get specific offer terms. This credit application will be a hard inquiry, which may impact your credit score."
    },
    {
      question: "What's the benefit of getting pre-qualified?",
      answer: "A pre-qualification is a powerful shopping and affordability tool. Getting pre-qualified allows you to see personalized financing terms on BestCars’s inventory, so you can get an idea of what your monthly payment and APR would be. Pre-qualification allows you to find the right car in your budget without impacting your credit score."
    },
    {
      question: "This is my first car purchase. Can I finance with BestCars?",
      answer: "Our finance sources accommodate most credit profiles, and every BestCars customer can expect the same no-haggle pricing and exceptional customer service."
    },
    {
      question: "I don't have the best credit rating. Can I finance with BestCars?",
      answer: "Our finance sources accommodate most credit profiles, and every BestCars customer can expect the same no-haggle pricing and exceptional customer service."
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
      answer: "Your down payment should be whatever amount you feel comfortable paying. Most BestCars customers put down at least 8% of the purchase price. Keep in mind that a higher down payment will mean a lower monthly payment and also may help you get better terms."
    },
    {
      question: "How do BestCars's annual percentage rates (APRs) compare to competitors?",
      answer: "We have a variety of finance sources, so we’re able to offer competitive APRs to BestCars customers with a wide range of credit profiles. If you choose to finance with us, and you find a better APR within 3 business days of your purchase, you can replace your financing at no cost to you."
    },
    {
      question: "I am financing somewhere other than BestCars. What do I need to provide BestCars?",
      answer: "If you already have financing through your bank or an outside lender, you will need to provide a voucher, check or other proof of financing. We’ll help you with that process."
    },
    {
      question: "What's the difference between a pre-qualification and a pre-approval?",
      answer: "Typically, a pre-qualification results in a soft credit inquiry and won't impact your credit score, while a pre-approval results in a hard credit inquiry and may impact your credit score. BestCars's pre-qualification process uses a soft credit inquiry, so you can get pre-qualified with no impact to your credit and shop with your personalized finance terms. Once you're ready to buy, you'll have to submit a credit application to get final offer terms. That application will result in a hard inquiry, which may impact your credit score."
    }
  ],
  "Warranties & More": [
    {
      question: "What is the difference between the BestCars limited warranty and the optional MaxCare® extended service plan?",
      answer: "Every car we sell automatically comes with a BestCars limited warranty, even if it's still covered under the manufacturer's warranty. This means your car's major systems, plus hundreds of parts inside and out are covered, including labor. We offer a 90-day/4,000-mile (whichever comes first) limited warranty. See store for written details."
    },
    {
      question: "Do all BestCars cars come with the BestCars limited warranty?",
      answer: "Yes. All of our cars are BestCars Certified and come with a 90-day/4,000-mile (whichever comes first) limited warranty. Our limited warranty includes guaranteed coverage on all parts and labor for covered systems during the warranty period, with zero cost to you."
    },
    {
      question: "Why should I consider an optional MaxCare extended service plan?",
      answer: "All cars can have unexpected repairs. Instead of paying full price for covered repairs, you can pay a deductible as low as $50 with MaxCare coverage. MaxCare covers all of your car's major systems, and provides emergency roadside assistance, rental reimbursement, coverage anywhere in the United States or Canada, and access to a nationwide network of trusted, certified RepairPal® facilities. Exclusions and limitations may apply."
    },
    {
      question: "What isn't covered by MaxCare?",
      answer: "Unlike many other service plans that are available today, MaxCare offers named exclusion coverage as opposed to named component coverage. What this means is that there is a specific list of non-covered components and losses. Certain causes of loss such as corrosion and abuse are also excluded. If the item in question is not on the exclusion list, it is covered. We believe that this is the most simple and transparent way to present this information to our customers. "
    },
    {
      question: "Am I required to purchase MaxCare?",
      answer: "No, MaxCare is an entirely optional extended service plan, but many BestCars customers choose MaxCare for the peace of mind it brings to long-term used car ownership."
    },
    {
      question: "Can MaxCare be included in my monthly payment?",
      answer: "Yes, you can include MaxCare in your monthly payment or purchase it up front using a credit card, cash, or check."
    },
    {
      question: "Can I purchase MaxCare after I purchase a car from BestCars?",
      answer: "No. MaxCare is only available at the time you purchase your car."
    },
    {
      question: "What is BestCars’s return policy?",
      answer: "BestCars offers a 10-day Money Back Guarantee so you have plenty of time to decide if the car you buy is right for your life. As long as the vehicle's condition is consistent with when you purchased it, you can bring it back within 10 days to the store where you purchased it and we'll help you complete your return. Any refunds due back are typically mailed within 2 weeks of your return date. Please note, if your financing included negative equity from your trade-in, you can either repay the negative equity or finance it with a different vehicle, subject to financing approval. Remember that any shipping fees paid to transfer the vehicle are separate from your purchase and nonrefundable."
    },
  ],
  "Seeing a Car": [
    {
      question: "Do I have to buy a car if I reserve it, have it shipped from another store, or test drive it?",
      answer: "No. You're never obligated to buy a car just because you reserve it, have it shipped, or test drive it. However, if you have a car shipped, there might be a nonrefundable shipping fee."
    },
    {
      question: "How can I reserve a car at BestCars so no one else buys it?",
      answer: "To reserve a car at BestCars, go to the car's detail page and select one of the reservation options available for that car. You can reserve 1 car at a time, up to 7 days in advance of an appointment and/or test drive, unless otherwise noted. If you ship a car, it will be reserved for you while it's in transit."
    },
    {
      question: "How many cars can I reserve at BestCars?",
      answer: "You can reserve 1 car at a time up to 7 days in advance of an appointment and/or test drive, unless otherwise noted. To do this, go to the car's detail page and select one of the reservation options available for that car. If you ship a car, it will be reserved for you while it's in transit."
    },
    {
      question: "Can I reserve a car that's listed as Coming Soon?",
      answer: "Cars listed as Coming Soon can't be reserved, shipped, or test driven, but we can notify you when the car becomes available. Go to the car's detail page to sign up for email notifications about availability."
    },
    {
      question: "When will a Coming Soon car become available?",
      answer: "Availability depends on state-specific title requirements, so an exact time frame can't be provided — but we can notify you when a car is available to purchase. Go to the car's detail page to sign up for email notifications about availability."
    },
    {
      question: "How do I get a 24-hour test drive at BestCars?",
      answer: "When shopping at a BestCars store, let us know that you'd like to take a car for a 24-hour test drive. You'll be asked to provide a valid driver's license, verifiable comprehensive and collision insurance coverage, and to return the car to the same store on the next business day. Not all cars qualify for a 24-hour test drive due to price and model restrictions, and you're limited to two 24-hour test drives within a 30-day period. There's a 150-mile limit for 24-hour test drives, and the car's condition must remain consistent with when it left the store. 24-hour test drives are not available when you buy online for express pickup or delivery. Other restrictions may apply."
    },
    {
      question: "What type of insurance do I need for a 24-hour test drive?",
      answer: "To take a 24-hour test drive, you must provide a valid driver's license and show that you have both comprehensive and collision insurance coverage. "
    },
    {
      question: "How can I see a car in person that isn't in my area?",
      answer: "We can ship almost any car in our inventory to your preferred BestCars store. In some cases, a nonrefundable shipping fee may apply, but we'll let you know ahead of time. In some instances, a car may not be eligible for shipping."
    },
    {
      question: "What do shipping fees cover?",
      answer: "Shipping fees cover the cost of transporting the car. Shipping fees are nonrefundable and separate from the cost of the car, and payment is required before shipping. The shipping fee payment methods we accept include cash (in store only), credit (Visa, MasterCard, Discover, American Express), debit, or check."
    },
    {
      question: "I want a car from another location and there's a shipping fee. When is payment due?",
      answer: "Shipping fee payment is collected as a part of your shipping order, whether you complete it online or with the help of an associate. The shipping fee payment methods we accept include cash (in store only), credit (Visa, MasterCard, Discover, American Express), debit, or check. Keep in mind that shipping fees are nonrefundable and separate from the cost of the car."
    },
    {
      question: "How long does store-to-store shipping take?",
      answer: "Check the car's detail page for an estimated timeline. Once the car ships, we'll give you an estimated ready-to-drive date and tracking link for your shipping order."
    },
    {
      question: "Why are some cars unable to be shipped?",
      answer: "Some states require us to have the title in hand before shipping can begin. Other states restrict shipping based on mileage or emissions requirements. Although the reasons vary, it's important to keep in mind that non-transferable cars can be viewed and purchased where they're currently located, but that doesn't guarantee they can be registered outside of that state. Contact us and we'll help you confirm the car you're interested in can be registered in your state."
    },
    {
      question: "How do I schedule a test drive?",
      answer: "You can make an appointment online or by phone to test drive the car you're interested in, unless otherwise noted. To schedule a test drive online, go to the car's detail page, and follow the prompts for reserving the car."
    },
    {
      question: "Where can I test drive?",
      answer: "You can test drive cars at any BestCars store."
    },
    {
      question: "I have a test drive scheduled. Will a store associate ride with me?",
      answer: "It's up to you whether you want a solo test drive or one with an associate. Just let us know at your appointment."
    },
    {
      question: "I have a test drive scheduled at BestCars. What do I need to bring?",
      answer: "List"
    },
    
  ],
  "Buying a Car": [
    {
      question: "Are BestCars prices negotiable?",
      answer: "Our upfront prices are set and our associates are paid the same regardless of a car's price, so our goal is to find the right car for you."
    },
    {
      question: "Can I buy a car online from BestCars?",
      answer: "Yes, you can buy online and get it delivered† or pick it up at BestCars. To buy a car online, choose a car and request delivery or express pickup from the car's detail page. You'll need to create or sign into your MyBestCars account."
    },
    {
      question: "Is buying online the only way to buy a car at BestCars?",
      answer: "No, it's just one way to buy a car with us. You can buy online or at a BestCars store. If you prefer to buy a car at the store, you can still complete much of the process from home, including applying for financing and getting a trade-in offer. No matter how you want to find your next car — online, in store, or a little of both — you get to decide how you want to buy a car at BestCars."
    },
    {
      question: "How do I get my car if I buy online?",
      answer: "You'll schedule an appointment to pick it up at a BestCars store near you, or have it delivered. Delivery is available within 60 miles of our stores in select markets. Check if it's available at your store."
    },
    {
      question: "Is there a fee for buying online?",
      answer: "No, there's no fee for buying online, whether you choose delivery or express pickup. If the car you choose has a shipping fee, it'll be clearly displayed on the car's detail page. Shipping fees are separate from the cost of the car, nonrefundable, and paid before the car ships."
    },
    {
      question: "What is the difference between shipping and delivery?",
      answer: "Shipping is when we move cars from one BestCars location to another. You can request shipping for most of our inventory to your preferred BestCars store. Depending on how far away the car is, there may be a shipping fee. Shipping fees are nonrefundable, separate from the cost of the car, and paid before the car ships."
    },
    {
      question: "If I buy a car online that needs to be shipped and I choose delivery, why does it have to go to a BestCars store before it's brought to me?",
      answer: "Once the car gets to your local BestCars store, we do a quality check and process state-specific requirements before we deliver it to you."
    },
    {
      question: "How do I pay for my purchase?",
      answer: "You can apply for financing with BestCars, your own preferred bank or credit union, or pay cash. Credit cards cannot be used to purchase a car at BestCars, and we don't accept credit cards for down payments."
    },
    {
      question: "Can I buy a car at BestCars with a credit card?",
      answer: "Credit cards cannot be used to purchase a car at BestCars. For customers buying online, we use an online payment portal where you can make safe, secure payments directly from your bank account. All you need is your account number and routing number. For payments made at a BestCars store, we accept cash, debit card, or personal checks that reflect your correct name and address."
    },
    {
      question: "When is my down payment due?",
      answer: "Your down payment is due at the time of purchase. For customers buying online, we use an online payment portal where you can make safe, secure payments directly from your bank account. All you need is your account number and routing number."
    },
  ],
  "Finding a Car": [
    {
      question: "How does BestCars work?",
      answer: "At BestCars, our upfront prices are the same whether you want to buy online or at your nearest BestCars store. If you prefer to shop at the store, you can still do some prep from home, like getting pre-qualified for financing or getting an offer for your car online. No matter how you want to shop — online, in store, or a little of both — you get to decide how you want to buy a car at BestCars."
    },
    {
      question: "Does BestCars own their cars, or are they owned by other individuals and dealers?",
      answer: "BestCars owns every car we sell, and unless otherwise noted, all the cars on our website are physically located at one of our BestCars stores."
    },
    {
      question: "How does BestCars choose the cars that you sell?",
      answer: "We check every car's history to rule out any with flood damage, frame damage, outstanding liens, or salvage history. Any car that can't meet those condition standards gets sold at auction — not to you. Cars must also pass a 125+ point inspection and undergo a detailed reconditioning process to be sold at BestCars. "
    },
    {
      question: "What does it mean that all BestCars cars are BestCars Certified?",
      answer: "Every car we sell is BestCars Certified, which means no flood or frame damage, and no salvage history."
    },
    {
      question: "Does BestCars ever sell cars “as-is”?",
      answer: "None of the cars we buy are ever sold to you as-is."
    },
    {
      question: "What tools does BestCars have to help me find the right car for me and my budget?",
      answer: "Here at BestCars, we have several tools to help you find the right car. You can use our car payment calculator to estimate your budget, or get pre-qualified without impacting your credit score to shop with your personalized terms and help learn what you can afford. You can shop our inventory with your pre-qualified monthly payments too. Also, you can get an offer online or in-store for your current car, which can be applied to your down payment."
    },
    {
      question: "How can I find out when cars I like are added to BestCars inventory?",
      answer: "Create a saved search with the type of car(s) you're looking for and we'll email you when a match is added to our inventory. Look for the Save Search link on the shopping search-results page, located directly below the search filters. This option will only appear if you've selected at least one filter in your search. If you don't already have a MyBestCars account, you'll need to create one. There you can adjust the frequency of your saved-search inventory alerts."
    },
    {
      question: "Can I save my favorite cars to a list I can view later?",
      answer: "Yes. Select the heart button by the car photo to add it to your list of favorites. If you don't already have a MyBestCars account, you'll need to create one where you can review your personal favorites list, easily compare car pricing and features, and stay updated on a car's availability."
    },
    {
      question: "If I find a car I like online, can I see it in person before I make a decision?",
      answer: "If you prefer to see and test drive a car before you buy it, you can reserve it for a test drive up to 7 days in advance of an appointment. If it's not located near you, many of our cars are available to be shipped to your local BestCars for a test drive prior to purchase. If you have a car shipped, there might be a nonrefundable shipping fee."
    },
    {
      question: "Do I need to make an appointment to browse cars at the store?",
      answer: "No, but an appointment might save you some time. If you find a car you like on the lot, we'll be ready to answer your questions or help you get into a test drive faster. Go to BestCars.com/stores to find your local store and make an appointment."
    },
    
  ],
  "Safety Recalls": [
    {
      question: "What is a safety recall?",
      answer: "A safety recall occurs when a manufacturer or the National Highway Traffic Safety Administration (NHTSA) finds that a condition or defect that could affect the safety or operation of a vehicle may exist in a specific vehicle or series of vehicles. The manufacturer notifies its authorized dealers, repair facilities, and the registered vehicle owners of the condition or defect so that the registered owners can take the vehicle to the authorized dealer or repair facility for diagnosis and repair."
    },
    {
      question: "What is NHTSA?",
      answer: "The National Highway Traffic Safety Administration (NHTSA) is an agency within the United States Department of Transportation that carries out vehicle safety programs. Part of NHTSA's work is to establish and enforce safety performance standards for vehicles and vehicle equipment and to investigate vehicle safety defects."
    },
    {
      question: "How can I check for unrepaired safety recalls when I'm shopping for a car at BestCars?",
      answer: "To know if the car you want has an unrepaired safety recall, go to the car's detail page and use the Check for Unrepaired Safety Recalls link. This link will take you to the NHTSA website. Your car's VIN will be pre-populated into their search engine, and the results will display automatically."
    },
    {
      question: "What do I do if there's an unrepaired safety recall on my car? How can I get that fixed?",
      answer: "Some of our cars may have unrepaired safety recalls. This is mainly because the current recall system is based on the manufacturer's relationship with its dealers, repair facilities, and registered vehicle owners, and not with independent dealers like BestCars. Recalls must be repaired by manufacturer-authorized repair facilities. BestCars has not been authorized to complete safety recall repairs and close out repaired recalls. Before you buy a used car from BestCars, we'll review an AutoCheck® report and results from the NHTSA Recall Look-Up with you. BestCars urges customers to have unrepaired safety recalls fixed by the manufacturer as soon as the purchase is completed."
    },
    {
      question: "How do I find out if a car I bought at BestCars has an unrepaired safety recall?",
      answer: "Manufacturers use state vehicle registration data to issue safety recall notices. If you don't maintain your state registration information, you might not receive future safety recall notices. Make sure to update your address every time you move."
    },
    {
      question: "What do I do if a car I own has an unrepaired safety recall?",
      answer: "Vehicle manufacturers are required to fix unrepaired safety recalls at no cost to you. If a car you own has an unrepaired safety recall, contact a manufacturer-authorized repair facility as soon as possible."
    },
  ],
}
</script>

<style scoped>

</style>