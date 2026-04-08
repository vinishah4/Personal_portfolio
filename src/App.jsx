import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const BlogAttribution = lazy(() => import('./pages/BlogAttribution'));
const BlogMinecraft = lazy(() => import('./pages/BlogMinecraft'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const IndonesiaMarketEntry = lazy(() => import('./pages/IndonesiaMarketEntry'));
const NorthwindTraders = lazy(() => import('./pages/NorthwindTraders'));
const WpcFacilitator = lazy(() => import('./pages/WpcFacilitator'));
const BridgeCareerPlatform = lazy(() => import('./pages/BridgeCareerPlatform'));
const StrategicSwotNetflix = lazy(() => import('./pages/StrategicSwotNetflix'));
const AsuProductionAssistant = lazy(() => import('./pages/AsuProductionAssistant'));
const Resume = lazy(() => import('./pages/Resume'));


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

function RouteLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-6">
      <div className="rounded-full border border-brand-line/70 bg-brand-white/80 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-brand-plum/80 uppercase shadow-sm">
        Loading
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<RouteLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/wpc-facilitator-program" element={<WpcFacilitator />} />
              <Route path="/portfolio/indonesia-market-entry" element={<IndonesiaMarketEntry />} />
              <Route path="/portfolio/northwind-traders" element={<NorthwindTraders />} />
              <Route path="/portfolio/bridgecareer-platform-strategy" element={<BridgeCareerPlatform />} />
              <Route path="/portfolio/strategic-swot-analysis-netflix" element={<StrategicSwotNetflix />} />
              <Route path="/portfolio/asu-production-assistant" element={<AsuProductionAssistant />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog/full-funnel-analytics" element={<BlogPost />} />
              <Route path="/blog/marketing-attribution" element={<BlogAttribution />} />
              <Route path="/blog/minecraft-data-foundation" element={<BlogMinecraft />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
