import profile from '../assets/profile.webp';


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
            loading="lazy"
            decoding="async"
          />
          <h4 className="team-name">Mr. Chandan Gupta, Director Site Operations</h4>
          <p className="team-role">
            <strong>(The next generation clincal research services Pvt.ltd)</strong>
          </p>
          <p className="team-bio">
            Mr. Gupta is responsible for the oversight and management of clinical research
            studies undertaken by The Next Generation and hospitals to ensure quality and compliance. Mr Gupta graduated in desh Bhagat university Punjab with good experience in the clinical Research industry he has managed many global and national clincal trials in various therapeutics areas.

          </p>
        </div>
      </section>
    </>
  );
}

export default TeamSection;
