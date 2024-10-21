import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '@/img/logo.png'

const Header = () => (
  <div className="fixed top-0 left-0 z-50 h-[64px] w-full border-b-2 bg-white px-8 max-[400px]:px-4 sm:px-16 md:px-32 lg:px-48">
    <div className="absolute flex h-[64px] flex-row content-center text-center	align-middle">
      <Link href="/">
        <Image src={Logo} alt="Dial Social" className="h-[64px] w-auto py-3" />
      </Link>
    </div>
    <div className="flex h-full flex-row-reverse content-center text-center	align-middle">
      <Link href="/" className="my-auto text-sm text-gray-700 hover:text-gray-900">
        Home
      </Link>
    </div>
  </div>
)

export default Header
