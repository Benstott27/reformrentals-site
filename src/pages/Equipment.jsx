import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import EnquiryCTA from '../components/EnquiryCTA.jsx'

const ITEMS = [
  {
    to: '/equipment/c8-pro',
    label: 'C8-Pro Photo',
    name: 'Align-Pilates C8-Pro Reformer',
    desc: 'Our most popular studio reformer — an 8-wheel carriage system built for daily multi-class use.',
  },
  {
    to: '/equipment/r8-pro',
    label: 'R8-Pro Photo',
    name: 'Align-Pilates R8-Pro Reformer',
    desc: 'A refined, lighter-footprint reformer suited to boutique studios and home installations.',
  },
  {
    to: '/chairs',
    label: 'Essential Chair Photo',
    name: 'The Essential Chair',
    desc: 'A compact, versatile Pilates chair that fits into any corner — ideal for instructors and home users.',
  },
]

export default function Equipment() {
  return (
    <>
      <SEO
        title="Pilates Equipment — Reformers & Chairs"
        description="Explore the Align-Pilates equipment range available to hire from Reform Rentals: the C8-Pro Reformer, R8-Pro Reformer, and The Essential Chair."
      />

      <section className="hero container">
        <span className="eyebrow eyebrow--red">Equipment</span>
        <h1>Professional Align-Pilates Equipment</h1>
        <p className="hero__intro">
          Every machine we hire is genuine Align-Pilates equipment, chosen
          for its build quality, smooth resistance and reliability under
          daily studio use.
        </p>
      </section>

      <section className="section section--bordered container">
        <div className="card-grid card-grid--3">
          {ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className="card">
              <div
                className="photo-placeholder card__photo"
                data-label={item.label}
              />
              <div className="card__body">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span className="link-arrow">View Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <EnquiryCTA
        eyebrow="Equipment"
        heading="Not Sure What You Need?"
        text="Tell us about your studio or space and we’ll recommend the right equipment mix."
      />
    </>
  )
}
