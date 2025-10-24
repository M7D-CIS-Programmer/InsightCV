import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { authAPI } from '../services/api';
import { saveUser } from '../utils/auth';
import './LoginForm.css';

function SignupForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [form, setForm] = useState({ fullName: '', companyName: '', email: '', password: '', confirmPassword: '', accountType: 'candidate' });
  const navigate = useNavigate();
  const [companyStep, setCompanyStep] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
=======
import './LoginForm.css';

function SignupForm() {
  const [isExpanded, setIsExpanded] = useState(false); // collapsed by default, expand on hover like LoginForm
  const [form, setForm] = useState({ fullName: '', companyName: '', email: '', password: '', confirmPassword: '', accountType: 'candidate' });
  const navigate = useNavigate();
  const [companyStep, setCompanyStep] = useState(false);
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'accountType') {
<<<<<<< HEAD
      if (value === 'candidate') setCompanyStep(false);
=======
      // if switching to candidate, reset company step
      if (value === 'candidate') setCompanyStep(false);
      // if switching to company, clear companyName so user types fresh
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
      if (value === 'company') setForm((prev) => ({ ...prev, companyName: '' }));
    }
  };

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (form.accountType === 'company' && !companyStep) {
      setError('Please enter your company name and press Continue.');
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    // minimal client-side validation
    // if company flow and not yet continued
    if (form.accountType === 'company' && !companyStep) {
      alert('Please enter your company name and press Continue.');
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
      return;
    }

    if (form.accountType === 'company' && (!form.companyName || form.companyName.trim() === '')) {
<<<<<<< HEAD
      setError('Please enter your company name.');
=======
      alert('Please enter your company name.');
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
      return;
    }

    if (form.accountType === 'candidate' && !form.fullName) {
<<<<<<< HEAD
      setError('Please enter your full name.');
=======
      alert('Please enter your full name.');
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
      return;
    }

    if (!form.email || !form.password) {
<<<<<<< HEAD
      setError('Please fill email and password.');
=======
      alert('Please fill email and password.');
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
      return;
    }

    if (form.password !== form.confirmPassword) {
<<<<<<< HEAD
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const userData = {
        name: form.accountType === 'candidate' ? form.fullName : form.companyName,
        email: form.email,
        password: form.password,
        role: form.accountType,
      };

      if (form.accountType === 'company') {
        userData.company_name = form.companyName;
      }

      const response = await authAPI.register(userData);
      saveUser(response.user);
      
      // Navigate based on role
      if (response.user.role === 'company') {
        navigate('/company-home');
      } else {
        navigate('/employee-home');
      }
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
=======
      alert('Passwords do not match.');
      return;
    }

        // TODO: replace with real signup API call
    console.log('Signing up', form);
    
    // Redirect based on account type
    if (form.accountType === 'company') {
      navigate('/company-home');
    } else {
      navigate('/employee-home');
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
    }
  };

  const handleCompanyContinue = () => {
    if (!form.companyName || form.companyName.trim() === '') {
<<<<<<< HEAD
      setError('Please enter your company name to continue.');
      return;
    }
    setCompanyStep(true);
    setError('');
=======
      alert('Please enter your company name to continue.');
      return;
    }
    setCompanyStep(true);
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
  };

  const handleBackToAccountType = () => {
    setForm(prev => ({ ...prev, accountType: 'candidate' }));
    setCompanyStep(false);
<<<<<<< HEAD
    setError('');
=======
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
  };

  return (
    <div className="login-container">
      <div
        className={`form-wrapper ${isExpanded ? 'expanded' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="inner-container">
          <div className="login-header">
            <h2 className="login-title">SIGN UP</h2>
          </div>
        </div>

        {!isExpanded && (
          <button className="initial-button" />
        )}

        <div className="form-content">
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
<<<<<<< HEAD
            {error && <div style={{ color: '#ff4444', marginBottom: '10px', fontSize: '14px' }}>{error}</div>}
            
=======
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
            {/* If a company account and not yet continued, ask for company name first */}
            {form.accountType === 'company' && !companyStep ? (
              <>
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                  <button
                    type="button"
                    onClick={handleBackToAccountType}
                    className="back-arrow"
                    style={{ 
                      position: 'absolute',
                      top: '-50px', 
                      left: '10px', 
                      width: '45px', 
                      height: '45px', 
                      fontSize: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255, 215, 0, 0.15)',
                      border: '2px solid rgba(255, 215, 0, 0.4)',
                      borderRadius: '12px',
                      color: '#FFD700',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: 10
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 215, 0, 0.25)';
                      e.target.style.borderColor = '#FFD700';
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 215, 0, 0.15)';
                      e.target.style.borderColor = 'rgba(255, 215, 0, 0.4)';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    &larr;
                  </button>
                  <input
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Company Name"
                    className="neon-input"
                  />
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <button type="button" className="sign-in-button" style={{ flex: 1 }} onClick={handleCompanyContinue}>Continue</button>
                </div>
              </>
            ) : (
              <>
                {/* Show normal fields (for candidates, or companies after continue) */}
                {form.accountType === 'candidate' && (
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Full Name"
                    className="neon-input"
                  />
                )}

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="neon-input"
                />

                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  className="neon-input"
                />

                <input
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="Confirm Password"
                  className="neon-input"
                />

                <div style={{ display: 'flex', gap: 12, width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label className="radio-label">
                      <input
                        className="radio-input"
                        type="radio"
                        name="accountType"
                        value="candidate"
                        checked={form.accountType === 'candidate'}
                        onChange={handleChange}
                      />
                      I’m a Candidate
                    </label>

                    <label className="radio-label">
                      <input
                        className="radio-input"
                        type="radio"
                        name="accountType"
                        value="company"
                        checked={form.accountType === 'company'}
                        onChange={handleChange}
                      />
                      I’m a Company
                    </label>
                </div>

<<<<<<< HEAD
                <button className="sign-in-button" style={{ marginTop: 16 }} type="submit" disabled={loading}>
                  {loading ? 'Creating account...' : 'Create account'}
                </button>
=======
                <button className="sign-in-button" style={{ marginTop: 16 }} type="submit">Create account</button>
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
                <div className="form-links" style={{ marginTop: 6, justifyContent: 'center' }}>
                  <Link to="/login" className="sign-up-link">Already have an account? Sign in here</Link>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
