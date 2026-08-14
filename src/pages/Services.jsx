import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import './servicePages.css';

const services = [
  { label: 'Site Selection & Feasibility', path: '/services/site-selection-feasibility', icon: 'fa-map-marker' },
  { label: 'Specialised Site Support', path: '/services/specialised-site-support', icon: 'fa-life-ring' },
  { label: 'Training', path: '/services/training', icon: 'fa-graduation-cap' },
  { label: 'Clinical Research', path: '/services/clinical-research', icon: 'fa-flask' },
];

function Services() {
  return (
    <div id="content" className="no-sidebar">
      <PageBanner title="Services" />

      <section className="simple-page-section">
        <div className="container">
          <div className="simple-page-content">
            <p>Our intelligent clinical methods aid the drug development process for our Sponsors.</p>
            <p>
              Our added value comes from our vast knowledge of specific local regulatory
              requirements, individual site and investigator relationships and logistical
              requirements in each of the countries we operate in.
            </p>
            <p>
              The Next Generation is able to draw on the specific experience of its teams to leverage their
              relationships with Key Opinion Leaders, Investigators and sites within their
              regions.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <Link key={service.path} to={service.path} className="service-card">
                <span className="service-card-icon">
                  <i className={`fa ${service.icon}`} aria-hidden="true"></i>
                </span>
                <h4>{service.label}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
