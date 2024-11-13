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
            <li>
              Cancellations will only be considered if the request is made <b>1 days</b> of placing the order. However, cancellation requests may not be
              entertained if the orders have been communicated to such sellers / merchant(s) listed on the Platform and they have initiated the process of
              shipping them, or the product is out for delivery. In such an event, you may choose to reject the product at the doorstep.
            </li>
            <li>
              {' '}
              <b>NARA VIDEO TECH PVTLTD</b> does not accept cancellation requests for perishable items like flowers, eatables, etc. However, the refund /
              replacement can be made if the user establishes that the quality of the product delivered is not good.
            </li>
            <li>
              {' '}
              In case of receipt of damaged or defective items, please report to our customer service team. The request would be entertained once the seller/
              merchant listed on the Platform, has checked and determined the same at its own end. This should be reported within <b>1 days</b> of receipt of
              products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of
              our customer service within <b>1 days</b> of receiving the product. The customer service team after looking into your complaint will take an
              appropriate decision.
            </li>
            <li> In case of complaints regarding the products that come with a warranty from the manufacturers, please refer the issue to them.</li>
            <li>
              In case of any refunds approved by <b>NARA VIDEO TECH PVTLTD</b> , it will take <b>1 days</b> for the refund to be processed to you.{' '}
            </li>
          </ol>
        </div>
      </section>
    </div>
    <Footer />
  </div>
)

export default Home
