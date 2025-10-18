import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, MapPin, Briefcase, Mail, Phone, Download, Eye, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './SuggestedEmployeesPage.css';

export default function SuggestedEmployeesPage() {
  const navigate = useNavigate();
  const [filterSkill, setFilterSkill] = useState('all');
  const [filterExperience, setFilterExperience] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock employee data
  const employees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Frontend Developer',
      location: 'New York, NY',
      experience: '6 years',
      match: 95,
      skills: ['React', 'TypeScript', 'Node.js', 'CSS3', 'Redux'],
      availability: 'Available',
      expectedSalary: '$130k - $150k',
      summary: 'Passionate frontend developer with expertise in building scalable React applications.',
      education: 'BS Computer Science - MIT',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 123-4567',
      rating: 4.8,
      projects: 12,
      avatar: '👩‍💻'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Full Stack Engineer',
      location: 'San Francisco, CA',
      experience: '8 years',
      match: 92,
      skills: ['React', 'Python', 'AWS', 'MongoDB', 'Docker'],
      availability: 'Available in 2 weeks',
      expectedSalary: '$140k - $170k',
      summary: 'Full stack engineer with strong backend expertise and cloud architecture experience.',
      education: 'MS Software Engineering - Stanford',
      email: 'michael.c@email.com',
      phone: '+1 (555) 234-5678',
      rating: 4.9,
      projects: 18,
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Backend Developer',
      location: 'Remote',
      experience: '5 years',
      match: 88,
      skills: ['Node.js', 'PostgreSQL', 'Docker', 'GraphQL', 'Microservices'],
      availability: 'Available',
      expectedSalary: '$120k - $145k',
      summary: 'Backend specialist focused on building robust and scalable API architectures.',
      education: 'BS Computer Engineering - UC Berkeley',
      email: 'emily.r@email.com',
      phone: '+1 (555) 345-6789',
      rating: 4.7,
      projects: 15,
      avatar: '👩‍💼'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'DevOps Engineer',
      location: 'Seattle, WA',
      experience: '7 years',
      match: 90,
      skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Python'],
      availability: 'Available',
      expectedSalary: '$145k - $175k',
      summary: 'DevOps expert specializing in cloud infrastructure and automation.',
      education: 'MS Cloud Computing - Georgia Tech',
      email: 'david.k@email.com',
      phone: '+1 (555) 456-7890',
      rating: 4.9,
      projects: 20,
      avatar: '👨‍🔧'
    },
    {
      id: 5,
      name: 'Jessica Martinez',
      title: 'UI/UX Designer',
      location: 'Austin, TX',
      experience: '4 years',
      match: 85,
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
      availability: 'Available in 1 month',
      expectedSalary: '$95k - $120k',
      summary: 'Creative designer passionate about crafting intuitive and beautiful user experiences.',
      education: 'BFA Design - Parsons School of Design',
      email: 'jessica.m@email.com',
      phone: '+1 (555) 567-8901',
      rating: 4.8,
      projects: 25,
      avatar: '👩‍🎨'
    },
    {
      id: 6,
      name: 'Alex Thompson',
      title: 'Mobile Developer',
      location: 'Boston, MA',
      experience: '5 years',
      match: 87,
      skills: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Mobile UI'],
      availability: 'Available',
      expectedSalary: '$115k - $140k',
      summary: 'Mobile developer with experience building cross-platform applications.',
      education: 'BS Mobile Development - Northeastern',
      email: 'alex.t@email.com',
      phone: '+1 (555) 678-9012',
      rating: 4.6,
      projects: 14,
      avatar: '👨‍💻'
    }
  ];

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const filteredEmployees = employees.filter(emp => {
    const matchesSkill = filterSkill === 'all' || emp.skills.some(s => 
      s.toLowerCase().includes(filterSkill.toLowerCase())
    );
    const matchesExperience = filterExperience === 'all' || 
      (filterExperience === 'junior' && parseInt(emp.experience) <= 2) ||
      (filterExperience === 'mid' && parseInt(emp.experience) > 2 && parseInt(emp.experience) <= 5) ||
      (filterExperience === 'senior' && parseInt(emp.experience) > 5);
    
    return matchesSkill && matchesExperience;
  });

  const handleContact = (employee) => {
    alert(`Contact information:\nEmail: ${employee.email}\nPhone: ${employee.phone}`);
  };

  const handleDownloadCV = (employee) => {
    alert(`Downloading CV for ${employee.name}...`);
  };

  return (
    <div className="suggested-employees-page">
      {/* Background */}
      <div className="suggested-employees-bg">
        <div className="suggested-employees-orb-1" />
        <div className="suggested-employees-orb-2" />
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

      <div className="suggested-employees-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="suggested-employees-header"
        >
          <Users size={48} />
          <h1>AI-Matched Candidates</h1>
          <p>Top {filteredEmployees.length} candidates matched to your requirements</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="filters-section"
        >
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
              className="filters-panel-emp"
            >
              <div className="filter-group-emp">
                <label>Skills</label>
                <select value={filterSkill} onChange={(e) => setFilterSkill(e.target.value)}>
                  <option value="all">All Skills</option>
                  <option value="react">React</option>
                  <option value="python">Python</option>
                  <option value="node">Node.js</option>
                  <option value="aws">AWS</option>
                  <option value="docker">Docker</option>
                </select>
              </div>

              <div className="filter-group-emp">
                <label>Experience Level</label>
                <select value={filterExperience} onChange={(e) => setFilterExperience(e.target.value)}>
                  <option value="all">All Levels</option>
                  <option value="junior">Junior (0-2 years)</option>
                  <option value="mid">Mid (2-5 years)</option>
                  <option value="senior">Senior (5+ years)</option>
                </select>
              </div>

              <button 
                className="clear-filters-btn-emp"
                onClick={() => {
                  setFilterSkill('all');
                  setFilterExperience('all');
                }}
              >
                Clear
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Employees Grid */}
        <div className="employees-grid">
          {filteredEmployees.map((employee, index) => (
            <motion.div
              key={employee.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="employee-card"
              whileHover={{ y: -5 }}
            >
              {/* Match Badge */}
              <div className="match-badge-emp" style={{
                background: employee.match >= 90 ? 'linear-gradient(135deg, #43e97b, #38f9d7)' :
                            employee.match >= 85 ? 'linear-gradient(135deg, #FFD700, #FFA500)' :
                            'linear-gradient(135deg, #667eea, #764ba2)'
              }}>
                {employee.match}% Match
              </div>

              {/* Avatar */}
              <div className="employee-avatar">
                <span className="avatar-emoji">{employee.avatar}</span>
              </div>

              {/* Info */}
              <h3 className="employee-name">{employee.name}</h3>
              <p className="employee-title">{employee.title}</p>

              <div className="employee-meta">
                <span className="meta-item-emp">
                  <MapPin size={14} />
                  {employee.location}
                </span>
                <span className="meta-item-emp">
                  <Briefcase size={14} />
                  {employee.experience}
                </span>
              </div>

              {/* Rating */}
              <div className="employee-rating">
                <Star size={16} fill="#FFD700" color="#FFD700" />
                <span>{employee.rating}</span>
                <span className="projects-count">• {employee.projects} projects</span>
              </div>

              {/* Summary */}
              <p className="employee-summary">{employee.summary}</p>

              {/* Skills */}
              <div className="employee-skills">
                {employee.skills.slice(0, 4).map((skill, idx) => (
                  <span key={idx} className="skill-badge-emp">{skill}</span>
                ))}
                {employee.skills.length > 4 && (
                  <span className="skill-badge-emp more">+{employee.skills.length - 4}</span>
                )}
              </div>

              {/* Availability & Salary */}
              <div className="employee-details">
                <div className="detail-item">
                  <strong>Status:</strong> {employee.availability}
                </div>
                <div className="detail-item">
                  <strong>Expected:</strong> {employee.expectedSalary}
                </div>
              </div>

              {/* Actions */}
              <div className="employee-actions">
                <button 
                  className="action-btn-emp secondary"
                  onClick={() => setSelectedEmployee(employee)}
                >
                  <Eye size={18} />
                  View Profile
                </button>
                <button 
                  className="action-btn-emp primary"
                  onClick={() => handleContact(employee)}
                >
                  <Mail size={18} />
                  Contact
                </button>
              </div>

              <button 
                className="download-cv-btn"
                onClick={() => handleDownloadCV(employee)}
              >
                <Download size={16} />
                Download CV
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Employee Detail Modal */}
      {selectedEmployee && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedEmployee(null)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedEmployee(null)}>×</button>
            
            <div className="modal-header">
              <div className="modal-avatar">{selectedEmployee.avatar}</div>
              <div>
                <h2>{selectedEmployee.name}</h2>
                <p>{selectedEmployee.title}</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>About</h4>
                <p>{selectedEmployee.summary}</p>
              </div>

              <div className="modal-section">
                <h4>Education</h4>
                <p>{selectedEmployee.education}</p>
              </div>

              <div className="modal-section">
                <h4>Skills</h4>
                <div className="modal-skills">
                  {selectedEmployee.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge-emp">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Contact Information</h4>
                <p><Mail size={16} /> {selectedEmployee.email}</p>
                <p><Phone size={16} /> {selectedEmployee.phone}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="modal-btn primary"
                onClick={() => handleContact(selectedEmployee)}
              >
                Contact Candidate
              </button>
              <button 
                className="modal-btn secondary"
                onClick={() => handleDownloadCV(selectedEmployee)}
              >
                Download CV
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
