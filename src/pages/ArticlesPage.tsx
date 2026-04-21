import { useNavigate } from 'react-router-dom'

import { articles } from '../data/articles'

function ArticlesPage() {
  const navigate = useNavigate()

  return (
    <section className="page">
      <header className="page-header">
        <span className="chip status">Curated Archives</span>
        <h1>Insights & Narratives</h1>
        <p>
          Exploring the intersections of mental clarity, productivity
          architecture, and a balanced digital existence.
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