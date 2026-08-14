import { useEffect, useState } from 'react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className={`logipro-btt-container${visible ? ' is-visible' : ''}`}>
      <button type="button" className="top logipro-btt" aria-label="Back to top" onClick={scrollUp}>
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default BackToTop;
