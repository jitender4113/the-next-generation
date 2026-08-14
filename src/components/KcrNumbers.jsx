function ParticleField() {
  // Lightweight CSS-only stand-in for the original particles.js background.
  const dots = Array.from({ length: 30 });
  return (
    <div className="particles-field" aria-hidden="true">
      {dots.map((_, i) => (
        <span
          key={i}
          className="particle-dot"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
}

function The Next GenerationNumbers() {
  return (
    <section className="section section-numbers">
      <ParticleField />
      <div className="container numbers-grid">
        <div className="numbers-text">
          <h1 className="numbers-heading">The Next Generation in Numbers</h1>
          <h4 className="numbers-subheading">
            One of the leading SMO that values performance over promises
          </h4>
          <span className="section-divider" />
          <img
            src="https://kcrindia.com/wp-content/uploads/2019/06/The Next Generation-Numbers.webp"
            alt="The Next Generation Numbers"
            width="900"
            height="570"
            className="numbers-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default The Next GenerationNumbers;
