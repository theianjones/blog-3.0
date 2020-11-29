import React from 'react'
import {Meta, Scripts, Styles, Routes, useGlobalData} from '@remix-run/react'
import Header from './components/Header'

export default function App() {
  let data = useGlobalData()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body className="max-w-3xl m-auto px-5 md:px-0">
        <Header />
        <Routes />
        <Scripts />
        <hr className="border-gray-200" />
        <footer className="mt-2">Twitter Github</footer>
      </body>
    </html>
  )
}
