import PageBanner from '../components/PageBanner.jsx';
import ServiceSidebar from '../components/ServiceSidebar.jsx';
import './servicePages.css';
import sse from '../assets/ss5.webp';


function OverallStudyManagement() {
  return (
    <div id="content" className="no-sidebar">
      <PageBanner title="Overall Study Management" />

      <section className="service-detail-section">
        <div className="container service-detail-grid">
          <div className="service-detail-main">
            <img
              className="service-detail-image"
              src={sse}
              alt="Overall study management"
            />

            <p>
              At The Next Generation, we put a lot of attention and commitment to ensure the performance and
              quality of study deliverables. The Site Support model we implement is
              metrics-driven and it includes process and tools which integrates all key drivers
              for the successful conduct of your studies at sites.
            </p>

            <p>
              With the vast experience in this field, The Next Generation understands that efficient and rapid
              start-up planning is key to the success of any clinical trial. Therefore, we
              support the identification and selection of high quality and the most dependable
              investigator sites through our detailed and structured feasibility. The Next Generation has
              agreements in place with many sites who have experienced investigators, suitable
              facilities and infrastructure as well as established processes for clinical
              trials.
            </p>

            <p>
              We centrally organize and support simultaneous start-up activities for our sites
              through our experienced team of in-house project associates. This significantly
              reduces start-up timelines for The Next Generation sites. These activities are as follows:
            </p>

            <ul>
              <li>
                Collection of essential documents for the regulatory submission and medicine
                release package
              </li>
              <li>Informed Consent Form (ICF) review and site-specific customization of ICFs</li>
              <li>Ethics Committee submission coordination</li>
              <li>Contract negotiation</li>
              <li>
                Adherence to the local country specific requirements and addressing study
                specific requirements at all the sites
              </li>
            </ul>

            <p>
              We deploy well-trained, qualified, capable and dedicated site operations
              specialists and/or site coordinators at each Investigator site. These site
              specialists and/or coordinators provide support for the day to day study-related
              activities at the site and report centrally into our senior Project Managers at
              The Next Generation.
            </p>

            <p>
              In the advice with Investigators at the site and with our customer, The Next Generation implements
              various metrics-driven processes and tools such as quality indicators dashboard,
              error prevention plan, lessons learned session, etc. These processes help to ensure
              speed-up patient recruitment, proper study conduct and overall high quality and
              credible patient data at its sites.
            </p>
          </div>

          <ServiceSidebar defaultInterest="Overall study management" />
        </div>
      </section>
    </div>
  );
}

export default OverallStudyManagement;
