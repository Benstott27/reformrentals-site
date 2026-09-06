import SEO from '../components/SEO.jsx'
import EnquiryCTA from '../components/EnquiryCTA.jsx'

export default function Studios() {
  return (
    <>
      <SEO
        title="Pilates Reformer Hire for Studios UK"
        description="Hire professional Align-Pilates reformers for your studio. Avoid the £15–20k upfront cost per reformer — we handle delivery, setup and maintenance, and you can scale up or down as you grow."
      />

      <section className="hero container">
        <span className="eyebrow eyebrow--red">Studio Hire</span>
        <h1>Fit Out Your Studio Without The Capital Outlay</h1>
        <p className="hero__intro">
          Buying professional reformers outright means finding £15,000–£20,000
          per machine before you’ve taken a single booking. Reform Rentals
          lets you open, expand or refresh your studio on flexible hire
          terms — with delivery, installation and ongoing maintenance
          included as standard.
        </p>
        <div className="hero__actions">
          <a href="/contact" className="btn btn--primary">
            Enquire About Studio Hire
          </a>
          <a href="/equipment" className="btn btn--outline">
            View Equipment
          </a>
        </div>
        <div
          className="photo-placeholder hero__photo"
          data-label="Studio Reformer Row Photo"
        />
      </section>

      <section className="section section--bordered container">
        <span className="eyebrow eyebrow--muted">Why Hire, Not Buy</span>
        <h2>The Capital Stays In Your Business</h2>
        <div className="stat-row">
          <div className="stat">
            <span className="stat__number">£15–20k</span>
            <span className="stat__label">
              Typical upfront cost to buy a single professional reformer
              outright
            </span>
          </div>
          <div className="stat">
            <span className="stat__number">0</span>
            <span className="stat__label">
              Maintenance call-outs you need to arrange yourself — we cover it
            </span>
          </div>
          <div className="stat">
            <span className="stat__number">Scale</span>
            <span className="stat__label">
              Add machines for a launch or peak season, and hand them back
              when demand eases
            </span>
          </div>
        </div>
      </section>

      <section className="section section--bordered container">
        <span className="eyebrow eyebrow--muted">Included As Standard</span>
        <h2>We Handle The Logistics</h2>
        <div className="feature-grid feature-grid--3">
          <div className="feature">
            <h3>Delivery & Installation</h3>
            <p>
              Every reformer is delivered, assembled and positioned in your
              studio by our team — no drilling instructions, no lifting gear
              required from you.
            </p>
          </div>
          <div className="feature">
            <h3>Ongoing Maintenance</h3>
            <p>
              Springs, wheels and upholstery wear with studio use. We service
              and repair hired equipment for the life of the agreement, at no
              extra cost.
            </p>
          </div>
          <div className="feature">
            <h3>Scale Up Or Down</h3>
            <p>
              Opening a second studio, adding a reformer class, or
              downsizing a room? Adjust your fleet size as your business
              changes, without being stuck with idle assets.
            </p>
          </div>
          <div className="feature">
            <h3>Professional Equipment</h3>
            <p>
              We supply Align-Pilates C8-Pro and R8-Pro reformers — the same
              equipment used in leading studios, built for daily
              multi-class use.
            </p>
          </div>
          <div className="feature">
            <h3>Predictable Monthly Cost</h3>
            <p>
              Fixed monthly hire fees make studio budgeting straightforward,
              with no surprise repair bills eating into margin.
            </p>
          </div>
          <div className="feature">
            <h3>Fast Turnaround</h3>
            <p>
              We hold stock ready to deploy, so new studios and expansions
              aren’t held up waiting on manufacturing lead times.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--bordered container">
        <span className="eyebrow eyebrow--muted">FAQ</span>
        <h2>Studio Hire Questions</h2>
        <div className="faq">
          <details className="faq__item">
            <summary>How many reformers can I hire?</summary>
            <p>
              Any number, from a single machine for a small studio to a full
              multi-reformer class setup. We’ll help you plan the right
              quantity for your room using our{' '}
              <a href="/space-planner" className="link-arrow" style={{ borderBottom: '1px solid currentColor' }}>
                space planner
              </a>
              .
            </p>
          </details>
          <details className="faq__item">
            <summary>What’s included in the monthly hire cost?</summary>
            <p>
              Delivery, installation, and all routine maintenance and repairs
              for the duration of your agreement. You focus on running
              classes — we keep the equipment in top condition.
            </p>
          </details>
          <details className="faq__item">
            <summary>Can I upgrade or add equipment later?</summary>
            <p>
              Yes. As your studio grows, you can add reformers or chairs to
              your hire agreement at any point.
            </p>
          </details>
          <details className="faq__item">
            <summary>What equipment do you supply?</summary>
            <p>
              Align-Pilates C8-Pro and R8-Pro reformers, plus the Align-Pilates
              Essential Chair. See the{' '}
              <a href="/equipment" className="link-arrow" style={{ borderBottom: '1px solid currentColor' }}>
                full equipment range
              </a>
              .
            </p>
          </details>
          <details className="faq__item">
            <summary>Is there a minimum hire term?</summary>
            <p>
              Terms are agreed based on your studio’s needs. Get in touch and
              we’ll put together options that suit your plans.
            </p>
          </details>
        </div>
      </section>

      <EnquiryCTA
        eyebrow="Studio Hire"
        heading="Let’s Fit Out Your Studio"
        text="Tell us about your space, timeline and class plans, and we’ll come back with a hire proposal."
        buttonLabel="Enquire About Studio Hire"
      />
    </>
  )
}
