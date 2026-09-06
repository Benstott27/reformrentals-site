import { useState } from 'react'
import SEO from '../components/SEO.jsx'

const INTEREST_OPTIONS = [
  'Reformer Hire — Studio',
  'Reformer Hire — Home',
  'Chair Hire',
  'Chair Purchase',
  'General',
]

const HEAR_OPTIONS = [
  'Google/Web',
  'Instagram',
  'TikTok',
  'ChatGPT/AI',
  'Friend/Family',
  'Other',
]

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  interest: INTEREST_OPTIONS[0],
  region: '',
  message: '',
  hearAbout: HEAR_OPTIONS[0],
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_STATE)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const subject = `Enquiry: ${form.interest} — ${form.name || 'New enquiry'}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Interest: ${form.interest}`,
      `Region: ${form.region}`,
      `Heard about us via: ${form.hearAbout}`,
      '',
      'Message:',
      form.message,
    ].join('\n')

    window.location.href = `mailto:hello@reformrentals.co.uk?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <SEO
        title="Contact & Enquiries"
        description="Get in touch with Reform Rentals for pilates reformer or chair hire enquiries, across studios and homes in the UK."
      />

      <section className="hero container">
        <span className="eyebrow eyebrow--red">Contact</span>
        <h1>Make An Enquiry</h1>
        <p className="hero__intro">
          Tell us a bit about what you need and we’ll come back with
          availability, pricing and next steps.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row form-row--2">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={update('name')}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={update('email')}
              />
            </div>
          </div>

          <div className="form-row form-row--2">
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={update('phone')}
              />
            </div>
            <div className="field">
              <label htmlFor="region">Region</label>
              <input
                id="region"
                type="text"
                placeholder="e.g. Greater Manchester"
                value={form.region}
                onChange={update('region')}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="interest">I’m Interested In</label>
            <select id="interest" value={form.interest} onChange={update('interest')}>
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={form.message}
              onChange={update('message')}
              placeholder="Tell us about your studio or space, timings, and anything else useful."
            />
          </div>

          <div className="field">
            <label>Where Did You Hear About Us?</label>
            <div className="radio-group">
              {HEAR_OPTIONS.map((opt) => (
                <label key={opt}>
                  <input
                    type="radio"
                    name="hearAbout"
                    value={opt}
                    checked={form.hearAbout === opt}
                    onChange={update('hearAbout')}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn--primary">
              Send Enquiry
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
