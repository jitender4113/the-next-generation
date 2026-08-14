import PageBanner from '../components/PageBanner.jsx';
import ServiceSidebar from '../components/ServiceSidebar.jsx';
import './servicePages.css';
import ssc from '../assets/ss3.png';


function Training() {
  return (
    <div id="content" className="no-sidebar">
      <PageBanner title="Training" />

      <section className="service-detail-section">
        <div className="container service-detail-grid">
          <div className="service-detail-main">
            <img
              className="service-detail-image"
              src={ssc}
              alt="Training"
            />

            <p>
              At The Next Generation, we offer customized training courses to companies, professionals,
              investigators, sites, and students in the field of clinical research. Training
              courses are designed by our experts who have extensive experience in the clinical
              research field. They combine theoretical aspects with practical workshops and
              simulations that makes our training courses more beneficial.
            </p>

            <h3>Some of our well-designed training courses are</h3>
            <ul>
              <li>ICH-GCP training</li>
              <li>Training on local country specific regulations</li>
              <li>Standard Operating Procedures (SOP) development</li>
              <li>Therapeutic area training (Conducted by clinical experts)</li>
              <li>Clinical Research Coordinator training</li>
            </ul>
          </div>

          <ServiceSidebar defaultInterest="Training" />
        </div>
      </section>
    </div>
  );
}

export default Training;
