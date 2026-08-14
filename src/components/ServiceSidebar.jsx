import { useState } from 'react';
import { Link } from 'react-router-dom';
import { buildWhatsAppMessage, openWhatsApp } from '../utils/whatsapp.js';

const interestOptions = [
  'Site Identification & Feasibility',
  'Specialised Site Support',
  'Training',
  'Rapid Start-up',
  'Patient Recruitment & Retention',
  'Overall study management',
  'Other...',
];

const serviceLinks = [
  {
    label: 'Site Selection & Feasibility',
    path: '/services/site-selection-feasibility',
  },
  {
    label: 'Specialised Site Support',
    path: '/services/specialised-site-support',
    children: [
      {
        label: 'Rapid Start-up',
        path: '/services/specialised-site-support/rapid-start-up',
      },
      {
        label: 'Patient Recruitment & Retention',
        path: '/services/specialised-site-support/patient-recruitment-retention',
      },
      {
        label: 'Overall study management',
        path: '/services/specialised-site-support/overall-study-management',
      },
    ],
  },
  {
    label: 'Training',
    path: '/services/training',
  },
  {
    label: 'Clinical Research',
    path: '/services/clinical-research',
  },
];

const initialState = {
  interest: '',
  name: '',
  companyName: '',
  email: '',
  mobile: '',
  message: '',
};

function ServiceSidebar({ defaultInterest = '' }) {
  const [form, setForm] = useState(initialState);

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus('sending');

    const message = buildWhatsAppMessage('Instant Quote Request', [
      ["I'm Interested In", form.interest],
      ['Name', form.name],
      ['Company Name', form.companyName],
      ['Email', form.email],
      ['Mobile', form.mobile],
      ['Message / Requirement', form.message],
    ]);
    openWhatsApp(message);

    setTimeout(() => {
      setStatus('sent');

      setForm(initialState);
    }, 700);
  };

  return (
    <aside className="service-sidebar">

      {/* GET INSTANT QUOTE */}
      <div className="sidebar-widget sidebar-quote">

        <h4>Get Instant Quote</h4>

        <form
          className="wpcf7-form"
          onSubmit={handleSubmit}
        >

          {/* I'M INTERESTED IN */}
          <p>
            <select
  id="interest"
  name="interest"
  className="wpcf7-form-control"
  value={form.interest}
  onChange={handleChange}
  required
>
  <option value="" disabled>
    I'M INTERESTED IN *
  </option>

  {interestOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>
          </p>

          {/* YOUR NAME */}
          <p>
            <input
              className="wpcf7-form-control"
              placeholder="YOUR NAME *"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </p>

          {/* COMPANY NAME */}
          <p>
            <input
              className="wpcf7-form-control"
              placeholder="COMPANY NAME *"
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              required
            />
          </p>

          {/* YOUR EMAIL */}
          <p>
            <input
              className="wpcf7-form-control"
              placeholder="YOUR EMAIL *"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </p>

          {/* MOBILE */}
          <p>
            <input
              className="wpcf7-form-control"
              placeholder="MOBILE *"
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
            />
          </p>

          {/* MESSAGE */}
          <p>
            <textarea
              className="wpcf7-form-control"
              placeholder="YOUR MESSAGE / REQUIREMENT"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
            />
          </p>

          {/* SUBMIT */}
          <p className="sidebar-submit-row">
            <input
              className="wpcf7-form-control wpcf7-submit"
              type="submit"
              value={
                status === 'sending'
                  ? 'SENDING…'
                  : 'SUBMIT'
              }
              disabled={status === 'sending'}
            />
          </p>

          {status === 'sent' && (
            <div className="wpcf7-response-output success">
              Thanks! We'll be in touch shortly.
            </div>
          )}

        </form>
      </div>

      {/* OUR SERVICES */}
      <div className="sidebar-widget sidebar-services">

        <h4>Our Services</h4>

        <ul>
          {serviceLinks.map((item) => (
            <li key={item.path}>

              <Link to={item.path}>
                {item.label}
              </Link>

              {item.children && (
                <ul>
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <Link to={child.path}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

            </li>
          ))}
        </ul>

      </div>

    </aside>
  );
}

export default ServiceSidebar;