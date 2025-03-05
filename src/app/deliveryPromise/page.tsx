/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Home = () => (
  <div className="flex flex-col">
    <Header />
    <div className="h-full pt-[64px]">
      <section className="flex h-1/2 place-content-center py-8">
        <div className="z-30 place-content-center px-8 md:px-48">
          <div className="mb-5 w-full text-center text-2xl font-extrabold leading-7 text-black">Zing App Quick Delivery Promise</div>
          <div className="text-left text-base text-gray-800">
            <h1 className="font-bold mb-4">Zing’s 10-Minute Delivery Promise 🚀</h1>
            <p>Fast. Reliable. Rewarding.</p>
            <p className="mb-2">
              We value our loyal customers! That’s why we’re introducing an exclusive 10-Minute Delivery Promise—get your food delivered within 10 minutes from
              pickup, or earn cashback for every minute of delay!
            </p>
            <h3 className="font-semibold mb-4">Who’s Eligible?</h3>
            <p>⭐ This promise is available only for our loyal customers who have placed 5+ orders on Zing.</p>
            <h3 className="font-semibold mb-2 mt-4">How It Works</h3>
            <p>✅ Place Your Order – Choose from our specially crafted, lightning-fast menu.</p>{' '}
            <p>✅ Watch the Countdown – The timer starts when the rider picks up your food and stops when they arrive at your location.</p>{' '}
            <p>
              ✅ Get Cashback for Delays – If delivery takes more than 10 minutes, you get 10% cashback for every extra minute—automatically credited to your
              Zing Wallet!
            </p>
            <h3 className="font-semibold mb-2 mt-4">Why So Fast?</h3>
            <p> ⏳ AI-Powered Cloud Kitchens – Your food is prepared in record time.</p>
            <p> 🚀 Optimized Rider Dispatch – We assign the nearest delivery partner instantly.</p>
            <p> 📍 Hyper-Local Coverage – We deliver within a tight radius for maximum speed.</p>
            <h3 className="font-semibold mb-2 mt-4">Money-Back Promise: Terms & Conditions</h3>
            <p className="mb-1">
              <span className="font-semibold">Loyal Customers Only</span> – The 10-Minute Promise is applicable only for users who have completed 5+ orders on
              Zing.
            </p>
            <p className="mb-1">
              <span className="font-semibold">Timer Starts at Pickup </span>– The countdown begins when the rider picks up the order and ends upon arrival at
              your location.
            </p>
            <p className="mb-1">
              <span className="font-semibold">Cashback for Delays</span>– If the delivery takes longer than 10 minutes, you will receive 10% cashback per extra
              minute, credited to your Zing Wallet.
            </p>
            <p className="mb-1">
              <span className="font-semibold">Exclusions Apply</span>– Delays due to weather conditions, traffic blockages, restricted delivery areas, or user
              unavailability will not qualify for cashback.
            </p>
            <p className="mb-1">
              <span className="font-semibold">Automatic Credit</span> – Cashback will be processed within 24 hours after order completion.
            </p>
            <p className="mb-1">
              <span className="font-semibold">Fair Usage Policy</span> – Zing reserves the right to limit or revoke cashback benefits in case of misuse.
            </p>
            <p className="mb-1">
              <span className="font-semibold">Limited-Time Offer</span> – The Quick Delivery Promise is subject to operational feasibility and may be modified
              at Zing’s discretion.
            </p>
            <p className="mb-1">Order Now & Enjoy the Zing Speed! 🚀</p>
            <p className="mb-1 font-semibold">Fastest delivery, guaranteed—because you deserve it.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
)

export default Home
