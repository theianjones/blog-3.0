import fs from 'fs'
import fm, {FrontMatterResult} from 'front-matter'
import {ArticleData, MdxFrontmatter} from '../../types'
import {identity} from 'lodash'

export const getArticles = (filter: Function = identity) => {
  const files = fs.readdirSync('./app/routes/articles', {
    withFileTypes: true,
  })
  const articles = files.reduce(
    (articles: ArticleData[], currentFile): ArticleData[] => {
      const [slug, type] = currentFile.name.split('.')
      if (type !== 'mdx' && type !== 'md') {
        return articles
      }

      const currentFileData = fs.readFileSync(
        `./app/routes/articles/${currentFile.name}`,
        'utf8',
      )

      const fileContent: FrontMatterResult<MdxFrontmatter> = fm(currentFileData)

      if (filter(fileContent)) {
        return [
          ...articles,
          {path: `/articles/${slug}`, slug, meta: fileContent.attributes.meta},
        ]
      } else {
        return articles
      }
    },
    [],
  )
  return articles
}
