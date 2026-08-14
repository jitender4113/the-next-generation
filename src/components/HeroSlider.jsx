

import { Link } from 'react-router-dom';
import heroImage from '../assets/hero_image.webp';

function HeroSlider() {
  return (
    <section className="hero-single">
      <div className="hero-image-wrapper">
        <img
          src={heroImage}
          alt="The Next Generation - Clinical Research"
          className="hero-image"
          loading="eager"

  fetchPriority="high"

  decoding="async"
        />

        <Link to="/services" className="hero-know-more">
          <span>Know More</span>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </section>
  );
}

export default HeroSlider;