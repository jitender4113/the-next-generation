// import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
// import QuoteModal from './components/QuoteModal.jsx';
// import SearchOverlay from './components/SearchOverlay.jsx';
// import BackToTop from './components/BackToTop.jsx';
// import CallNowButton from './components/CallNowButton.jsx';
// import Home from './pages/Home.jsx';
// import AboutUs from './pages/AboutUs.jsx';
// import Services from './pages/Services.jsx';
// import SiteSelectionFeasibility from './pages/SiteSelectionFeasibility.jsx';
// import SpecialisedSiteSupport from './pages/SpecialisedSiteSupport.jsx';
// import RapidStartUp from './pages/RapidStartUp.jsx';
// import OverallStudyManagement from './pages/OverallStudyManagement.jsx';
// import Training from './pages/Training.jsx';
// import ClinicalResearch from './pages/ClinicalResearch.jsx';
// import ContactUs from './pages/ContactUs.jsx';
// import ScrollToTop from './components/ScrollToTop.jsx';

// function App() {
//   const [quoteOpen, setQuoteOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);

//   return (
//     <div id="body-bg-wrapper">
//       <Header onOpenQuote={() => setQuoteOpen(true)} onOpenSearch={() => setSearchOpen(true)} />

//       <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
//       <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

//       <main id="main">
//         <div className="container no-sidebar">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about-us" element={<AboutUs />} />
//             <Route path="/services" element={<Services />} />
//             <Route
//               path="/services/site-selection-feasibility"
//               element={<SiteSelectionFeasibility />}
//             />
//             <Route
//               path="/services/specialised-site-support"
//               element={<SpecialisedSiteSupport />}
//             />
//             <Route
//               path="/services/specialised-site-support/rapid-start-up"
//               element={<RapidStartUp />}
//             />
//             <Route
//               path="/services/specialised-site-support/overall-study-management"
//               element={<OverallStudyManagement />}
//             />
//             <Route path="/services/training" element={<Training />} />
//             <Route path="/services/clinical-research" element={<ClinicalResearch />} />
//             <Route path="/contact-us" element={<ContactUs />} />
//           </Routes>
//         </div>
//       </main>

//       <Footer />
//       <BackToTop />
//       <CallNowButton />
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import QuoteModal from './components/QuoteModal.jsx';
import SearchOverlay from './components/SearchOverlay.jsx';
import BackToTop from './components/BackToTop.jsx';
import CallNowButton from './components/CallNowButton.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import SiteSelectionFeasibility from './pages/SiteSelectionFeasibility.jsx';
import SpecialisedSiteSupport from './pages/SpecialisedSiteSupport.jsx';
import RapidStartUp from './pages/RapidStartUp.jsx';
import OverallStudyManagement from './pages/OverallStudyManagement.jsx';
import Training from './pages/Training.jsx';
import ClinicalResearch from './pages/ClinicalResearch.jsx';
import ContactUs from './pages/ContactUs.jsx';

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

            <Route
              path="/services/clinical-research"
              element={<ClinicalResearch />}
            />

            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </main>

      <Footer />
      <BackToTop />
      <CallNowButton />

    </div>
  );
}

export default App;