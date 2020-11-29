import React from 'react'
import {Outlet} from 'react-router-dom'
import {MDXProvider} from '@mdx-js/react'
import {useRouteData} from '@remix-run/react'
import components from '../components/MdxComponents'
export function meta() {
  return {
    title: 'Ian Jones Blog',
    description: 'Welcome to remix!',
  }
}

export default function Articles() {
  const data = useRouteData()
  console.log({data})
  return (
    <MDXProvider components={components}>
      <main className="markdown my-3">
        <Outlet />
      </main>
    </MDXProvider>
  )
}
