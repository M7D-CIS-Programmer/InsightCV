import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, Clock, DollarSign, Filter, Star, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EmployeeNavbar from '../components/EmployeeNavbar';
import Footer from '../components/Footer';
import './JobListingsPage.css';

export default function JobListingsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock job data
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'New York, NY',
      type: 'Full Time',
      salary: '$120k - $160k',
      posted: '2 days ago',
      match: 95,
      skills: ['React', 'TypeScript', 'Node.js', 'CSS3'],
      description: 'We are looking for an experienced frontend developer to join our growing team.',
      applicants: 23,
      saved: false
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'InnovateSoft',
      location: 'San Francisco, CA',
      type: 'Full Time',
      salary: '$130k - $180k',
      posted: '1 week ago',
      match: 88,
      skills: ['React', 'Python', 'AWS', 'MongoDB'],
      description: 'Join our team to build scalable web applications for millions of users.',
      applicants: 45,
      saved: true
    },
    {
      id: 3,
      title: 'Backend Developer',
      company: 'Digital Dynamics',
      location: 'Remote',
      type: 'Full Time',
      salary: '$110k - $150k',
      posted: '3 days ago',
      match: 82,
      skills: ['Node.js', 'PostgreSQL', 'Docker', 'GraphQL'],
      description: 'Looking for a backend specialist to design and implement robust APIs.',
      applicants: 31,
      saved: false
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      company: 'Creative Labs',
      location: 'Austin, TX',
      type: 'Contract',
      salary: '$90k - $120k',
      posted: '5 days ago',
      match: 75,
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      description: 'Design beautiful and intuitive user experiences for our products.',
      applicants: 18,
      saved: false
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudFirst Inc.',
      location: 'Seattle, WA',
      type: 'Full Time',
      salary: '$140k - $190k',
      posted: '1 day ago',
      match: 91,
      skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      description: 'Help us build and maintain our cloud infrastructure.',
      applicants: 12,
      saved: true
    },
    {
      id: 6,
      title: 'Mobile Developer (React Native)',
      company: 'AppWorks',
      location: 'Boston, MA',
      type: 'Full Time',
      salary: '$115k - $155k',
      posted: '4 days ago',
      match: 79,
      skills: ['React Native', 'JavaScript', 'iOS', 'Android'],
      description: 'Build cross-platform mobile apps used by thousands daily.',
      applicants: 27,
      saved: false
    }
  ];

  const [savedJobs, setSavedJobs] = useState(jobs.filter(j => j.saved).map(j => j.id));

  const toggleSave = (jobId) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = typeFilter === 'all' || job.type.toLowerCase() === typeFilter.toLowerCase();
    
    return matchesSearch && matchesLocation && matchesType;
  });

  const handleApply = (job) => {
    alert(`Application submitted for ${job.title} at ${job.company}!`);
  };

  return (
    <div className="job-listings-page">
      {/* Background */}
      <div className="job-listings-bg">
        <div className="job-listings-orb-1" />
        <div className="job-listings-orb-2" />
        <div className="job-listings-orb-3" />
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

      <div className="job-listings-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="job-listings-header"
        >
          <h1>Find Your Dream Job</h1>
          <p>Explore {filteredJobs.length} opportunities matched to your skills</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="search-filters-section"
        >
          <div className="search-bar-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search by job title, company, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <button 
            className="filter-toggle-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            Filters
          </button>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="filters-panel"
            >
              <div className="filter-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Enter location..."
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>

              <div className="filter-group">
                <label>Job Type</label>
                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                  <option value="all">All Types</option>
                  <option value="full time">Full Time</option>
                  <option value="part time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>

              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setLocationFilter('');
                  setTypeFilter('all');
                }}
              >
                Clear All
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Job Cards */}
        <div className="jobs-grid">
          {filteredJobs.length === 0 ? (
            <div className="no-results">
              <Briefcase size={64} />
              <h3>No jobs found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="job-card"
                whileHover={{ y: -5 }}
              >
                {/* Match Badge */}
                <div className="match-badge" style={{
                  background: job.match >= 90 ? 'linear-gradient(135deg, #43e97b, #38f9d7)' :
                              job.match >= 80 ? 'linear-gradient(135deg, #FFD700, #FFA500)' :
                              'linear-gradient(135deg, #667eea, #764ba2)'
                }}>
                  {job.match}% Match
                </div>

                {/* Save Button */}
                <button 
                  className={`save-btn ${savedJobs.includes(job.id) ? 'saved' : ''}`}
                  onClick={() => toggleSave(job.id)}
                >
                  <Star size={20} fill={savedJobs.includes(job.id) ? '#FFD700' : 'none'} />
                </button>

                {/* Job Info */}
                <div className="job-card-header">
                  <h3>{job.title}</h3>
                  <p className="company-name">{job.company}</p>
                </div>

                <div className="job-meta">
                  <span className="meta-item">
                    <MapPin size={16} />
                    {job.location}
                  </span>
                  <span className="meta-item">
                    <Briefcase size={16} />
                    {job.type}
                  </span>
                  <span className="meta-item">
                    <Clock size={16} />
                    {job.posted}
                  </span>
                </div>

                <p className="job-description">{job.description}</p>

                {/* Skills */}
                <div className="job-skills">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">{skill}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="job-card-footer">
                  <div className="job-salary">
                    <DollarSign size={16} />
                    {job.salary}
                  </div>
                  <div className="job-applicants">
                    {job.applicants} applicants
                  </div>
                </div>

                <button 
                  className="apply-btn-job"
                  onClick={() => handleApply(job)}
                >
                  <Send size={18} />
                  Apply Now
                </button>
              </motion.div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
