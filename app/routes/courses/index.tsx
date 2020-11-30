import * as React from 'react'
import {useRouteData} from '@remix-run/react'

export function meta() {
  return {
    title: 'Ian Jones | Courses',
    description: 'Bitesized video courses',
  }
}

export function headers({loaderHeaders}: {loaderHeaders: Headers}) {
  return loaderHeaders
}

function Courses() {
  const {courses = []} = useRouteData()
  return (
    <section className="my-3 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold my-12 text-gray-800 font-sans">
        Courses
      </h1>
      <div className="flex flex-row flex-wrap">
        {courses.reverse().map((course: any) => (
          <a
            className="max-w-xs mr-5 mb-5 p-4 transition-all ease-in-out duration-300 border-gray-400 rounded-md shadow-sm hover:shadow-xl"
            key={course.id || course.slug}
            href={course.http_url}
            aria-label={`View ${course.title}`}
          >
            <img
              src={course.square_cover_480_url || course.image}
              height="auto"
              width="250"
            />
            <div className="flex flex-row items-center p-4">
              {course.image_thumb_url && (
                <img
                  src={course.image_thumb_url}
                  width="25"
                  height="25"
                  className="rounded-full"
                />
              )}
              <p className="ml-5 max-w-xs font-sans prose-lg">
                {course.title}{' '}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Courses
