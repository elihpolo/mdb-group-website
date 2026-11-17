import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'motion/react';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import PhotoCredits from './pages/PhotoCredits.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const location = useLocation();

  return (
    // reducedMotion="user" disables transform/opacity animations for visitors who ask for less motion
    <MotionConfig reducedMotion="user">
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<ComingSoon page="about" />} />
            <Route path="/capabilities" element={<ComingSoon page="capabilities" />} />
            <Route path="/contract-vehicles" element={<ComingSoon page="contract-vehicles" />} />
            <Route path="/careers" element={<ComingSoon page="careers" />} />
            <Route path="/contact" element={<ComingSoon page="contact" />} />
            <Route path="/photo-credits" element={<PhotoCredits />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </MotionConfig>
  );
}
