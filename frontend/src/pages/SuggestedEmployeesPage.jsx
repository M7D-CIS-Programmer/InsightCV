<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, MapPin, Briefcase, Mail, Phone, Download, Eye, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { candidateAPI } from '../services/api';
import { getUser } from '../utils/auth';
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, MapPin, Briefcase, Mail, Phone, Download, Eye, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
import NavbarCompany from '../components/companyHome/NavbarCompany';
import Footer from '../components/Footer';
import './SuggestedEmployeesPage.css';

export default function SuggestedEmployeesPage() {
  const navigate = useNavigate();
  const [filterSkill, setFilterSkill] = useState('all');
  const [filterExperience, setFilterExperience] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
<<<<<<< HEAD
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [minMatch, setMinMatch] = useState(0);

  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser || currentUser.role !== 'company') {
      navigate('/login');
      return;
    }

    setUser(currentUser);
    fetchCandidates(currentUser.id);
  }, [navigate, minMatch]);

  const fetchCandidates = async (userId) => {
    try {
      const filters = {};
      if (minMatch > 0) filters.min_match = minMatch;

      const response = await candidateAPI.getSuggested(userId, filters);

      // Format candidates data
      const formattedCandidates = response.suggested_candidates.map(item => ({
        id: item.candidate.id,
        name: item.candidate.user.name,
        title: item.candidate.title || 'Job Seeker',
        location: item.candidate.user.location || 'Not specified',
        experience: item.candidate.experience_years ? `${item.candidate.experience_years} years` : 'Not specified',
        match: item.match_percentage,
        skills: item.candidate.skills?.map(s => s.name) || [],
        availability: item.candidate.availability || 'available',
        expectedSalary: item.candidate.expected_salary_min && item.candidate.expected_salary_max
          ? `$${(item.candidate.expected_salary_min / 1000).toFixed(0)}k - $${(item.candidate.expected_salary_max / 1000).toFixed(0)}k`
          : 'Negotiable',
        summary: item.candidate.bio || 'No bio available',
        education: item.candidate.education || 'Not specified',
        email: item.candidate.user.email,
        phone: item.candidate.user.phone || 'Not provided',
        rating: 4.5 + (Math.random() * 0.5), // Simulated rating
        projects: Math.floor(Math.random() * 20) + 5, // Simulated projects
        avatar: item.candidate.user.avatar
          ? `http://localhost:8000/storage/${item.candidate.user.avatar}`
          : `https://ui-avatars.com/api/?name=${encodeURIComponent(item.candidate.user.name)}&background=FFD700&color=1a1a2e&size=150`,
        matchReasons: item.match_reasons || []
      }));

      setCandidates(formattedCandidates);
    } catch (error) {
      console.error('Failed to fetch candidates:', error);
    } finally {
      setLoading(false);
    }
  };

  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSkill = filterSkill === 'all' || candidate.skills.some(s =>
      s.toLowerCase().includes(filterSkill.toLowerCase())
    );
    const matchesExperience = filterExperience === 'all' ||
      (filterExperience === 'junior' && parseInt(candidate.experience) <= 2) ||
      (filterExperience === 'mid' && parseInt(candidate.experience) > 2 && parseInt(candidate.experience) <= 5) ||
      (filterExperience === 'senior' && parseInt(candidate.experience) > 5);

    return matchesSkill && matchesExperience;
  });

  const handleContact = (candidate) => {
    alert(`Contact information:\nEmail: ${candidate.email}\nPhone: ${candidate.phone}`);
=======

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
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
  };

  return (
    <div className="suggested-employees-page">
      {/* Background */}
      <div className="suggested-employees-bg">
        <div className="suggested-employees-orb-1" />
        <div className="suggested-employees-orb-2" />
      </div>

      <NavbarCompany />

      <div className="suggested-employees-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="suggested-employees-header"
        >
          <Users size={48} />
          <h1>AI-Matched Candidates</h1>
<<<<<<< HEAD
          <p>Top {filteredCandidates.length} candidates matched to your requirements</p>
=======
          <p>Top {filteredEmployees.length} candidates matched to your requirements</p>
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="filters-section"
        >
<<<<<<< HEAD
          <button
=======
          <button 
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
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

<<<<<<< HEAD
              <button
=======
              <button 
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
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

<<<<<<< HEAD
        {/* Candidates Grid */}
        <div className="employees-grid">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#FFD700', gridColumn: '1 / -1' }}>
              Loading candidates...
            </div>
          ) : filteredCandidates.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#999', gridColumn: '1 / -1' }}>
              <Users size={64} style={{ marginBottom: '20px', opacity: 0.5 }} />
              <h3>No candidates found</h3>
              <p>Try adjusting your filters or post more jobs to get better matches.</p>
            </div>
          ) : (
            filteredCandidates.map((candidate, index) => (
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="employee-card"
                whileHover={{ y: -5 }}
              >
                {/* Match Badge */}
                <div className="match-badge-emp" style={{
                  background: candidate.match >= 90 ? 'linear-gradient(135deg, #43e97b, #38f9d7)' :
                    candidate.match >= 85 ? 'linear-gradient(135deg, #FFD700, #FFA500)' :
                      'linear-gradient(135deg, #667eea, #764ba2)'
                }}>
                  {candidate.match}% Match
                </div>

                {/* Avatar */}
                <div className="employee-avatar">
                  {candidate.avatar.startsWith('http') ? (
                    <img src={candidate.avatar} alt={candidate.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                  ) : (
                    <span className="avatar-emoji">{candidate.avatar}</span>
                  )}
                </div>

                {/* Info */}
                <h3 className="employee-name">{candidate.name}</h3>
                <p className="employee-title">{candidate.title}</p>

                <div className="employee-meta">
                  <span className="meta-item-emp">
                    <MapPin size={14} />
                    {candidate.location}
                  </span>
                  <span className="meta-item-emp">
                    <Briefcase size={14} />
                    {candidate.experience}
                  </span>
                </div>

                {/* Rating */}
                <div className="employee-rating">
                  <Star size={16} fill="#FFD700" color="#FFD700" />
                  <span>{candidate.rating.toFixed(1)}</span>
                  <span className="projects-count">• {candidate.projects} projects</span>
                </div>

                {/* Summary */}
                <p className="employee-summary">{candidate.summary}</p>

                {/* Skills */}
                <div className="employee-skills">
                  {candidate.skills.slice(0, 4).map((skill, idx) => (
                    <span key={idx} className="skill-badge-emp">{skill}</span>
                  ))}
                  {candidate.skills.length > 4 && (
                    <span className="skill-badge-emp more">+{candidate.skills.length - 4}</span>
                  )}
                </div>

                {/* Availability & Salary */}
                <div className="employee-details">
                  <div className="detail-item">
                    <strong>Status:</strong> {candidate.availability}
                  </div>
                  <div className="detail-item">
                    <strong>Expected:</strong> {candidate.expectedSalary}
                  </div>
                </div>

                {/* Actions */}
                <div className="employee-actions">
                  <button
                    className="action-btn-emp secondary"
                    onClick={() => setSelectedCandidate(candidate)}
                  >
                    <Eye size={18} />
                    View Profile
                  </button>
                  <button
                    className="action-btn-emp primary"
                    onClick={() => handleContact(candidate)}
                  >
                    <Mail size={18} />
                    Contact
                  </button>
                </div>

                <button
                  className="download-cv-btn"
                  onClick={() => alert('CV download feature coming soon!')}
                >
                  <Download size={16} />
                  Download CV
                </button>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Candidate Detail Modal */}
      {selectedCandidate && (
=======
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
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
<<<<<<< HEAD
          onClick={() => setSelectedCandidate(null)}
=======
          onClick={() => setSelectedEmployee(null)}
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
<<<<<<< HEAD
            <button className="modal-close" onClick={() => setSelectedCandidate(null)}>×</button>

            <div className="modal-header">
              <div className="modal-avatar">
                {selectedCandidate.avatar.startsWith('http') ? (
                  <img src={selectedCandidate.avatar} alt={selectedCandidate.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontSize: '48px' }}>{selectedCandidate.avatar}</span>
                )}
              </div>
              <div>
                <h2>{selectedCandidate.name}</h2>
                <p>{selectedCandidate.title}</p>
=======
            <button className="modal-close" onClick={() => setSelectedEmployee(null)}>×</button>
            
            <div className="modal-header">
              <div className="modal-avatar">{selectedEmployee.avatar}</div>
              <div>
                <h2>{selectedEmployee.name}</h2>
                <p>{selectedEmployee.title}</p>
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>About</h4>
<<<<<<< HEAD
                <p>{selectedCandidate.summary}</p>
=======
                <p>{selectedEmployee.summary}</p>
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
              </div>

              <div className="modal-section">
                <h4>Education</h4>
<<<<<<< HEAD
                <p>{selectedCandidate.education}</p>
=======
                <p>{selectedEmployee.education}</p>
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
              </div>

              <div className="modal-section">
                <h4>Skills</h4>
                <div className="modal-skills">
<<<<<<< HEAD
                  {selectedCandidate.skills.map((skill, idx) => (
=======
                  {selectedEmployee.skills.map((skill, idx) => (
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
                    <span key={idx} className="skill-badge-emp">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Contact Information</h4>
<<<<<<< HEAD
                <p><Mail size={16} /> {selectedCandidate.email}</p>
                <p><Phone size={16} /> {selectedCandidate.phone}</p>
=======
                <p><Mail size={16} /> {selectedEmployee.email}</p>
                <p><Phone size={16} /> {selectedEmployee.phone}</p>
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
              </div>
            </div>

            <div className="modal-footer">
<<<<<<< HEAD
              <button
                className="modal-btn primary"
                onClick={() => handleContact(selectedCandidate)}
              >
                Contact Candidate
              </button>
              <button
                className="modal-btn secondary"
                onClick={() => alert('CV download feature coming soon!')}
=======
              <button 
                className="modal-btn primary"
                onClick={() => handleContact(selectedEmployee)}
              >
                Contact Candidate
              </button>
              <button 
                className="modal-btn secondary"
                onClick={() => handleDownloadCV(selectedEmployee)}
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
              >
                Download CV
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
