import SEO from '../components/SEO.jsx'
import EnquiryCTA from '../components/EnquiryCTA.jsx'

export default function HomeUse() {
  return (
    <>
      <SEO
        title="Rent a Pilates Reformer at Home UK"
        description="Rent a professional Align-Pilates reformer for home use in the UK. Ideal for instructors teaching from home and individuals training seriously. Delivery, setup and maintenance included."
      />

      <section className="hero container">
        <span className="eyebrow eyebrow--red">Home Hire</span>
        <h1>Studio-Grade Training, At Home</h1>
        <p className="hero__intro">
          Whether you’re an instructor building a home studio or an
          individual serious about your practice, Reform Rentals brings
          professional Align-Pilates equipment into your space — delivered,
          installed and maintained, with none of the upfront cost of buying.
        </p>
        <div className="hero__actions">
          <a href="/contact" className="btn btn--primary">
            Enquire About Home Hire
          </a>
          <a href="/equipment" className="btn btn--outline">
            View Equipment
          </a>
        </div>
        <div
          className="photo-placeholder hero__photo"
          data-label="Home Studio Photo"
        />
      </section>

      <section className="section section--bordered container">
        <div className="two-col">
          <div>
            <span className="eyebrow eyebrow--muted">For Instructors</span>
            <h2>Teach From Home, Properly Equipped</h2>
            <p>
              Building a private client base from a home studio? A hired
              reformer gives you the same equipment your clients would use in
              a professional studio, without tying up capital before you’ve
              built your bookings.
            </p>
          </div>
          <div
            className="photo-placeholder"
            style={{ height: 280 }}
            data-label="Instructor Teaching Photo"
          />
        </div>
      </section>

      <section className="section section--bordered container">
        <div className="two-col two-col--reverse">
          <div
            className="photo-placeholder"
            style={{ height: 280 }}
            data-label="Home Training Photo"
          />
          <div>
            <span className="eyebrow eyebrow--muted">For Individuals</span>
            <h2>Train Seriously, On Your Schedule</h2>
            <p>
              If you train regularly and want the convenience of your own
              equipment, hiring gives you a professional reformer at home
              without the £15–20k price tag of buying outright — and it’s
              kept in full working order for as long as you have it.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--bordered container">
        <span className="eyebrow eyebrow--muted">What’s Included</span>
        <h2>Delivered. Installed. Maintained.</h2>
        <div className="feature-grid feature-grid--3">
          <div className="feature">
            <h3>Home Delivery</h3>
            <p>
              We deliver and position your reformer or chair in the room of
              your choice, ready to use from day one.
            </p>
          </div>
          <div className="feature">
            <h3>Full Setup</h3>
            <p>
              No assembly required on your part — our team sets up and checks
              the equipment on-site.
            </p>
          </div>
          <div className="feature">
            <h3>Ongoing Maintenance</h3>
            <p>
              If anything needs adjusting or servicing during your hire term,
              we take care of it.
            </p>
          </div>
        </div>
      </section>

      <EnquiryCTA
        eyebrow="Home Hire"
        heading="Bring The Studio Home"
        text="Tell us about your space and training goals, and we’ll recommend the right equipment."
        buttonLabel="Enquire About Home Hire"
      />
    </>
  )
}
