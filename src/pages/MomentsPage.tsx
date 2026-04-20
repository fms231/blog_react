import { moments } from '../data/content'

function MomentsPage() {
  return (
    <section className="page page-moments">
      <header className="page-header centered">
        <span className="chip status">Atmospheric Journal</span>
        <h1>Daily Reflections</h1>
        <p>
          Capturing the fleeting moments of clarity and subtle textures of
          everyday existence.
        </p>
      </header>

      <div className="timeline">
        {moments.map((moment, idx) => (
          <article
            key={moment.id}
            className={`card moment-card ${idx % 2 === 0 ? 'left' : 'right'}`}
          >
            <time>{moment.time}</time>
            <p>{moment.text}</p>
            <div className="tag-list">
              {moment.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className={`moment-image ${moment.tone}`} aria-hidden="true" />
          </article>
        ))}
      </div>

      <div className="timeline-more">
        <button type="button">Load Previous Moments</button>
      </div>
    </section>
  )
}

export default MomentsPage