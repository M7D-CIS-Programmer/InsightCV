<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jobAPI } from '../../services/api';
import { getUser } from '../../utils/auth';
import './RecentAds.css';

export default function RecentAds() {
  const navigate = useNavigate();
  const [recentJobs, setRecentJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentJobs = async () => {
      try {
        const user = getUser();
        if (!user) return;

        const response = await jobAPI.getCompanyJobs(user.id);
        // Get latest 4 jobs
        setRecentJobs(response.jobs.slice(0, 4));
      } catch (error) {
        console.error('Failed to fetch recent jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentJobs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

=======
import React from 'react';
import './RecentAds.css';

const demoAds = [
  { id: 1, title: 'Senior Frontend Engineer', date: '2025-10-10' },
  { id: 2, title: 'Backend Node.js Developer', date: '2025-10-08' },
  { id: 3, title: 'Product Designer (UI/UX)', date: '2025-10-05' },
  { id: 4, title: 'Data Scientist', date: '2025-10-03' },
];

export default function RecentAds() {
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
  return (
    <section className="recent-ads">
      <div className="recent-ads-content">
        <div className="recent-ads-header">
          <h2 className="recent-ads-title">Recent Ads</h2>
<<<<<<< HEAD
          <a href="/company-home/my-jobs" className="recent-ads-link">View all</a>
        </div>
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#FFD700' }}>
            Loading jobs...
          </div>
        ) : recentJobs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
            <p>No jobs posted yet.</p>
            <button 
              onClick={() => navigate('/company-home/post-job')}
              style={{
                marginTop: '20px',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '8px',
                color: '#1a1a2e',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Post Your First Job
            </button>
          </div>
        ) : (
          <div className="recent-ads-grid">
            {recentJobs.map((job) => (
              <div key={job.id} className="recent-ad-card">
                <div className="recent-ad-header">
                  <h3 className="recent-ad-title">{job.title}</h3>
                  <span className="applicants-badge">{job.applicants_count || 0} applicants</span>
                </div>
                <p className="recent-ad-date">Posted on {formatDate(job.created_at)}</p>
                <p className="recent-ad-location">📍 {job.location}</p>
                <div className="recent-ad-actions">
                  <button 
                    className="btn-view"
                    onClick={() => navigate('/company-home/my-jobs')}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
=======
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
>>>>>>> e4b09724d850cc3d873bcf67316913dc41cf11c3
      </div>
    </section>
  );
}
