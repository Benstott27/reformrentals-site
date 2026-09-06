import SEO from '../components/SEO.jsx'

const BUY_MAILTO =
  'mailto:hello@reformrentals.co.uk?subject=Essential%20Chair%20-%20Buy%20Enquiry&body=Hi%20Reform%20Rentals%2C%0A%0AI%27d%20like%20to%20purchase%20The%20Essential%20Chair%20(%C2%A31%2C049.99).%0A%0AName%3A%0AAddress%3A%0APhone%3A%0A'

export default function Chairs() {
  return (
    <>
      <SEO
        title="The Essential Chair — Hire or Buy"
        description="The Align-Pilates Essential Chair, available to hire from £50/month or buy outright for £1,049.99. Compact and versatile — ideal for instructors and home users."
      />

      <section className="hero container">
        <span className="eyebrow eyebrow--red">Chairs</span>
        <h1>The Essential Chair</h1>
        <p className="hero__intro">
          A compact, versatile Pilates chair that fits into any corner of a
          studio or home. Ideal for instructors who want to add chair work to
          their sessions, and for individuals training seriously at home.
        </p>
        <div
          className="photo-placeholder hero__photo"
          data-label="Essential Chair Photo"
        />
      </section>

      <section className="section section--bordered container">
        <span className="eyebrow eyebrow--muted">Why The Essential Chair</span>
        <h2>Small Footprint, Full Workout</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Fits Any Corner</h3>
            <p>
              With a compact footprint, the chair slots into spaces a
              reformer can’t — a spare room corner, a studio nook, or a small
              home gym.
            </p>
          </div>
          <div className="feature">
            <h3>For Instructors & Home Users</h3>
            <p>
              A favourite with instructors adding variety to sessions, and
              individuals wanting a serious, low-impact strength and mobility
              tool at home.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--bordered container">
        <span className="eyebrow eyebrow--muted">Choose Your Option</span>
        <h2>Hire Or Buy</h2>
        <div className="pricing-grid">
          <div className="pricing-card pricing-card--featured">
            <span className="eyebrow eyebrow--red">Hire</span>
            <h3>Monthly Hire</h3>
            <div className="pricing-card__price">
              £60<span> /month · 12-month term</span>
            </div>
            <div className="pricing-card__price" style={{ fontSize: '1.6rem' }}>
              £50<span> /month · 18-month term</span>
            </div>
            <ul>
              <li>Delivery and setup included</li>
              <li>Maintenance included for the hire term</li>
              <li>No upfront capital outlay</li>
            </ul>
            <a href="/contact" className="btn btn--primary">
              Hire Enquiry
            </a>
          </div>

          <div className="pricing-card">
            <span className="eyebrow eyebrow--muted">Buy</span>
            <h3>Buy Outright</h3>
            <div className="pricing-card__price">£1,049.99</div>
            <ul>
              <li>One-off payment, yours to keep</li>
              <li>Delivery included</li>
              <li>Ideal if you know you’ll use it long-term</li>
            </ul>
            <a href={BUY_MAILTO} className="btn btn--outline">
              Buy Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
