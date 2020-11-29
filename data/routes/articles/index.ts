import type {DataLoader} from '@remix-run/core'
import {getArticles} from '../utils'

export let loader: DataLoader = async () => {
  const articles = getArticles()

  return {
    articles,
  }
}
