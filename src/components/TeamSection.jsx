import profile from '../assets/profile.png';


function TeamSection() {
  return (
    <>
      <section className="section section-mission">
        <div className="container">
          <p>
            We at The Next Generation conquer the world with our passion to improve health care outcomes and
            enhance patients' health care experience through Innovation.
          </p>
          <p>&ldquo;The Next Generation works on new ideas which packs all the old ideas in one beg&rdquo;</p>
        </div>
      </section>

      <section className="section section-team">
        <div className="container team-card">
          <img
            className="team-photo"
            src={profile}
            alt="Mr. Chandan Gupta"
            width="150"
            height="150"
          />
          <h4 className="team-name">Mr. Chandan Gupta, Director Site Operations</h4>
          <p className="team-role">
            <strong>(The Next Generation)</strong>
          </p>
          <p className="team-bio">
            Ms. Tanwar is responsible for the oversight and management of clinical research
            studies undertaken by The Next Generation and hospitals to ensure quality and compliance. Ms. Tanwar
            received her master's degree from the University of Rohtak, India. With good
            experience in the clinical research industry, she has managed many global and
            national clinical trials in various therapeutic areas.
          </p>
        </div>
      </section>
    </>
  );
}

export default TeamSection;
