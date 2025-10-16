import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';

const LoginPage = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  return (
    <div className="login-page">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
