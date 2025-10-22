import React from 'react';
import './RecentAds.css';

const demoAds = [
  { id: 1, title: 'Senior Frontend Engineer', date: '2025-10-10' },
  { id: 2, title: 'Backend Node.js Developer', date: '2025-10-08' },
  { id: 3, title: 'Product Designer (UI/UX)', date: '2025-10-05' },
  { id: 4, title: 'Data Scientist', date: '2025-10-03' },
];

export default function RecentAds() {
  return (
    <section className="recent-ads">
      <div className="recent-ads-content">
        <div className="recent-ads-header">
          <h2 className="recent-ads-title">Recent Ads</h2>
          <a href="/company-home/ads" className="recent-ads-link">View all</a>
        </div>
        <div className="recent-ads-grid">
          {demoAds.map((ad) => (
            <div key={ad.id} className="recent-ad-card">
              <div className="recent-ad-header">
                <h3 className="recent-ad-title">{ad.title}</h3>
              </div>
              <p className="recent-ad-date">Posted on {ad.date}</p>
              <div className="recent-ad-actions">
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
