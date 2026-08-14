import { useState } from 'react';
import PageBanner from '../components/PageBanner.jsx';
import { buildWhatsAppMessage, openWhatsApp } from '../utils/whatsapp.js';
import './servicePages.css';

const initialState = {
  name: '',
  companyName: '',
  mobile: '',
  email: '',
  message: '',
};

function ContactUs() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const message = buildWhatsAppMessage('New Contact Us Message', [
      ['Name', form.name],
      ['Company Name', form.companyName],
      ['Mobile', form.mobile],
      ['Email', form.email],
      ['Message / Requirement', form.message],
    ]);
    openWhatsApp(message);

    setTimeout(() => {
      setStatus('sent');
      setForm(initialState);
    }, 700);
  };

  return (
    <div id="content" className="no-sidebar">
      <PageBanner title="Contact Us" />

      <section className="contact-us-section">
        <div className="container">
          <div className="contact-us-grid">
            <div className="contact-us-details">
              <p>
                343, Baba Hirday Ram Colony, Mujesar, Sector-24, Faridabad – 121005, Haryana,
                India
              </p>
              <p>
                Mobile: <strong>+91-8700068248</strong>
                <br />
                Email: <strong>thenextgenservice@gmail.com</strong>
              </p>
              <p>
                Working Hours:
                <br />
                Mon-Sat : 10:00AM-8:00PM
              </p>
            </div>

            <div className="contact-us-map">
              <iframe
                title="The Next Generation location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14042.880043001565!2d77.3059094!3d28.3673134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f5ca5f24a5d210!2sKomplett+Clinical+Research!5e0!3m2!1sen!2sin!4v1561473192570!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="contact-us-form-wrap">
            <h3>Send us a message</h3>
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
    </div>
  );
}

export default ContactUs;
