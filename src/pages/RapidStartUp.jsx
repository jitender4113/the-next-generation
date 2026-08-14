import PageBanner from '../components/PageBanner.jsx';
import ServiceSidebar from '../components/ServiceSidebar.jsx';
import './servicePages.css';
import ssd from '../assets/ss4.webp';


function RapidStartUp() {
  return (
    <div id="content" className="no-sidebar">
      <PageBanner title="Rapid Start-up" />

      <section className="service-detail-section">
        <div className="container service-detail-grid">
          <div className="service-detail-main">
            <img
              className="service-detail-image"
              src={ssd}
              alt="Rapid Start-up"
              loading="lazy"
decoding="async"
            />

            <p>
              We mainly focus on the quality and performance starts right at the beginning with
              an efficient start-up planning. Based on our vast experience in this field, we
              understand the potential challenges that routinely delay the start-up. Therefore we
              work very closely with our customers to ensure these challenges are proactively
              addressed so that sites can be started quickly.
            </p>

            <p>
              At The Next Generation, we provide a single point of contact to our customers for all of our sites
              and centrally coordinate various start-up activities such as:
            </p>

            <ul>
              <li>Collection of site-specific information</li>
              <li>Collection of essential, critical or regulatory green light documents</li>
              <li>Finalization of Informed Consent Forms with site-specific changes</li>
              <li>
                Coordination of initial and subsequent ethics committee or research committee
                submissions (if any)
              </li>
              <li>Contract negotiation and execution</li>
              <li>
                Addressing the specific needs and infrastructural requirements of the study on
                each site
              </li>
            </ul>

            <p>
              The centralized coordination of activities significantly reduces the start-up
              timelines and saves costs and efforts for our customers.
            </p>
          </div>

          <ServiceSidebar defaultInterest="Rapid Start-up" />
        </div>
      </section>
    </div>
  );
}

export default RapidStartUp;
