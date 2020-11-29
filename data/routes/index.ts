import {json, Loader} from '@remix-run/data'
import {getArticles} from './utils'
import includes from 'lodash/includes'
import {MdxFrontmatter} from '../../types'
import {FrontMatterResult} from 'front-matter'

export let loader: Loader = async () => {
  const articles = getArticles((article: FrontMatterResult<MdxFrontmatter>) => {
    return includes(article.attributes.meta?.tags, 'featured')
  })

  return json(
    {
      featuredArticles: articles,
    },
    {
      headers: {
        'cache-control': 'public, max-age=60, s-maxage=604800',
      },
    },
  )
}
