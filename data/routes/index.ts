import type {DataLoader} from '@remix-run/core'
import {getArticles} from './utils'
import includes from 'lodash/includes'
import {MdxFrontmatter} from '../../types'
import {FrontMatterResult} from 'front-matter'

export let loader: DataLoader = async () => {
  const articles = getArticles((article: FrontMatterResult<MdxFrontmatter>) => {
    return includes(article.attributes.meta?.tags, 'featured')
  })

  return {
    featuredArticles: articles,
  }
}
