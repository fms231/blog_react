import { siteContent } from '../data/content'

function AboutPage() {
  return (
    <section className="page page-about">
      <header className="about-hero">
        <div className="stack">
          <span className="eyebrow">{siteContent.about.eyebrow}</span>
          <h1>{siteContent.about.title}</h1>
          <p>{siteContent.about.description}</p>
          <div className="tag-list">
            <span>Design Systems</span>
            <span>Philosophy</span>
          </div>
        </div>
        <div className="portrait">
          <div className="portrait-light" />
          <div className="portrait-face">{siteContent.about.portraitInitials}</div>
        </div>
      </header>

      <section className="stack">
        <div className="section-head compact">
          <div>
            <h2>Professional Journey</h2>
            <p>A decade of architectural thinking applied to digital interfaces.</p>
          </div>
        </div>
        <div className="journey-grid">
          <article className="card">
            <span className="period">2020 — PRESENT</span>
            <h3>Principal Architect</h3>
            <p>Leading design vision for ethereal systems in SaaS products.</p>
          </article>
          <article className="card">
            <span className="period">2017 — 2020</span>
            <h3>Creative Director</h3>
            <p>Built minimalist product frameworks and premium brand systems.</p>
          </article>
          <article className="card">
            <span className="period">2014 — 2017</span>
            <h3>Product Designer</h3>
            <p>Early explorations in layered hierarchy for mobile products.</p>
          </article>
        </div>
      </section>

      <section className="expertise-grid">
        <article className="card big">
          <h3>Layered Minimalism</h3>
          <p>
            Systems that prioritize mental clarity by using architectural
            hierarchy and tonal depth.
          </p>
          <div className="tag-list">
            <span>Spatial Design</span>
            <span>Tonal Systems</span>
          </div>
        </article>
        <article className="card highlight">
          <h3>Focus-Driven UX</h3>
          <p>Reducing cognitive load through negative space stacking.</p>
        </article>
        <article className="card cyan">
          <h3>Community Mentorship</h3>
          <p>Empowering the next generation of serene designers.</p>
        </article>
        <article className="card">
          <h3>Psychology of Color</h3>
          <p>Leveraging atmospheric palettes to evoke calm authority.</p>
        </article>
      </section>

      <section className="philosophy">
        <h2>Core Philosophy</h2>
        <div className="philosophy-grid">
          <article>
            <h3>Intentionality</h3>
            <p>
              Every pixel must serve a purpose. If it doesn&apos;t improve focus,
              it should be removed.
            </p>
          </article>
          <article>
            <h3>Quality over Speed</h3>
            <p>
              True serenity is found in craftsmanship and durable systems, not
              trend cycles.
            </p>
          </article>
        </div>
      </section>
    </section>
  )
}

export default AboutPage