import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Edit2, Save, MapPin, Globe, Users, Mail, Phone, Calendar, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './MyCompanyPage.css';

export default function MyCompanyPage() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [companyData, setCompanyData] = useState({
    name: 'TechCorp Solutions',
    logo: '🏢',
    industry: 'Technology',
    size: '50-200 employees',
    founded: '2015',
    location: 'New York, NY',
    website: 'www.techcorp.com',
    email: 'contact@techcorp.com',
    phone: '+1 (555) 123-4567',
    about: 'TechCorp Solutions is a leading technology company specializing in innovative software solutions. We are committed to building cutting-edge products that transform businesses and improve lives.',
    culture: 'We foster a collaborative and inclusive work environment where creativity and innovation thrive. Our team is passionate about technology and dedicated to continuous learning.',
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work hours and remote options',
      '401(k) matching',
      'Professional development budget',
      'Unlimited PTO'
    ],
    values: ['Innovation', 'Integrity', 'Collaboration', 'Excellence'],
    socialMedia: {
      linkedin: 'linkedin.com/company/techcorp',
      twitter: '@techcorp',
      github: 'github.com/techcorp'
    }
  });

  const [tempData, setTempData] = useState(companyData);

  const handleEdit = () => {
    setIsEditing(true);
    setTempData(companyData);
  };

  const handleSave = () => {
    setCompanyData(tempData);
    setIsEditing(false);
    alert('Company information updated successfully!');
  };

  const handleCancel = () => {
    setTempData(companyData);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setTempData(prev => ({ ...prev, [field]: value }));
  };

  const handleBenefitChange = (index, value) => {
    const newBenefits = [...tempData.benefits];
    newBenefits[index] = value;
    setTempData(prev => ({ ...prev, benefits: newBenefits }));
  };

  const addBenefit = () => {
    setTempData(prev => ({
      ...prev,
      benefits: [...prev.benefits, 'New benefit']
    }));
  };

  const removeBenefit = (index) => {
    setTempData(prev => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="my-company-page">
      {/* Background */}
      <div className="my-company-bg">
        <div className="my-company-orb-1" />
        <div className="my-company-orb-2" />
        <div className="my-company-orb-3" />
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

      <div className="my-company-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="my-company-header"
        >
          <div className="header-left-company">
            <Building2 size={48} />
            <div>
              <h1>Company Profile</h1>
              <p>Manage your company information and branding</p>
            </div>
          </div>
          {!isEditing && (
            <button className="edit-company-btn" onClick={handleEdit}>
              <Edit2 size={18} />
              Edit Profile
            </button>
          )}
        </motion.div>

        {/* Main Content */}
        <div className="company-profile-grid">
          {/* Left Column - Company Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="company-main-card"
          >
            {/* Logo Section */}
            <div className="company-logo-section">
              <div className="company-logo-display">
                <span className="logo-emoji">{isEditing ? tempData.logo : companyData.logo}</span>
              </div>
              {isEditing && (
                <button className="change-logo-btn">
                  <Upload size={16} />
                  Change Logo
                </button>
              )}
            </div>

            {/* Company Name & Basic Info */}
            {isEditing ? (
              <div className="company-edit-form">
                <div className="form-group-company">
                  <label>Company Name</label>
                  <input
                    type="text"
                    value={tempData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                </div>

                <div className="form-group-company">
                  <label>Industry</label>
                  <input
                    type="text"
                    value={tempData.industry}
                    onChange={(e) => handleChange('industry', e.target.value)}
                  />
                </div>

                <div className="form-group-company">
                  <label>Company Size</label>
                  <select
                    value={tempData.size}
                    onChange={(e) => handleChange('size', e.target.value)}
                  >
                    <option value="1-10 employees">1-10 employees</option>
                    <option value="11-50 employees">11-50 employees</option>
                    <option value="50-200 employees">50-200 employees</option>
                    <option value="200-500 employees">200-500 employees</option>
                    <option value="500+ employees">500+ employees</option>
                  </select>
                </div>

                <div className="form-group-company">
                  <label>Founded Year</label>
                  <input
                    type="text"
                    value={tempData.founded}
                    onChange={(e) => handleChange('founded', e.target.value)}
                  />
                </div>

                <div className="form-group-company">
                  <label>Location</label>
                  <input
                    type="text"
                    value={tempData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                  />
                </div>

                <div className="form-group-company">
                  <label>Website</label>
                  <input
                    type="text"
                    value={tempData.website}
                    onChange={(e) => handleChange('website', e.target.value)}
                  />
                </div>

                <div className="form-group-company">
                  <label>Email</label>
                  <input
                    type="email"
                    value={tempData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>

                <div className="form-group-company">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={tempData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>

                <div className="company-form-actions">
                  <button className="cancel-btn-company" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button className="save-btn-company" onClick={handleSave}>
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            ) : (
              <div className="company-info-display">
                <h2 className="company-name-display">{companyData.name}</h2>
                <p className="company-industry">{companyData.industry}</p>

                <div className="company-details-list">
                  <div className="detail-row-company">
                    <Users size={18} />
                    <span>{companyData.size}</span>
                  </div>
                  <div className="detail-row-company">
                    <Calendar size={18} />
                    <span>Founded in {companyData.founded}</span>
                  </div>
                  <div className="detail-row-company">
                    <MapPin size={18} />
                    <span>{companyData.location}</span>
                  </div>
                  <div className="detail-row-company">
                    <Globe size={18} />
                    <a href={`https://${companyData.website}`} target="_blank" rel="noopener noreferrer">
                      {companyData.website}
                    </a>
                  </div>
                  <div className="detail-row-company">
                    <Mail size={18} />
                    <span>{companyData.email}</span>
                  </div>
                  <div className="detail-row-company">
                    <Phone size={18} />
                    <span>{companyData.phone}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Additional Info */}
          <div className="company-right-column">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="company-section-card"
            >
              <h3 className="section-title-company">About Us</h3>
              {isEditing ? (
                <textarea
                  value={tempData.about}
                  onChange={(e) => handleChange('about', e.target.value)}
                  rows="5"
                  className="company-textarea"
                />
              ) : (
                <p className="company-text">{companyData.about}</p>
              )}
            </motion.div>

            {/* Culture Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="company-section-card"
            >
              <h3 className="section-title-company">Company Culture</h3>
              {isEditing ? (
                <textarea
                  value={tempData.culture}
                  onChange={(e) => handleChange('culture', e.target.value)}
                  rows="4"
                  className="company-textarea"
                />
              ) : (
                <p className="company-text">{companyData.culture}</p>
              )}
            </motion.div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="company-section-card"
            >
              <h3 className="section-title-company">Our Values</h3>
              <div className="values-grid">
                {companyData.values.map((value, idx) => (
                  <div key={idx} className="value-badge">
                    {value}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="company-section-card"
            >
              <h3 className="section-title-company">Benefits & Perks</h3>
              {isEditing ? (
                <div className="benefits-edit-list">
                  {tempData.benefits.map((benefit, idx) => (
                    <div key={idx} className="benefit-edit-item">
                      <input
                        type="text"
                        value={benefit}
                        onChange={(e) => handleBenefitChange(idx, e.target.value)}
                      />
                      <button
                        className="remove-benefit-btn"
                        onClick={() => removeBenefit(idx)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button className="add-benefit-btn" onClick={addBenefit}>
                    + Add Benefit
                  </button>
                </div>
              ) : (
                <ul className="benefits-list">
                  {companyData.benefits.map((benefit, idx) => (
                    <li key={idx}>✓ {benefit}</li>
                  ))}
                </ul>
              )}
            </motion.div>

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="company-section-card"
            >
              <h3 className="section-title-company">Social Media</h3>
              <div className="social-links">
                <a href={`https://${companyData.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">💼</span>
                  LinkedIn
                </a>
                <a href={`https://twitter.com/${companyData.socialMedia.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">🐦</span>
                  Twitter
                </a>
                <a href={`https://${companyData.socialMedia.github}`} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">💻</span>
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
