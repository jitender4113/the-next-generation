import HeroSlider from '../components/HeroSlider.jsx';
import AboutSection from '../components/AboutSection.jsx';
import TeamSection from '../components/TeamSection.jsx';
import ContactSection from '../components/ContactSection.jsx';

function Home() {
  return (
    <div id="content" className="no-sidebar">
      <HeroSlider />
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}

export default Home;
