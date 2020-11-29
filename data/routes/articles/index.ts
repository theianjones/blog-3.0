import fs from 'fs'
import type {DataLoader} from '@remix-run/core'

const fileNameToTitle = (path: string) => {
  const FILE_PATH_REGEX = /\s*\-\s*|\s*_\s*|\s*\.\s*/g
  const fileNameParts = path.split(FILE_PATH_REGEX)
  return fileNameParts
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ')
}

const getArticleData = () => {
  const files = fs.readdirSync('./app/routes/articles', {
    withFileTypes: true,
  })
  const articles = files.reduce(
    (articles: {path: string; slug: string; title: string}[], currentFile) => {
      const [slug, type] = currentFile.name.split('.')
      if (type !== 'mdx' && type !== 'md') {
        return articles
      }

      return [
        ...articles,
        {path: `/articles/${slug}`, slug, title: fileNameToTitle(slug)},
      ]
    },
    [],
  )
  return articles
}

export let loader: DataLoader = async () => {
  const articles = getArticleData()

  return {
    articles,
  }
}
