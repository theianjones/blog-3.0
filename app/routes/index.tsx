import React from 'react'
import {useRouteData} from '@remix-run/react'
import {IndexRouteData} from '../types'
import Articles from '../components/Articles'
export function meta() {
  return {
    title: 'Ian Jones Blog',
    description: 'Welcome to remix!',
  }
}

export default function Index() {
  let data: IndexRouteData = useRouteData()
  return (
    <main className="my-3">
      <h1 className="text-4xl md:text-6xl font-bold my-12 text-gray-800 font-sans">
        👋 I'm Ian, I live and work remotely in Northern Virginia building
        egghead.io
      </h1>
      <section className="my-10">
        <h2 className="text-gray-500 text-3xl md:text-4xl mb-5">
          Featured Articles
        </h2>
        <Articles articles={data.featuredArticles} />
      </section>
      <section className="my-3">
        <h2 className="text-gray-500 text-3xl md:text-4xl">Video Courses</h2>
        <ul></ul>
      </section>
    </main>
  )
}
