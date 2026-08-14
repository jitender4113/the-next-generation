import './AboutUs.css';

function AboutUs() {
  return (
    <div id="content" className="no-sidebar about-page">
      {/* Page title / breadcrumb banner, matching the original theme's #page-title-wrapper */}
      <div id="page-title-wrapper" className="about-title-wrapper">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </div>

      <section className="section section-about-page">
        <div className="container about-container">
          {/* <h2 className="about-heading">ABOUT US</h2> */}

          <p className="about-lead">
            The Next Generation is an Independent Site Management Organization (SMO),
            based in Delhi (INDIA); providing quality clinical research solutions in India &amp;
            across the world to its clients for studies.
          </p>

          <p>
            We manage our own data, patient care, and outcomes, from study feasibility to
            database lock. We have one goal: to deliver high-quality clinical trial data from as
            many patients as possible, as quickly as possible – providing exemplary patient care
            at every step.
          </p>

          <h3 className="about-subheading">Vision</h3>
          <p>
            Our vision works on two principles I.e. Passion and innovation. We at The Next Generation conquer the
            world with our passion to improve health care outcomes and enhance patients' health
            care experience through Innovation.
          </p>
          <p className="about-quote">
            &ldquo;The Next Generation works on new ideas which packs all the old ideas in one beg&rdquo;
          </p>

          <h3 className="about-subheading">Goals to achieve this vision:</h3>
          <ul className="about-list">
            <li>
              To support for clinical studies in India and enhance patient and clinician
              engagement in the studies; and
            </li>
            <li>Reduce the research documentation work load by providing assistance</li>
            <li>Providing the best methodologies to fasten the projects</li>
            <li>Timely reporting of SAE &amp; AE to all stakeholders</li>
            <li>
              To establish process for identifying and addressing patient-oriented research
              priorities
            </li>
          </ul>

          <h3 className="about-subheading">Core Values…</h3>
          <ul className="about-list">
            <li>WIN-WIN Relationship with everyone involved in our Business.</li>
            <li>Transparency in all our Transactions.</li>
            <li>
              Understanding that our service efficiency is part of customer's balance sheet.
            </li>
          </ul>

          <p className="about-footnote">
            Protect the Environment by minimizing Pollution and Reducing National Wastage
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
