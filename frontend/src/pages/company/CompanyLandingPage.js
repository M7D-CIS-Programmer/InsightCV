import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import '../../components/company/CompanyLandingPage.css';

const CompanyLandingPage = () => {
  return (
    <div className="company-landing-page">
      <Navbar />
      <header className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="hero-content"
        >
          <h1>Welcome to Our Platform</h1>
          <p>Empowering companies to find the best talent and manage job postings effortlessly.</p>
          <div className="cta-buttons">
            <motion.a href="/company/post-job" whileHover={{ scale: 1.1 }} className="cta-button">Post a Job</motion.a>
            <motion.a href="/company/manage-posts" whileHover={{ scale: 1.1 }} className="cta-button">Manage My Posts</motion.a>
            <motion.a href="/company/find-employees" whileHover={{ scale: 1.1 }} className="cta-button">Find Employees</motion.a>
            <motion.a href="/company/profile" whileHover={{ scale: 1.1 }} className="cta-button">Edit Profile</motion.a>
          </div>
        </motion.div>
      </header>
      <Footer />
    </div>
  );
};

export default CompanyLandingPage;