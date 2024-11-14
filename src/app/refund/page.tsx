import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Home = () => (
  <div className="flex flex-col">
    <Header />
    <div className="h-full pt-[64px]">
      <section className="flex h-1/2 place-content-center py-8">
        <div className="z-30 place-content-center px-16 md:px-48">
          <div className="mb-5 w-full text-center text-2xl font-extrabold leading-7 text-black">Refund & Cancellation policy for Zing App</div>
          <ol className="list-decimal">
            This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service that you have purchased through the
            Platform. Under this policy:
            <li>Zing delivers food in 10 minutes,</li>
            <li>
              User can raise cancellation request within <b>2 minutes</b> of placing a order
            </li>
            <li>
              The Company may cancel an order (in full or partially) for the reasons including shortage or unavailability of certain Products or force majeure
              events. In case the Company cancels any order, You will not be charged for such cancellations, and the Company will refund You for any payment
              already made.
            </li>
            <li>
              Any refunds will be credited back into users account <b>in 48 hours</b>
            </li>
          </ol>
        </div>
      </section>
    </div>
    <Footer />
  </div>
)

export default Home
