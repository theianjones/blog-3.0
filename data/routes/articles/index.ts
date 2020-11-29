import {json, Loader} from '@remix-run/data'
import {getArticles} from '../utils'

export let loader: Loader = async () => {
  const articles = getArticles()

  return json(
    {
      articles,
    },
    {
      headers: {
        'cache-control': 'public, max-age=60, s-maxage=604800',
      },
    },
  )
}
