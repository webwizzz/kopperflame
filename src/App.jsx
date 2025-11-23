import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SvgShuffleLoader from "./pages/SvgShuffleLoader";

// Lazy loading for pages
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutUs = lazy(() => import("./components/AboutC"));
const DeepaGurnani = lazy(() => import("./pages/DeepaGurnani"));
const HomePage = lazy(() => import("./pages/HomePage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const AceBlend = lazy(() => import("./pages/AceBlend"));
const Artist = lazy(() => import("./pages/Artist"));
const Atelier = lazy(() => import("./pages/Atelier"));
const DoItUp = lazy(() => import("./pages/DoItUp"));
const FeelWell = lazy(() => import("./pages/FeelWell"));
const PhotoPage = lazy(() => import("./pages/PhotoPage"));
const Cinematography = lazy(() => import("./pages/Cinematography"));

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout to your desired loading duration

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger loader on path change

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center bg-white z-50"
          >
            <SvgShuffleLoader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content section */}
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
        style={{ display: isLoading ? "none" : "block" }} // Hide content during loading
      >
        <Nav />
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work/deepa-gurnani" element={<DeepaGurnani />} />
            <Route path="/work/aceblend" element={<AceBlend />} />
            <Route path="/work/artist" element={<Artist />} />
            <Route path="/work/atelier" element={<Atelier />} />
            <Route path="/work/doitup" element={<DoItUp />} />
            <Route path="/work/feelwell" element={<FeelWell />} />
            <Route path="/work/photography" element={<PhotoPage />} />
            <Route path="/work/cinematography" element={<Cinematography />} />
          </Routes>
        </Suspense>
        <Footer />
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
