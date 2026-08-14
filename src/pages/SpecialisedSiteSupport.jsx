import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import ServiceSidebar from '../components/ServiceSidebar.jsx';
import './servicePages.css';
import ssb from '../assets/ss2.webp';


function SpecialisedSiteSupport() {
  return (
    <div id="content" className="no-sidebar">
      <PageBanner title="Specialised Site Support" />

      <section className="service-detail-section">
        <div className="container service-detail-grid">
          <div className="service-detail-main">
            <img
              className="service-detail-image"
              src={ssb}
              alt="Specialised Site Support"
              loading="lazy"
decoding="async"
            />

            <p>
              <strong>The Next Generation has some Specialised Site Support Services which include:</strong>
            </p>

            <div className="service-block">
              <h3>1. Rapid Start-up</h3>
              <p>
                We focus on quality and performance that starts right at the beginning with an
                efficient start-up planning. The extensive experience of The Next Generation's team, we
                understand the potential challenges that routinely delay start-up. As a result,
                we work very closely with our clients to ensure these challenges are proactively
                addressed so that sites can be started quickly.
              </p>
              <Link
                to="/services/specialised-site-support/rapid-start-up"
                className="read-more-link"
              >
                Read More&nbsp;»
              </Link>
            </div>

            <div className="service-block">
              <h3>2. Overall Study Management</h3>
              <p>
                At The Next Generation, we put a lot of attention and commitment to ensure the performance and
                quality of study deliverables. The Site Support model we implement is
                metrics-driven and it includes process and tools which integrates all key drivers
                for the successful conduct of your studies at sites.
              </p>
              <Link
                to="/services/specialised-site-support/overall-study-management"
                className="read-more-link"
              >
                Read More&nbsp;»
              </Link>
            </div>
          </div>

          <ServiceSidebar defaultInterest="Specialised Site Support" />
        </div>
      </section>
    </div>
  );
}

export default SpecialisedSiteSupport;
