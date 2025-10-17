import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarCompany.css';

export default function NavbarCompany() {
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = (to) => {
    const baseClass = 'navbar-link';
    return location.pathname.includes(to) ? `${baseClass} active` : baseClass;
  };

  return (
    <header className={`navbar-company ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <span>InsightCV</span>
          <span style={{ margin: '0 0.5rem' }}>–</span>
          <span className="gradient-text">Company Dashboard</span>
        </div>
        <nav className="navbar-nav">
          <Link to="/company-home/ads" className={linkClass('/company-home/ads')}>Ads</Link>
          <Link to="/company-home/suggested" className={linkClass('/company-home/suggested')}>Suggested Candidates</Link>
          <Link to="/company-home/edit-info" className={linkClass('/company-home/edit-info')}>Edit Info</Link>
          <Link to="/company-home/logout" className={linkClass('/company-home/logout')}>Logout</Link>
        </nav>
      </div>
    </header>
  );
}
