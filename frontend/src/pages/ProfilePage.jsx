import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Briefcase, Calendar, Edit2, Save, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EmployeeNavbar from '../components/EmployeeNavbar';
import './ProfilePage.css';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    title: 'Full Stack Developer',
    experience: '5 years',
    dateJoined: 'January 2024',
    bio: 'Passionate full stack developer with expertise in React, Node.js, and cloud technologies. Love building scalable applications.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'],
    education: 'BS Computer Science - MIT',
    expectedSalary: '$120k - $150k',
    availability: 'Available'
  });

  const [stats] = useState({
    cvsAnalyzed: 3,
    practiceSessions: 8,
    pointsEarned: 450,
    jobsApplied: 12
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setTempProfile(profile);
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setTempProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="profile-page">
      {/* Background */}
      <div className="profile-bg">
        <div className="profile-orb-1" />
        <div className="profile-orb-2" />
        <div className="profile-orb-3" />
      </div>

      {/* Particles - النقاط الصفراء */}
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

      {/* Navbar */}
      <EmployeeNavbar />

      <div className="profile-content">
        {/* Header Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="profile-stats-section"
        >
          <div className="stat-card">
            <div className="stat-icon">
              <Award size={32} />
            </div>
            <div className="stat-info">
              <div className="stat-number">{stats.pointsEarned}</div>
              <div className="stat-label">Total Points</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <TrendingUp size={32} />
            </div>
            <div className="stat-info">
              <div className="stat-number">{stats.cvsAnalyzed}</div>
              <div className="stat-label">CVs Analyzed</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Briefcase size={32} />
            </div>
            <div className="stat-info">
              <div className="stat-number">{stats.practiceSessions}</div>
              <div className="stat-label">Practice Sessions</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Mail size={32} />
            </div>
            <div className="stat-info">
              <div className="stat-number">{stats.jobsApplied}</div>
              <div className="stat-label">Jobs Applied</div>
            </div>
          </div>
        </motion.div>

        {/* Main Profile Section */}
        <div className="profile-main-grid">
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="profile-card"
          >
            <div className="profile-card-header">
              <div className="profile-avatar">
                <User size={80} />
              </div>
              {!isEditing && (
                <button className="edit-btn" onClick={handleEdit}>
                  <Edit2 size={18} />
                  Edit Profile
                </button>
              )}
            </div>

            {isEditing ? (
              <div className="profile-form">
                <div className="form-group-profile">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={tempProfile.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                </div>

                <div className="form-group-profile">
                  <label>Email</label>
                  <input
                    type="email"
                    value={tempProfile.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>

                <div className="form-group-profile">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={tempProfile.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>

                <div className="form-group-profile">
                  <label>Location</label>
                  <input
                    type="text"
                    value={tempProfile.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                  />
                </div>

                <div className="form-group-profile">
                  <label>Job Title</label>
                  <input
                    type="text"
                    value={tempProfile.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                  />
                </div>

                <div className="form-group-profile">
                  <label>Experience</label>
                  <input
                    type="text"
                    value={tempProfile.experience}
                    onChange={(e) => handleChange('experience', e.target.value)}
                  />
                </div>

                <div className="profile-form-actions">
                  <button className="cancel-btn-profile" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button className="save-btn-profile" onClick={handleSave}>
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            ) : (
              <div className="profile-info">
                <h2 className="profile-name">{profile.name}</h2>
                <p className="profile-title">{profile.title}</p>

                <div className="profile-details">
                  <div className="detail-row">
                    <Mail size={18} />
                    <span>{profile.email}</span>
                  </div>
                  <div className="detail-row">
                    <Phone size={18} />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="detail-row">
                    <MapPin size={18} />
                    <span>{profile.location}</span>
                  </div>
                  <div className="detail-row">
                    <Briefcase size={18} />
                    <span>{profile.experience} experience</span>
                  </div>
                  <div className="detail-row">
                    <Calendar size={18} />
                    <span>Joined {profile.dateJoined}</span>
                  </div>
                </div>

                <div className="profile-status">
                  <div className="status-badge available">{profile.availability}</div>
                  <div className="salary-badge">{profile.expectedSalary}</div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Additional Info */}
          <div className="profile-right-column">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="profile-section-card"
            >
              <h3 className="section-title">About Me</h3>
              {isEditing ? (
                <textarea
                  value={tempProfile.bio}
                  onChange={(e) => handleChange('bio', e.target.value)}
                  rows="4"
                  className="bio-textarea"
                />
              ) : (
                <p className="bio-text">{profile.bio}</p>
              )}
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="profile-section-card"
            >
              <h3 className="section-title">Skills</h3>
              <div className="skills-grid-profile">
                {profile.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item-profile">
                    {skill}
                  </div>
                ))}
              </div>
              {!isEditing && (
                <button className="add-skill-btn-profile">+ Add Skill</button>
              )}
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="profile-section-card"
            >
              <h3 className="section-title">Education</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={tempProfile.education}
                  onChange={(e) => handleChange('education', e.target.value)}
                  className="education-input"
                />
              ) : (
                <p className="education-text">{profile.education}</p>
              )}
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="profile-section-card"
            >
              <h3 className="section-title">Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">📄</div>
                  <div className="activity-content">
                    <p className="activity-title">CV Analyzed</p>
                    <p className="activity-time">2 days ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">💼</div>
                  <div className="activity-content">
                    <p className="activity-title">Applied to Frontend Developer</p>
                    <p className="activity-time">5 days ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">🎤</div>
                  <div className="activity-content">
                    <p className="activity-title">Completed AI Interview Practice</p>
                    <p className="activity-time">1 week ago</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
