import { useNavigate } from 'react-router-dom'

import ArticleCard from '../components/ArticleCard'
import { articles, siteContent } from '../data/content'

function HomePage() {
  const navigate = useNavigate()

  return (
    <section className="page page-home">
      <header className="hero card">
        <div className="avatar-shell">
          <div className="avatar">{siteContent.hero.initials}</div>
        </div>
        <div className="hero-content">
          <span className="chip status">{siteContent.hero.status}</span>
          <h1>{siteContent.hero.name}</h1>
          <p>{siteContent.hero.bio}</p>
          <div className="hero-meta">
            <span>{siteContent.hero.location}</span>
            <span>{siteContent.hero.writingSince}</span>
          </div>
        </div>
      </header>

      <section className="section-head">
        <div>
          <h2>Latest Articles</h2>
          <p>Thoughts on craft, life, and the digital void.</p>
        </div>
        <button type="button" onClick={() => navigate('/articles')}>
          View Archive →
        </button>
      </section>

      <section className="home-grid">
        <div className="stack">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onOpen={() => navigate(`/articles/${article.id}`)}
            />
          ))}
        </div>
        <aside className="stack">
          <article className="card newsletter">
            <h3>{siteContent.newsletter.title}</h3>
            <p>{siteContent.newsletter.description}</p>
            <input placeholder={siteContent.newsletter.emailPlaceholder} aria-label="Email" />
            <button type="button">{siteContent.newsletter.buttonText}</button>
          </article>

          <article className="card">
            <h3>Topics</h3>
            <div className="tag-list">
              {siteContent.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </article>

          <article className="card">
            <h3>Connect</h3>
            <div className="connect-list">
              {siteContent.connectLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        </aside>
      </section>
    </section>
  )
}

export default HomePage