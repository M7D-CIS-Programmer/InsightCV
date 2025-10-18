import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowLeft, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './PostJobPage.css';

export default function PostJobPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    type: 'full-time',
    experience: '',
    skills: [],
    description: '',
    requirements: ''
  });
  const [skillInput, setSkillInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const removeSkill = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Posted:', formData);
    alert('Job posted successfully!');
    navigate('/company-home');
  };

  return (
    <div className="post-job-page">
      {/* Background */}
      <div className="post-job-bg">
        <div className="post-job-orb-1" />
        <div className="post-job-orb-2" />
      </div>

      {/* Navbar */}
      <nav className="employee-navbar">
        <div className="employee-navbar-content">
          <div className="employee-logo" onClick={() => navigate('/company-home')}>InsightCV</div>
          <div className="employee-nav-links">
            <a href="/company-home">Home</a>
            <a href="/company-home/my-company">My Company</a>
            <a href="/company-home/my-jobs">My Jobs</a>
            <button className="logout-btn" onClick={() => navigate('/')}>
              Log Out
            </button>
          </div>
        </div>
      </nav>

      <div className="post-job-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="post-job-container"
        >
          <button onClick={() => navigate('/company-home')} className="back-btn-post">
            <ArrowLeft size={20} /> Back to Home
          </button>

          <div className="post-job-header">
            <Briefcase size={48} />
            <h1>Post a New Job</h1>
            <p>Find the perfect candidate for your team</p>
          </div>

          <form onSubmit={handleSubmit} className="job-form">
            <div className="form-row">
              <div className="form-group">
                <label>Job Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Senior Frontend Developer"
                  required
                />
              </div>

              <div className="form-group">
                <label>Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. New York, Remote"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Job Type *</label>
                <select name="type" value={formData.type} onChange={handleChange}>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>

              <div className="form-group">
                <label>Experience Level *</label>
                <select name="experience" value={formData.experience} onChange={handleChange} required>
                  <option value="">Select level...</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (2-5 years)</option>
                  <option value="senior">Senior Level (5+ years)</option>
                  <option value="lead">Lead/Principal</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Required Skills *</label>
              <div className="skills-input-container">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  placeholder="Type a skill and press Enter"
                />
                <button type="button" onClick={addSkill} className="add-skill-btn">
                  <Plus size={20} /> Add
                </button>
              </div>
              <div className="skills-display">
                {formData.skills.map((skill, idx) => (
                  <span key={idx} className="skill-chip">
                    {skill}
                    <button type="button" onClick={() => removeSkill(skill)}>×</button>
                  </span>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Job Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the role, responsibilities, and what makes your company great..."
                rows="6"
                required
              />
            </div>

            <div className="form-group">
              <label>Requirements</label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="List the key requirements and qualifications..."
                rows="4"
              />
            </div>

            <div className="form-actions">
              <button type="button" onClick={() => navigate('/company-home')} className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                <Briefcase size={20} /> Post Job
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
