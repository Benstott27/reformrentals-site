import { Link } from 'react-router-dom'

export default function EnquiryCTA({
  eyebrow = 'Get In Touch',
  heading = 'Enquire Today',
  text = 'Tell us about your space and we’ll come back with pricing and availability.',
  buttonLabel = 'Make An Enquiry',
  to = '/contact',
}) {
  return (
    <section className="section section--dark section--bordered cta">
      <div className="container cta__inner">
        <span className="eyebrow" style={{ color: '#cfc6bf' }}>
          {eyebrow}
        </span>
        <h2>{heading}</h2>
        <p>{text}</p>
        <Link to={to} className="btn btn--outline-light">
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}
