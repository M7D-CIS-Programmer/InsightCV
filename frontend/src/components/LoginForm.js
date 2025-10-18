import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css'; // استيراد ملف CSS

function LoginForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };


  return (
    <div className="login-container">
      {/* back arrow removed per request */}
      
      {/* 'form-wrapper' هو العنصر الذي سيقوم بالحركة التمددية والتوهج النيوني */}
      <div 
        className={`form-wrapper ${isExpanded ? 'expanded' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* تم إزالة أيقونة القلب */}
      
      {/* المنطقة الداخلية السوداء */}
      <div className="inner-container">
      {/* عنوان LOGIN */}
      <div className="login-header">
        <h2 className="login-title">LOGIN</h2>
      </div>
      </div>

      {/* الزر الأولي الذي يتحول إلى نموذج. 
        يظهر فقط عندما isExpanded تكون 'false'
      */}
      {!isExpanded && (
        <button className="initial-button">
          {/* لا يوجد نص هنا - النص في login-header */}
        </button>
      )}

      {/* حقول الإدخال والأزرار الإضافية.
        تظهر فقط عندما isExpanded تكون 'true'
      */}
      <div className="form-content">
        <input 
          type="email" 
          placeholder="Email" 
          className="neon-input" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="neon-input" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button 
          className="sign-in-button" 
          onClick={() => {
            // Simulate login - in real app, check credentials from backend
            // For demo: emails ending with @company.com go to company home
            if (email.includes('@company.com')) {
              navigate('/company-home');
            } else {
              navigate('/employee-home');
            }
          }}
        >
          Sign in
        </button>

        <div className="form-links">
          <a href="#" className="forgot-link">Forgot Password</a>
          <Link to="/signup" className="sign-up-link">Sign up</Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LoginForm;
