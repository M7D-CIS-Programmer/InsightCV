import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

function SignupForm() {
  const [isExpanded, setIsExpanded] = useState(false); // collapsed by default, expand on hover like LoginForm
  const [form, setForm] = useState({ fullName: '', companyName: '', email: '', password: '', confirmPassword: '', accountType: 'candidate' });
  const navigate = useNavigate();
  const [companyStep, setCompanyStep] = useState(false);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'accountType') {
      // if switching to candidate, reset company step
      if (value === 'candidate') setCompanyStep(false);
      // if switching to company, clear companyName so user types fresh
      if (value === 'company') setForm((prev) => ({ ...prev, companyName: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // minimal client-side validation
    // if company flow and not yet continued
    if (form.accountType === 'company' && !companyStep) {
      alert('Please enter your company name and press Continue.');
      return;
    }

    if (form.accountType === 'company' && (!form.companyName || form.companyName.trim() === '')) {
      alert('Please enter your company name.');
      return;
    }

    if (form.accountType === 'candidate' && !form.fullName) {
      alert('Please enter your full name.');
      return;
    }

    if (!form.email || !form.password) {
      alert('Please fill email and password.');
      return;
    }

    if (form.password !== form.confirmPassword) {
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
    }
  };

  const handleCompanyContinue = () => {
    if (!form.companyName || form.companyName.trim() === '') {
      alert('Please enter your company name to continue.');
      return;
    }
    setCompanyStep(true);
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
            {/* If a company account and not yet continued, ask for company name first */}
            {form.accountType === 'company' && !companyStep ? (
              <>
                <input
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Company Name"
                  className="neon-input"
                />

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

                <button className="sign-in-button" style={{ marginTop: 16 }} type="submit">Create account</button>
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
