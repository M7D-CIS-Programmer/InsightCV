import React from 'react';
import SignupForm from '../components/SignupForm';
import Navbar from '../components/Navbar';

const SignupPage = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  return (
    <div className="login-page">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <SignupForm />
    </div>
  );
};

export default SignupPage;
