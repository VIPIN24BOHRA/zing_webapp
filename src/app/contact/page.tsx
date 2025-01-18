import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Home = () => (
  <div className="flex flex-col">
    <Header />
    <div className="h-[90vh] pt-[64px]">
      <section className="flex h-1/2 place-content-center py-8">
        <div className="z-30 place-content-center px-16 md:px-48">
          <div className="mb-5 w-full text-center text-2xl font-extrabold leading-7 text-black">Contact Us</div>
          <p className="font-bold mb-4">716, ILD Trade Centre Sector-47 Sohna Road Gurgaon Gurgaon Gurgaon Haryana - 122018</p>
          <p className="font-bold">Email id: zingapp2024@gmail.com </p>
        </div>
      </section>
    </div>
    <Footer />
  </div>
)

export default Home
