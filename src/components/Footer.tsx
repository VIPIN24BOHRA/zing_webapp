import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '@/img/logo.png'

const Footer = () => (
  <div className="h-[64px] w-full border-t-2 border-gray-200 bg-gray-100 px-8 max-[400px]:px-4 sm:px-16 md:px-32 lg:px-48">
    <div className="absolute flex h-[64px] flex-row content-center">
      <Link href="/">
        <Image src={Logo} alt="Dial Social" className="h-full w-auto py-3" />
      </Link>
    </div>
    <div className="flex h-full flex-row-reverse content-center text-center align-middle text-gray-500">
      <span className="my-auto text-sm">© Nara Video Tech Pvt Ltd</span>
    </div>
  </div>
)

export default Footer
