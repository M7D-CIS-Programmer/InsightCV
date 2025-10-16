import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import '../../components/company/PostJobPage.css';

const PostJobPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    skills: '',
    email: '',
    whatsapp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success toast (frontend only)
    alert('Job posted successfully!');
  };

  return (
    <div className="post-job-page">
      <Navbar />
      <main className="form-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="glass-card"
        >
          <h2>Post a Job</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Job Title
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </label>
            <label>
              Description
              <textarea name="description" value={formData.description} onChange={handleChange} required />
            </label>
            <label>
              Skills
              <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
            </label>
            <label>
              Contact Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              WhatsApp
              <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
            </label>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              className="submit-button"
            >
              Post
            </motion.button>
          </form>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PostJobPage;