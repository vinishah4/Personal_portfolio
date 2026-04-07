import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BlogPost from './pages/BlogPost';
import BlogAttribution from './pages/BlogAttribution';
import BlogMinecraft from './pages/BlogMinecraft';
import Portfolio from './pages/Portfolio';
import IndonesiaMarketEntry from './pages/IndonesiaMarketEntry';
import NorthwindTraders from './pages/NorthwindTraders';
import WpcFacilitator from './pages/WpcFacilitator';
import BridgeCareerPlatform from './pages/BridgeCareerPlatform';
import StrategicSwotNetflix from './pages/StrategicSwotNetflix';
import Resume from './pages/Resume';


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0, 0);
        }
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/wpc-facilitator-program" element={<WpcFacilitator />} />
            <Route path="/portfolio/indonesia-market-entry" element={<IndonesiaMarketEntry />} />
            <Route path="/portfolio/northwind-traders" element={<NorthwindTraders />} />
            <Route path="/portfolio/bridgecareer-platform-strategy" element={<BridgeCareerPlatform />} />
            <Route path="/portfolio/strategic-swot-analysis-netflix" element={<StrategicSwotNetflix />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/full-funnel-analytics" element={<BlogPost />} />
            <Route path="/blog/marketing-attribution" element={<BlogAttribution />} />
            <Route path="/blog/minecraft-data-foundation" element={<BlogMinecraft />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
