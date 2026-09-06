import SEO from './SEO.jsx'
import EnquiryCTA from './EnquiryCTA.jsx'

export default function ReformerDetail({
  eyebrow,
  title,
  intro,
  seoTitle,
  seoDescription,
  photoLabel,
  specs,
  highlights,
}) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />

      <section className="hero container">
        <span className="eyebrow eyebrow--red">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="hero__intro">{intro}</p>
        <div className="hero__actions">
          <a href="/contact" className="btn btn--primary">
            Enquire To Hire
          </a>
        </div>
        <div className="photo-placeholder hero__photo" data-label={photoLabel} />
      </section>

      <section className="section section--bordered container">
        <div className="two-col">
          <div>
            <span className="eyebrow eyebrow--muted">Highlights</span>
            <h2>Built For Serious Use</h2>
            <ul style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {highlights.map((h) => (
                <li key={h} style={{ fontSize: '0.95rem', color: 'var(--ink-soft)' }}>
                  — {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow eyebrow--muted">Specification</span>
            <table className="specs">
              <tbody>
                {specs.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <EnquiryCTA
        eyebrow={eyebrow}
        heading="Ready To Hire?"
        text={`Tell us where it's going and we'll confirm pricing, delivery and setup for your ${title.split(' ').slice(-2).join(' ')}.`}
        buttonLabel="Enquire To Hire"
      />
    </>
  )
}
