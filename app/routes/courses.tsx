import * as React from 'react'
import {useRouteData} from '@remix-run/react'
import * as Types from 'types'

export function meta() {
  return {
    title: 'Ian Jones | Courses',
    description: 'Alright stop. Elaborate and listen...',
  }
}

export function headers({loaderHeaders}: {loaderHeaders: Headers}) {
  return loaderHeaders
}

function Posts() {
  const {posts} = useRouteData<{posts: Types.Post[]}>()
  return (
    <main className="grid max-w-lg gap-12 pt-12 m-auto">
      {posts.map((a) => (
        <Post key={a.id} post={a} />
      ))}
    </main>
  )
}

export default Posts
