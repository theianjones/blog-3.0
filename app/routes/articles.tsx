import React from 'react'
import {useRouteData} from '@remix-run/react'
import {Link, Outlet} from 'react-router-dom'

export function meta() {
  return {
    title: 'Ian Jones Blog',
    description: 'Welcome to remix!',
  }
}

export default function Articles() {
  return (
    <main className="my-3">
      <Outlet />
    </main>
  )
}
