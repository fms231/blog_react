import { useNavigate } from 'react-router-dom'

import { articles } from '../data/articles'

function ArticlesPage() {
  const navigate = useNavigate()

  return (
    <section className="page">
      <header className="page-header">
        <span className="chip status">ARTICLES</span>
        <h1>My Articles</h1>
        <p>
          Exploring Go, Python, Redis, MySQL, MQ, Docker, and the practical side of shipping backend systems.
        </p>
      </header>

      <div className="stack">
        {articles.map((article) => (
          <article key={article.id} className="card article-line">
            <div className="article-line-main" onClick={() => navigate(`/articles/${article.id}`)}>
              <div className="article-meta">
                <span className="chip">{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </div>
            <button type="button" onClick={() => navigate(`/articles/${article.id}`)}>
              ↗
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ArticlesPage