import { useState, useEffect } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  useEffect(() => {
    // Load applications from localStorage
    const savedApplications = JSON.parse(localStorage.getItem('applications') || '[]');
    setApplications(savedApplications);
  }, []);

  // Filter applications based on status and type
  const filteredApplications = applications.filter(app => {
    const statusMatch = filter === 'all' || app.status === filter;
    const typeMatch = typeFilter === 'all' || app.type === typeFilter;
    return statusMatch && typeMatch;
  });

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-info">
          <img 
            src="https://ui-avatars.com/api/?name=John+Smith&size=128" 
            alt="Profile" 
            className="profile-avatar"
          />
          <div className="profile-details">
            <h1>John Smith</h1>
            <p>Software Engineer | React Developer</p>
            <p className="location">San Francisco, CA</p>
          </div>
        </div>
      </div>

      <div className="profile-nav">
        <button 
          className={`nav-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button 
          className={`nav-btn ${activeTab === 'applications' ? 'active' : ''}`}
          onClick={() => setActiveTab('applications')}
        >
          Application History
        </button>
        <button 
          className={`nav-btn ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          Saved Jobs
        </button>
        <button 
          className={`nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      <div className="profile-content">
        {activeTab === 'profile' && (
          <div className="profile-section">
            <div className="section-card">
              <h2>About Me</h2>
              <p>Passionate software engineer with 5+ years of experience in web development. Specialized in React and modern JavaScript frameworks.</p>
            </div>
            
            <div className="section-card">
              <h2>Skills</h2>
              <div className="skills-grid">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">AWS</span>
              </div>
            </div>

            <div className="section-card">
              <h2>Experience</h2>
              <div className="experience-item">
                <h3>Senior Frontend Developer</h3>
                <p className="company-name">Tech Solutions Inc.</p>
                <p className="duration">2020 - Present</p>
                <p>Led the frontend development team in building scalable web applications using React and TypeScript.</p>
              </div>
              <div className="experience-item">
                <h3>Software Engineer</h3>
                <p className="company-name">Digital Innovations Ltd</p>
                <p className="duration">2018 - 2020</p>
                <p>Developed and maintained multiple client-facing applications.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="applications-section">
            <div className="section-card">
              <h2>Application History</h2>
              <div className="application-filters">
                <select 
                  className="filter-select"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="interview">Interview</option>
                  <option value="rejected">Rejected</option>
                </select>
                <select 
                  className="filter-select"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="job">Jobs</option>
                  <option value="internship">Internships</option>
                </select>
              </div>
              <div className="applications-list">
                {filteredApplications.map((application, index) => (
                  <div key={index} className="application-item">
                    <div className="application-header">
                      <div>
                        <h3>{application.title}</h3>
                        <p className="company-name">{application.company}</p>
                        <p className="application-meta">
                          {application.location} • {application.type === 'job' ? 'Full-time' : 'Internship'}
                        </p>
                      </div>
                      <span className={`status-badge ${application.status.toLowerCase()}`}>
                        {application.status}
                      </span>
                    </div>
                    <div className="application-footer">
                      <span className="application-date">
                        Applied: {new Date(application.applicationDate).toLocaleDateString()}
                      </span>
                      <button className="view-details-btn">View Details</button>
                    </div>
                  </div>
                ))}
                {filteredApplications.length === 0 && (
                  <p className="no-applications">No applications found matching the selected filters.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="saved-jobs-section">
            <div className="saved-job-card">
              <h3>Full Stack Developer</h3>
              <p className="company">Amazon</p>
              <p className="location">Seattle, WA</p>
              <button className="apply-btn">Apply Now</button>
            </div>

            <div className="saved-job-card">
              <h3>React Native Developer</h3>
              <p className="company">Meta</p>
              <p className="location">Remote</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="settings-section">
            <div className="section-card">
              <h2>Account Settings</h2>
              <form className="settings-form">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value="john.smith@example.com" readOnly />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" value="+1 (555) 123-4567" readOnly />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" value="San Francisco, CA" readOnly />
                </div>
                <button type="button" className="edit-btn">Edit Profile</button>
              </form>
            </div>

            <div className="section-card">
              <h2>Notification Preferences</h2>
              <div className="notification-settings">
                <div className="notification-option">
                  <label>
                    <input type="checkbox" checked readOnly />
                    Job Recommendations
                  </label>
                </div>
                <div className="notification-option">
                  <label>
                    <input type="checkbox" checked readOnly />
                    Application Updates
                  </label>
                </div>
                <div className="notification-option">
                  <label>
                    <input type="checkbox" checked readOnly />
                    Mentor Messages
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;