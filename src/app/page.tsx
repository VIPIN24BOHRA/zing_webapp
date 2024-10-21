import Image from 'next/image'
import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
// import AppstoreImage from '@/img/app-store.jpg'
import GoogleplayImage from '@/img/google-play.jpg'
import HomeImage from '@/img/home.png'
import PhoneImage from '@/img/phone.png'
import PhoneLeftImage from '@/img/phone-left.png'
import Why1 from '@/img/why-1.jpg'
import Why2 from '@/img/why-2.jpg'
import Why3 from '@/img/why-3.jpg'

const Home = () => (
  <div className="flex w-full flex-col">
    <Header />
    <div className="h-full pt-[64px]">
      <section className="flex h-screen">
        <div className="z-30 grid place-content-center px-8 max-[400px]:px-4 sm:px-16 md:px-32 lg:px-48">
          <div className="-mt-24 flex w-4/5 text-3xl font-extrabold leading-9  sm:w-2/3 md:mt-0 md:text-4xl text-[#03BD47]">Zing - 10 Minute Food Delivery</div>
          <div className=" flex w-4/5 text-1xl font-extrabold leading-9 text-gray-800 sm:w-2/3 mt-4 md:text-2xl ">Get your food delivered in 10 Minutes</div>

          <div className="my-4 flex 	w-3/4 text-base leading-7 tracking-wider text-[#86949d] sm:w-1/2 md:w-1/3 md:text-base">
            Hungry but short on time? Zing has you covered! With Zing, you can order your favorite meals and snacks and have them delivered to your doorstep in
            just 10 minutes!
          </div>

          <div className="flex w-1 flex-wrap items-center bg-white md:flex-nowrap">
            {/* <a className="" href="https://apps.apple.com/in/app/dial-social/id1643536800" target="_blank" rel="noreferrer">
              <Image className="z-10 h-[40px] w-auto md:h-[50px]" src={AppstoreImage} alt="appstore" />
            </a> */}
            <a className="ml-0 mt-4 md:ml-4 md:mt-0" href="https://play.google.com/store/apps/details?id=com.shop.clipskart" target="_blank" rel="noreferrer">
              <Image className="z-10 h-[40px] w-auto md:h-[50px]" src={GoogleplayImage} alt="googleplay" />
            </a>
          </div>
        </div>
        <Image className="absolute right-0 bottom-[-64px] z-10 w-3/4 md:w-2/4" src={HomeImage} alt="Home" />
      </section>
      <section className="flex h-screen bg-[#fafafa]">
        <div className="z-30 grid place-content-center  px-8 max-[400px]:px-4 sm:px-16 md:px-32 lg:px-48">
          <div className="w-3/3 flex text-2xl font-extrabold leading-9 text-gray-800 md:w-1/2 md:text-3xl">Get your order in just 10 minutes!</div>

          <div className="w-3/3 flex text-1xl font-extrabold leading-9  md:w-1/2 md:text-2xl text-[#03BD47] mt-4">
            Zing – Lightning-Fast Food, Always on Time!
          </div>

          <div className="my-4 flex	w-1/2 text-base leading-7 tracking-wider text-[#86949d] md:w-1/3 md:text-base">
            Choose from a variety of cuisines, snacks and beverages, Track your order in real-time from preparation to delivery, What you see is what you pay—no
            surprises at checkout, Hungry at midnight or early in the morning? Zing delivers around the clock.
          </div>
        </div>
        <div className="absolute z-10 flex w-full flex-row-reverse px-0 pt-[60vh] sm:pt-[50vh] md:px-16 md:pt-[20vh] lg:px-48">
          <Image className="z-20 h-[40vh] w-auto sm:h-[50vh] md:h-[80vh] border-2 rounded-2xl border-black" src={PhoneImage} alt="Phone" />
          <Image className="z-10 h-[20vh] w-auto sm:h-[25vh] md:h-[40vh]" style={{ transform: 'translate(20%,45%)' }} src={PhoneLeftImage} alt="Phone Icons" />
        </div>
      </section>
      <section className="flex h-screen flex-col bg-white">
        <div className="z-30 grid place-content-center px-16 pt-10 md:px-48">
          <div className="w-full text-center text-3xl font-extrabold leading-7 text-gray-700">Why Zing Food?</div>
        </div>
        <div className="z-10 flex w-full flex-row flex-wrap justify-around px-4 pt-[30vh] max-[500px]:flex-col  max-[500px]:pt-[7vh] sm:px-16 md:px-20 md:pt-[20vh] lg:px-48">
          <div className="mb-4 ">
            <Image className="z-20 m-auto h-[fit-content] w-[110px] sm:w-[140px]  lg:w-[16vw]" src={Why1} alt="Why1" /> <br />
            <span className="m-auto flex flex-col items-center w-full justify-center text-sm font-bold  md:text-xl">
              No Hidden Fees<span className="font-normal w-[250px] block text-center">What you see is what you pay—no surprises at checkout.</span>
            </span>
          </div>
          <div className="mb-4 px-3 max-[400px]:px-0">
            <Image className="z-20 m-auto h-[fit-content] w-[110px] sm:w-[140px] lg:w-[16vw]" src={Why2} alt="Why2" /> <br />
            <span className="m-auto flex flex-col items-center w-full justify-center text-sm font-bold  md:text-xl">
              Wide Selection<span className="font-normal w-[250px] block text-center"> Choose from a variety of cuisines, snacks and beverages</span>
            </span>
          </div>
          <div>
            <Image className="z-20 m-auto h-[fit-content] w-[110px]  sm:w-[140px] lg:w-[16vw]" src={Why3} alt="Why3" /> <br />
            <span className="m-auto flex flex-col items-center w-full justify-center text-sm font-bold  md:text-xl">
              Super-Fast Delivery<span className="font-normal w-[250px] block text-center">Get your order in just 10 minutes!</span>
            </span>
          </div>
        </div>
      </section>

      <section className="flex h-1/2 place-content-center bg-[#151515] py-16">
        <div className="z-30 grid place-content-center px-8 sm:px-16 md:px-48">
          <div className="w-full text-center text-2xl font-extrabold leading-7 text-white"> How It Works?</div>
          <div className="my-4 flex flex-col w-full text-base leading-7 tracking-wider text-[#86949d] md:px-[10%] md:text-base lg:px-[20%]">
            <span>1. Download Zing and sign up.</span>
            <span>2. Select your location.</span>
            <span>3. Browse menu.</span>
            <span>4. Place your order and pay securely in-app.</span>
            <span>5. Watch as your food is prepared and delivered to you in just 10 minutes!</span>
            <span>6. No more waiting for hours or dealing with long delivery times.</span>
          </div>
        </div>
      </section>
      <section className="flex h-1/2 place-content-center bg-white py-8">
        <div className="flex-center z-30 flex flex-col px-8 sm:px-16 md:px-48">
          <div className="w-full text-center text-xl font-extrabold leading-7 text-black">
            With Zing, satisfaction is just minutes away.
            <br />
            <br />
            <span className="text-[#03BD47] text-lg"> Download now and enjoy a faster, fresher way to order food!</span>
          </div>
          <div className="flex-center mt-8 flex justify-evenly">
            {/* <a className="place-self-center py-1" href="https://apps.apple.com/in/app/dial-social/id1643536800" target="_blank" rel="noreferrer">
              <Image className="z-10 h-[40px] w-auto md:h-[50px]" src={AppstoreImage} alt="appstore" />
            </a> */}
            <a className="place-self-center py-1" href="https://play.google.com/store/apps/details?id=social.dial.android" target="_blank" rel="noreferrer">
              <Image className="z-10 h-[40px] w-auto md:h-[50px]" src={GoogleplayImage} alt="googleplay" />
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
)

export default Home
