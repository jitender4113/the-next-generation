import { useState } from 'react';
import { buildWhatsAppMessage, openWhatsApp } from '../utils/whatsapp.js';

const initialState = {
  companyName: '',
  address: '',
  phone: '',
  email: '',
  message: '',
};

function QuoteModal({ open, onClose }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const message = buildWhatsAppMessage('Need a Quotation', [
      ['Company Name', form.companyName],
      ['Address', form.address],
      ['Mobile Number', form.phone],
      ['Email Address', form.email],
      ['Requirement', form.message],
    ]);
    openWhatsApp(message);

    setTimeout(() => {
      setStatus('sent');
      setForm(initialState);
    }, 700);
  };

  return (
    <div id="request-a-rate" className={open ? 'is-open' : ''}>
      <div>
        <a
          href="#close"
          id="request-a-rate-close-button"
          onClick={(e) => {
            e.preventDefault();
            setStatus('idle');
            onClose();
          }}
        >
          <div id="nav-icon2">
            <span></span>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
        </a>
        <h2>Need a quotation?</h2>
        <p>
          Dear Customers, if you wish to receive a quotation, we kindly ask you to fill in below
          form. Once the form has been duly filled and submitted, the rates will be quoted to
          you.
        </p>

        <form className="wpcf7-form" onSubmit={handleSubmit}>
          <p className="ozy-half-input">
            <input
              className="wpcf7-form-control"
              placeholder="Company Name *"
              type="text"
              name="companyName"
              required
              value={form.companyName}
              onChange={handleChange}
            />
          </p>
          <p className="ozy-half-input-last">
            <input
              className="wpcf7-form-control"
              placeholder="Address *"
              type="text"
              name="address"
              required
              value={form.address}
              onChange={handleChange}
            />
          </p>
          <p className="ozy-half-input">
            <input
              className="wpcf7-form-control"
              placeholder="Mobile Number *"
              type="text"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
            />
          </p>
          <p className="ozy-half-input-last">
            <input
              className="wpcf7-form-control"
              placeholder="Email Address *"
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
              placeholder="Your Requirement"
              name="message"
              rows="2"
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
            <div className="wpcf7-response-output success">Thank you! We'll be in touch shortly.</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default QuoteModal;
