import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CompanyLandingPage from './pages/company/CompanyLandingPage';
import PostJobPage from './pages/company/PostJobPage';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.8 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.8 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 50);
      mouseY.set(e.clientY - 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/company" element={<CompanyLandingPage />} />
          <Route path="/company/post-job" element={<PostJobPage />} />
          <Route path="/" element={
            <>
              {/* Background particles */}
              <div className="particles-container">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="particle"
                    animate={{
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: Math.random() * 10 + 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Parallax cursor effect */}
              <motion.div
                className="cursor-glow"
                style={{ x: glowX, y: glowY }}
              />

              <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              <Hero />
              <About />
              <Features />
              <Testimonials />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;