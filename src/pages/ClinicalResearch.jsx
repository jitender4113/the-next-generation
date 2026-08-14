import PageBanner from '../components/PageBanner.jsx';
import ServiceSidebar from '../components/ServiceSidebar.jsx';
import './servicePages.css';

function ClinicalResearch() {
  return (
    <div id="content" className="no-sidebar">
      <PageBanner title="Clinical Research in Therapeutic Area" />

      <section className="service-detail-section">
        <div className="container service-detail-grid">
          <div className="service-detail-main">
            <p>
              The Next Generation partners with sponsors across a range of therapeutic areas, drawing on our
              teams' clinical research experience and site relationships to support studies from
              feasibility through to close-out. Get in touch using the form to discuss your
              specific therapeutic area and study requirements.
            </p>
          </div>

          <ServiceSidebar defaultInterest="Other..." />
        </div>
      </section>
    </div>
  );
}

export default ClinicalResearch;
