import { useState } from 'react';
import '../styles/Internships.css';

const Internships = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);

  const handleApply = (internship) => {
    setSelectedInternship(internship);
    setShowModal(true);
  };

  return (
    <div className="internships-page">
      <div className="search-filters">
        <input type="text" placeholder="Search internships..." className="search-input" />
        <select className="duration-filter">
          <option value="">Duration</option>
          <option value="2-months">2 Months</option>
          <option value="3-months">3 Months</option>
          <option value="6-months">6 Months</option>
        </select>
        <select className="type-filter">
          <option value="">Type</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="remote">Remote</option>
        </select>
      </div>

      <div className="internships-grid">
        <div className="internship-card">
          <div className="card-header">
            <h3>Software Development Intern</h3>
            <span className="duration">3 Months</span>
          </div>
          <p className="company">Google</p>
          <p className="location">Mountain View, CA</p>
          <div className="tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
          </div>
          <p className="stipend">Stipend: $5000/month</p>
          <button 
            className="apply-btn"
            onClick={() => handleApply({
              title: 'Software Development Intern',
              company: 'Google'
            })}
          >
            Apply Now
          </button>
        </div>

        <div className="internship-card">
          <div className="card-header">
            <h3>Data Science Intern</h3>
            <span className="duration">6 Months</span>
          </div>
          <p className="company">Microsoft</p>
          <p className="location">Remote</p>
          <div className="tags">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>SQL</span>
          </div>
          <p className="stipend">Stipend: $4500/month</p>
          <button 
            className="apply-btn"
            onClick={() => handleApply({
              title: 'Data Science Intern',
              company: 'Microsoft'
            })}
          >
            Apply Now
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Apply for {selectedInternship.title}</h2>
            <p>at {selectedInternship.company}</p>
            <form className="application-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>University</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Resume</label>
                <input type="file" accept=".pdf,.doc,.docx" required />
              </div>
              <div className="form-group">
                <label>Cover Letter</label>
                <textarea rows="4"></textarea>
              </div>
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Submit Application</button>
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internships;