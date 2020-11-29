import React from 'react'
import {useRouteData} from '@remix-run/react'

export function meta() {
  return {
    title: 'Ian Jones Blog',
    description: 'Welcome to remix!',
  }
}

export default function Index() {
  let data = useRouteData()

  return (
    <main className="my-3">
      <h1 className="text-4xl md:text-6xl font-bold my-12 text-gray-800 font-sans">
        👋 I'm Ian, I live and work remotely in Northern Virginia building
        egghead.io
      </h1>
      <section className="my-3">
        <h2 className="text-gray-500 text-3xl md:text-4xl">
          Featured Articles
        </h2>
        <ul></ul>
      </section>
      <section className="my-3">
        <h2 className="text-gray-500 text-3xl md:text-4xl">Video Courses</h2>
        <ul></ul>
      </section>
    </main>
  )
}
