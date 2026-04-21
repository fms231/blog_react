import { useMemo, useState } from 'react'

import { moments } from '../data/moments'

const MOMENTS_BATCH_SIZE = 3

function MomentsPage() {
  const [visibleCount, setVisibleCount] = useState(MOMENTS_BATCH_SIZE)

  const visibleMoments = useMemo(
    () => moments.slice(0, visibleCount),
    [visibleCount],
  )

  const hasMoreMoments = visibleCount < moments.length

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
        {visibleMoments.map((moment, idx) => (
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

      {hasMoreMoments && (
        <div className="timeline-more">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((currentCount) =>
                Math.min(currentCount + MOMENTS_BATCH_SIZE, moments.length),
              )
            }
          >
            Load Previous Moment
          </button>
        </div>
      )}
    </section>
  )
}

export default MomentsPage