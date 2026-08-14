import { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import QuoteModal from './components/QuoteModal.jsx';
import SearchOverlay from './components/SearchOverlay.jsx';
import BackToTop from './components/BackToTop.jsx';
import CallNowButton from './components/CallNowButton.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';

// Keep the homepage in the initial bundle; load secondary pages on demand.
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const SiteSelectionFeasibility = lazy(() => import('./pages/SiteSelectionFeasibility.jsx'));
const SpecialisedSiteSupport = lazy(() => import('./pages/SpecialisedSiteSupport.jsx'));
const RapidStartUp = lazy(() => import('./pages/RapidStartUp.jsx'));
const OverallStudyManagement = lazy(() => import('./pages/OverallStudyManagement.jsx'));
const Training = lazy(() => import('./pages/Training.jsx'));
const ClinicalResearch = lazy(() => import('./pages/ClinicalResearch.jsx'));
const ContactUs = lazy(() => import('./pages/ContactUs.jsx'));

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div id="body-bg-wrapper">
      <ScrollToTop />

      <Header
        onOpenQuote={() => setQuoteOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <QuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <main id="main">
        <div className="container no-sidebar">
          <Suspense fallback={<div className="route-loading" role="status" aria-live="polite">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/site-selection-feasibility"
                element={<SiteSelectionFeasibility />}
              />
              <Route
                path="/services/specialised-site-support"
                element={<SpecialisedSiteSupport />}
              />
              <Route
                path="/services/specialised-site-support/rapid-start-up"
                element={<RapidStartUp />}
              />
              <Route
                path="/services/specialised-site-support/overall-study-management"
                element={<OverallStudyManagement />}
              />
              <Route path="/services/training" element={<Training />} />
              <Route path="/services/clinical-research" element={<ClinicalResearch />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </Suspense>
        </div>
      </main>

      <Footer />
      <BackToTop />
      <CallNowButton />
    </div>
  );
}

export default App;
