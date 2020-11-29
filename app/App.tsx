import React from 'react'
import {Meta, Scripts, Styles, Routes, useGlobalData} from '@remix-run/react'
import Header from './components/Header'
import Socials from './components/Socials'
export default function App() {
  let data = useGlobalData()
  console.log({data})
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body className="container">
        <Header />
        <Routes />
        <Scripts />
        <hr className="border-gray-200" />
        <footer className="mt-2">
          <Socials socials={data.socials} />
        </footer>
      </body>
    </html>
  )
}
