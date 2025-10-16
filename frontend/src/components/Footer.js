import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Footer.css';

const socialIcons = {
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.98 3.5C4.98 4.60457 4.07657 5.5 2.97 5.5C1.86343 5.5 0.96 4.60457 0.96 3.5C0.96 2.39543 1.86343 1.5 2.97 1.5C4.07657 1.5 4.98 2.39543 4.98 3.5Z" fill="currentColor"/>
      <path d="M0.5 8.5H4.44V23.5H0.5V8.5Z" fill="currentColor"/>
      <path d="M8.5 8.5H12.28V10.68H12.34C12.98 9.62 14.62 8.48 16.94 8.48C21.14 8.48 22 11.16 22 15.48V23.5H18.06V16.4C18.06 14.34 17.98 11.86 15.16 11.86C12.3 11.86 11.86 13.84 11.86 16.18V23.5H8.5V8.5Z" fill="currentColor"/>
    </svg>
  ),
  twitter: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 5.92C21.11 6.28 20.17 6.53 19.18 6.63C20.19 6.08 20.96 5.18 21.33 4.11C20.39 4.64 19.36 5.04 18.28 5.3C17.39 4.37 16.08 3.8 14.63 3.8C11.93 3.8 9.78 6 9.78 8.7C9.78 9.06 9.82 9.4 9.9 9.73C6.46 9.55 3.45 7.9 1.67 5.27C1.24 6.05 0.99 6.94 0.99 7.89C0.99 9.66 1.89 11.18 3.21 11.98C2.4 11.96 1.66 11.76 1 11.44C1 11.46 1 11.5 1 11.55C1 13.97 2.67 15.99 4.9 16.44C4.5 16.55 4.06 16.61 3.6 16.61C3.31 16.61 3.04 16.59 2.77 16.53C3.33 18.5 5.09 19.98 7.18 20C5.46 21.34 3.3 22.12 0.99 22.12C0.66 22.12 0.33 22.1 0 22.04C2.12 23.49 4.64 24.36 7.35 24.36C14.62 24.36 18.96 17.04 18.96 11.13C18.96 10.95 18.95 10.77 18.94 10.6C19.88 9.95 20.7 9.14 21.33 8.21C20.46 8.6 19.55 8.87 18.62 9.02C19.56 8.42 20.3 7.57 20.67 6.58C19.77 7.1 18.8 7.48 17.78 7.71C17.06 6.8 15.99 6.2 14.77 6.2C12.48 6.2 10.64 8.02 10.64 10.34C10.64 10.7 10.69 11.04 10.78 11.36C7.5 11.12 4.64 9.5 2.91 7.14C2.31 8.06 2 9.12 2 10.24C2 12.45 3.39 14.36 5.31 15.09C4.71 15.2 4.07 15.24 3.41 15.24C3 15.24 2.6 15.21 2.2 15.14C3 17 4.98 18.36 7.2 18.4C6.25 19.62 5.03 20.63 3.62 21.33C5.06 21.5 6.53 21.13 7.82 20.26C9.12 21.24 10.75 21.86 12.5 21.86C14.63 21.86 16.62 21.03 18.18 19.69C19.74 18.35 20.8 16.58 21.25 14.64C22.24 13.9 23 12.97 23.56 11.94C22.66 12.28 21.72 12.5 20.74 12.57C21.73 11.91 22.49 11.04 23 10.03" fill="currentColor"/>
    </svg>
  ),
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.21 9.15 7.66 10.63.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.11.68-3.76-1.5-3.76-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .71 2.63.5 3.27.38.1-.3.39-.51.71-.63-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.15a10.8 10.8 0 0 1 2.84-.38c.96 0 1.92.13 2.83.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.52.23 2.64.11 2.92.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.25-5.11 5.52.4.35.76 1.03.76 2.07 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.78.54C19.04 20.9 22.25 16.7 22.25 11.75 22.25 5.48 17.27.5 12 .5z" fill="currentColor"/>
    </svg>
  )
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer className="modern-footer" ref={ref}>
      <div className="modern-footer-inner container">
        <motion.div
          className="modern-footer-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* 1. Logo & Description */}
          <div className="footer-col footer-brand">
            <h3 className="brand-logo">InsightCV</h3>
            <p className="brand-desc">Empowering talent and companies through AI-driven insights.</p>
            <div className="socials">
              <a className="social" href="#" aria-label="LinkedIn">{socialIcons.linkedin}</a>
              <a className="social" href="#" aria-label="Twitter">{socialIcons.twitter}</a>
              <a className="social" href="#" aria-label="GitHub">{socialIcons.github}</a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="footer-col">
            <h4 className="col-title">Quick Links</h4>
            <ul className="col-list">
              <li><a href="#" className="col-link">Home</a></li>
              <li><a href="#" className="col-link">About</a></li>
              <li><a href="#" className="col-link">Contact</a></li>
              <li><a href="/login" className="col-link">Login</a></li>
              <li><a href="/signup" className="col-link">Register</a></li>
            </ul>
          </div>

          {/* 3. For Users */}
          <div className="footer-col">
            <h4 className="col-title">For Users</h4>
            <ul className="col-list">
              <li><a href="#" className="col-link">Upload CV</a></li>
              <li><a href="#" className="col-link">Analyze Skills</a></li>
              <li><a href="#" className="col-link">Job Matches</a></li>
              <li><a href="#" className="col-link">Dashboard</a></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div className="footer-col">
            <h4 className="col-title">Contact</h4>
            <ul className="contact-list">
              <li><span className="contact-emoji">📧</span><a className="contact-link" href="mailto:support@insightcv.ai">support@insightcv.ai</a></li>
              <li><span className="contact-emoji">📍</span><span>Amman, Jordan</span></li>
              <li><span className="contact-emoji">☎</span><span>+962-7X-XXX-XXXX</span></li>
            </ul>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <div className="glow-line" />
          <p className="copyright">© {currentYear} InsightCV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
