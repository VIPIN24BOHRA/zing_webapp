import '@/styles/global.css'

import React from 'react'

const Layout = ({ children }: any) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="favicon.ico" type="image/x-icon" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta name="google-site-verification" content="-f8IpZrg1Mvp80bVF0N4SRvSWlzBmeHE9kMhQkdOYDI" />
    </head>
    <body>{children}</body>
  </html>
)

export default Layout
