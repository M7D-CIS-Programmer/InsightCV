import React from 'react';
import NavbarCompany from '../components/companyHome/NavbarCompany';
import HeroCompany from '../components/companyHome/HeroCompany';
import QuickInfo from '../components/companyHome/QuickInfo';
import RecentAds from '../components/companyHome/RecentAds';
import CTACompany from '../components/companyHome/CTACompany';
import FooterCompany from '../components/companyHome/FooterCompany';
import './CompanyHomePage.css';

export default function CompanyHomePage() {
  return (
    <div className="company-home-page">
      {/* subtle background glow orbs */}
      <div className="company-home-bg">
        <div className="company-home-orb-1" />
        <div className="company-home-orb-2" />
      </div>

      <NavbarCompany />
      <main className="company-home-main">
        <HeroCompany />
        <QuickInfo />
        <RecentAds />
        <CTACompany />
      </main>
      <FooterCompany />
    </div>
  );
}