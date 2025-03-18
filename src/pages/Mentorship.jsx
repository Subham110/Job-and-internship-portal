import { useState } from 'react';
import '../styles/Mentorship.css';

const Mentorship = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleConnect = (mentor) => {
    setSelectedMentor(mentor);
    setShowModal(true);
  };

  return (
    <div className="mentorship-page">
      <section className="mentorship-hero">
        <h1>Connect with Industry Experts</h1>
        <p>Get guidance from experienced professionals in your field</p>
      </section>

      <div className="mentors-grid">
        <div className="mentor-card">
          <div className="mentor-info">
            <img src="https://ui-avatars.com/api/?name=John+Doe" alt="John Doe" className="mentor-avatar" />
            <div>
              <h3>John Doe</h3>
              <p className="position">Senior Software Engineer at Amazon</p>
            </div>
          </div>
          <div className="expertise">
            <h4>Expertise</h4>
            <div className="tags">
              <span>System Design</span>
              <span>Cloud Architecture</span>
              <span>Leadership</span>
            </div>
          </div>
          <p className="experience">15+ years of experience in software development</p>
          <button 
            className="connect-btn"
            onClick={() => handleConnect({
              name: 'John Doe',
              position: 'Senior Software Engineer at Amazon'
            })}
          >
            Connect
          </button>
        </div>

        <div className="mentor-card">
          <div className="mentor-info">
            <img src="https://ui-avatars.com/api/?name=Sarah+Smith" alt="Sarah Smith" className="mentor-avatar" />
            <div>
              <h3>Sarah Smith</h3>
              <p className="position">Data Science Manager at Microsoft</p>
            </div>
          </div>
          <div className="expertise">
            <h4>Expertise</h4>
            <div className="tags">
              <span>Machine Learning</span>
              <span>Data Analytics</span>
              <span>Team Management</span>
            </div>
          </div>
          <p className="experience">10+ years of experience in data science</p>
          <button 
            className="connect-btn"
            onClick={() => handleConnect({
              name: 'Sarah Smith',
              position: 'Data Science Manager at Microsoft'
            })}
          >
            Connect
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Connect with {selectedMentor.name}</h2>
            <p>{selectedMentor.position}</p>
            <form className="connection-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Current Role</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Briefly describe what you'd like to learn from the mentor..." required></textarea>
              </div>
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Send Request</button>
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mentorship;