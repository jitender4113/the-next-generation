import PageBanner from '../components/PageBanner.jsx';
import ServiceSidebar from '../components/ServiceSidebar.jsx';
import './servicePages.css';
import ssa from '../assets/ss1.png';

function SiteSelectionFeasibility() {
  return (
    <div id="content" className="no-sidebar">
      <PageBanner title="Site Identification & Feasibility" />

      <section className="service-detail-section">
        <div className="container service-detail-grid">
          <div className="service-detail-main">
            <img
              className="service-detail-image"
              src={ssa}
              alt="Site Identification & Feasibility"
            />

            <p>
              The Identification and selection of the optimal sites, Key Investigators and
              Opinion Leaders are prominent for the success of any clinical trial.
            </p>
            <p>
              The accomplished teams of The Next Generation having expert local knowledge are on the ground in
              each country facilitates close contact with investigators and sites. The present
              relationships of our teams, with investigators and site staff, is fully leveraged
              throughout the study and our feasibility process.
            </p>
            <p>
              Strong and established relationships with experienced investigators and site staff
              help to facilitate a timely but comprehensive feasibility assessment. It also helps
              to ensure and choose the most appropriate and best recruiting sites for our
              sponsor's projects.
            </p>
            <p>
              If you are planning to reduce the time of your study then the The Next Generation targeted approach
              to investigator recruitment, combined with our local experience, may be just what
              you need.
            </p>
            <p>
              The investigator of the The Next Generation supports the feasibility process and includes
              information about the following key parameters:
            </p>
            <p>
              The Next Generation's Investigator database supports the feasibility process and includes
              information about the following key parameters.
            </p>
          </div>

          <ServiceSidebar defaultInterest="Site Identification & Feasibility" />
        </div>
      </section>
    </div>
  );
}

export default SiteSelectionFeasibility;
