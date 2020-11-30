import {json, Loader} from '@remix-run/data'
import {getCourses} from '../utils'

export let loader: Loader = async () => {
  const courses = getCourses()

  return json(
    {
      courses,
    },
    {
      headers: {
        'cache-control': 'public, max-age=60, s-maxage=604800',
      },
    },
  )
}
