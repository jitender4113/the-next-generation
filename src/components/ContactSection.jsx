import { useState } from 'react';
import Hero_logo from '../assets/logo.webp';
import { buildWhatsAppMessage, openWhatsApp } from '../utils/whatsapp.js';


const initialState = {
  name: '',
  companyName: '',
  mobile: '',
  email: '',
  message: '',
};

function ContactSection() {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const message = buildWhatsAppMessage('New Contact Enquiry', [
      ['Name', form.name],
      ['Company Name', form.companyName],
      ['Mobile', form.mobile],
      ['Email', form.email],
      ['Message / Requirement', form.message],
      ['Attachment', file ? `${file.name} (please attach this file in the chat)` : ''],
    ]);
    openWhatsApp(message);

    setTimeout(() => {
      setStatus('sent');
      setForm(initialState);
      setFile(null);
    }, 700);
  };

  return (
    <section className="section section-contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <img
            src={Hero_logo}
            alt="The Next Generation logo"
            width="300"
            height="179"
            loading="lazy"
            decoding="async"
          />
          <p>343, Baba Hirday Ram Colony, Mujesar, Sector-24, Faridabad – 121005, Haryana, India</p>
          <p>
            Mobile: <strong>+91-8130606117</strong>
            <br />
            Email: <strong>thenextgenservice@gmail.com</strong>
          </p>
          <p>
            Working Hours:
            <br />
            Mon-Sat : 9:00AM-6:00PM
          </p>
        </div>

        <div className="contact-form-wrap">
          <h4>Contact Us</h4>
          <form className="wpcf7-form" onSubmit={handleSubmit}>
            <p className="ozy-half-input">
              <input
                className="wpcf7-form-control"
                placeholder="Your Name *"
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </p>
            <p className="ozy-half-input-last">
              <input
                className="wpcf7-form-control"
                placeholder="Company Name*"
                type="text"
                name="companyName"
                required
                value={form.companyName}
                onChange={handleChange}
              />
            </p>
            <p className="ozy-half-input">
              <input
                className="wpcf7-form-control"
                placeholder="Mobile *"
                type="text"
                name="mobile"
                required
                value={form.mobile}
                onChange={handleChange}
              />
            </p>
            <p className="ozy-half-input-last">
              <input
                className="wpcf7-form-control"
                placeholder="Your Email *"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </p>
            <p className="ozy-full-input">
              <textarea
                className="wpcf7-form-control"
                placeholder="Your Message / Requirement"
                name="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
              />
            </p>
            <p className="ozy-full-input">
              <input
                className="wpcf7-form-control"
                type="file"
                accept=".pdf,.docx"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
            </p>
            <p className="ozy-full-input-center">
              <input
                className="wpcf7-form-control wpcf7-submit"
                type="submit"
                value={status === 'sending' ? 'Sending…' : 'SUBMIT'}
                disabled={status === 'sending'}
              />
            </p>
            {status === 'sent' && (
              <div className="wpcf7-response-output success">
                Thank you! Your message has been sent.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
