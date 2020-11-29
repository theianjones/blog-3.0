import React from 'react'
import {useRouteData} from '@remix-run/react'
import {Link} from 'react-router-dom'

const ArticleListItem = ({article}: any) => (
  <li className="py-3 px-2 rounded hover:shadow-lg hover:text-primary cursor-pointer transition ease-in-out duration-300 transform hover:scale-105">
    <Link to={article.path}>{article.title}</Link>
  </li>
)

export default function TeamIndex() {
  let {articles = [], ...data} = useRouteData()
  return (
    <section className="my-3">
      <h1 className="text-4xl md:text-5xl font-bold my-12 text-gray-800 font-sans">
        Articles
      </h1>
      <ul className="font-serif text-gray-600 text-xl">
        {articles.map((article: any) => (
          <ArticleListItem key={article.slug} article={article} />
        ))}
      </ul>
    </section>
  )
}
