import {json, Loader} from '@remix-run/data'
import {getArticles, getCourses} from './utils'
import includes from 'lodash/includes'
import takeRight from 'lodash/takeRight'
import {MdxFrontmatter} from '../../types'
import {FrontMatterResult} from 'front-matter'

export let loader: Loader = async () => {
  const featuredArticles = getArticles(
    (article: FrontMatterResult<MdxFrontmatter>) => {
      return includes(article.attributes.meta?.tags, 'featured')
    },
  )

  const featuredCourses = takeRight(getCourses(), 3)

  return json(
    {
      featuredArticles,
      featuredCourses,
    },
    {
      headers: {
        'cache-control': 'public, max-age=60, s-maxage=604800',
      },
    },
  )
}
