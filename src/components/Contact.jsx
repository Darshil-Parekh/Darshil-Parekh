import React, { useState } from 'react'

const STORAGE_KEY = 'portfolio-contact-submissions'

function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const subject = formData.get('subject').trim()
    const message = formData.get('message').trim()
    const submission = {
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    }
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

    let saved = false

    try {
      const storedSubmissions = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      const submissions = Array.isArray(storedSubmissions) ? storedSubmissions : []
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...submissions, submission]))
      saved = true
    } catch {
      saved = false
    }

    setStatus(saved
      ? 'Message saved in this browser. Opening your email app…'
      : 'Could not save locally. Opening your email app…')

    window.location.href = `mailto:darshilparekh956@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="contact-eyebrow">05 / Get in touch</p>
          <h2 id="contact-title">Let’s start a <span>conversation.</span></h2>
          <p className="contact-description">
            Have a project in mind or want to work together? Send a message and I’ll get back to you.
          </p>
          <div className="contact-details">
            <a href="mailto:darshilparekh956@gmail.com">darshilparekh956@gmail.com</a>
            <a href="tel:+917201094379">+91 72010 94379</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field-row">
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <label>
            Subject
            <input name="subject" type="text" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit">Send message <span aria-hidden="true">↗</span></button>
          <p className="contact-form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact