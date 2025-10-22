import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Edit, Trash2, Eye, Users, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NavbarCompany from '../components/companyHome/NavbarCompany';
import Footer from '../components/Footer';
import './MyJobsPage.css';

export default function MyJobsPage() {
  const navigate = useNavigate();

  // Mock job postings data
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      location: 'New York, NY',
      type: 'Full Time',
      posted: '2 days ago',
      applicants: 23,
      status: 'Active',
      skills: ['React', 'TypeScript', 'Node.js', 'CSS3'],
      description: 'We are looking for an experienced frontend developer...',
      salary: '$120k - $160k',
      experience: 'Senior Level (5+ years)'
    },
    {
      id: 2,
      title: 'Backend Developer',
      location: 'Remote',
      type: 'Full Time',
      posted: '1 week ago',
      applicants: 15,
      status: 'Active',
      skills: ['Node.js', 'PostgreSQL', 'Docker', 'GraphQL'],
      description: 'Looking for a backend specialist to design robust APIs...',
      salary: '$110k - $150k',
      experience: 'Mid Level (2-5 years)'
    },
    {
      id: 3,
      title: 'Product Manager',
      location: 'San Francisco, CA',
      type: 'Full Time',
      posted: '3 weeks ago',
      applicants: 42,
      status: 'Closed',
      skills: ['Product Strategy', 'Agile', 'Data Analysis', 'Leadership'],
      description: 'Lead product development and strategy...',
      salary: '$140k - $180k',
      experience: 'Senior Level (5+ years)'
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      location: 'Boston, MA',
      type: 'Contract',
      posted: '5 days ago',
      applicants: 8,
      status: 'Active',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      description: 'Design beautiful user experiences...',
      salary: '$90k - $120k',
      experience: 'Mid Level (2-5 years)'
    }
  ]);

  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleDelete = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      setJobs(jobs.filter(job => job.id !== jobId));
      alert('Job deleted successfully!');
    }
  };

  const handleEdit = (job) => {
    alert(`Edit job: ${job.title}`);
    // In real app, navigate to edit page
  };

  const handleToggleStatus = (jobId) => {
    setJobs(jobs.map(job => 
      job.id === jobId 
        ? { ...job, status: job.status === 'Active' ? 'Closed' : 'Active' }
        : job
    ));
  };

  const filteredJobs = jobs.filter(job => {
    if (filter === 'all') return true;
    return job.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="my-jobs-page">
      {/* Background */}
      <div className="my-jobs-bg">
        <div className="my-jobs-orb-1" />
        <div className="my-jobs-orb-2" />
      </div>

      <NavbarCompany />

      <div className="my-jobs-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="my-jobs-header"
        >
          <div className="header-left">
            <Briefcase size={48} />
            <div>
              <h1>My Job Postings</h1>
              <p>Manage your active job listings</p>
            </div>
          </div>
          <button 
            className="create-job-btn"
            onClick={() => navigate('/company-home/post-job')}
          >
            + New Job Post
          </button>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="jobs-stats-overview"
        >
          <div className="overview-card">
            <div className="overview-number">{jobs.length}</div>
            <div className="overview-label">Total Jobs</div>
          </div>
          <div className="overview-card">
            <div className="overview-number">{jobs.filter(j => j.status === 'Active').length}</div>
            <div className="overview-label">Active</div>
          </div>
          <div className="overview-card">
            <div className="overview-number">{jobs.reduce((acc, j) => acc + j.applicants, 0)}</div>
            <div className="overview-label">Total Applicants</div>
          </div>
          <div className="overview-card">
            <div className="overview-number">{jobs.filter(j => j.status === 'Closed').length}</div>
            <div className="overview-label">Closed</div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="jobs-filters"
        >
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Jobs ({jobs.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active ({jobs.filter(j => j.status === 'Active').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'closed' ? 'active' : ''}`}
            onClick={() => setFilter('closed')}
          >
            Closed ({jobs.filter(j => j.status === 'Closed').length})
          </button>
        </motion.div>

        {/* Jobs List */}
        <div className="jobs-list">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="job-item-card"
            >
              <div className="job-item-header">
                <div className="job-item-title-section">
                  <h3>{job.title}</h3>
                  <div className={`status-badge-job ${job.status.toLowerCase()}`}>
                    {job.status}
                  </div>
                </div>
                <div className="job-item-actions">
                  <button 
                    className="action-icon-btn"
                    onClick={() => setSelectedJob(job)}
                    title="View Details"
                  >
                    <Eye size={18} />
                  </button>
                  <button 
                    className="action-icon-btn"
                    onClick={() => handleEdit(job)}
                    title="Edit"
                  >
                    <Edit size={18} />
                  </button>
                  <button 
                    className="action-icon-btn delete"
                    onClick={() => handleDelete(job.id)}
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="job-item-meta">
                <span className="meta-badge">
                  <MapPin size={14} />
                  {job.location}
                </span>
                <span className="meta-badge">
                  <Briefcase size={14} />
                  {job.type}
                </span>
                <span className="meta-badge">
                  <Calendar size={14} />
                  {job.posted}
                </span>
                <span className="meta-badge highlight">
                  <Users size={14} />
                  {job.applicants} applicants
                </span>
              </div>

              <p className="job-item-description">{job.description}</p>

              <div className="job-item-skills">
                {job.skills.slice(0, 5).map((skill, idx) => (
                  <span key={idx} className="skill-tag-small">{skill}</span>
                ))}
              </div>

              <div className="job-item-footer">
                <div className="job-salary-info">{job.salary}</div>
                <button 
                  className={`toggle-status-btn ${job.status.toLowerCase()}`}
                  onClick={() => handleToggleStatus(job.id)}
                >
                  {job.status === 'Active' ? 'Close Job' : 'Reopen Job'}
                </button>
              </div>
            </motion.div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="no-jobs-message">
              <Briefcase size={64} />
              <h3>No jobs found</h3>
              <p>Start by creating your first job posting</p>
              <button 
                className="create-first-job-btn"
                onClick={() => navigate('/company-home/post-job')}
              >
                Create Job Post
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <motion.div
          className="job-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedJob(null)}
        >
          <motion.div
            className="job-modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="job-modal-close" onClick={() => setSelectedJob(null)}>×</button>
            
            <div className="job-modal-header">
              <h2>{selectedJob.title}</h2>
              <div className={`status-badge-job ${selectedJob.status.toLowerCase()}`}>
                {selectedJob.status}
              </div>
            </div>

            <div className="job-modal-body">
              <div className="modal-info-row">
                <div className="modal-info-item">
                  <MapPin size={18} />
                  <span>{selectedJob.location}</span>
                </div>
                <div className="modal-info-item">
                  <Briefcase size={18} />
                  <span>{selectedJob.type}</span>
                </div>
                <div className="modal-info-item">
                  <Users size={18} />
                  <span>{selectedJob.applicants} applicants</span>
                </div>
              </div>

              <div className="modal-section">
                <h4>Description</h4>
                <p>{selectedJob.description}</p>
              </div>

              <div className="modal-section">
                <h4>Required Skills</h4>
                <div className="modal-skills">
                  {selectedJob.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag-modal">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Compensation</h4>
                <p>{selectedJob.salary}</p>
              </div>

              <div className="modal-section">
                <h4>Experience Level</h4>
                <p>{selectedJob.experience}</p>
              </div>
            </div>

            <div className="job-modal-footer">
              <button 
                className="modal-action-btn secondary"
                onClick={() => handleEdit(selectedJob)}
              >
                <Edit size={18} />
                Edit Job
              </button>
              <button 
                className="modal-action-btn primary"
                onClick={() => alert('View applicants feature coming soon!')}
              >
                <Users size={18} />
                View Applicants
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
