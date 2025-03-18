import { useState } from 'react';
import '../styles/Resources.css';

const Resources = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  const handleResourceAction = (resource) => {
    setSelectedResource(resource);
    setShowModal(true);
  };

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <h1>Career Development Resources</h1>
        <p>Everything you need to accelerate your career growth</p>
      </section>

      <div className="resources-grid">
        <div className="resource-section">
          <h2>Resume Building</h2>
          <div className="resource-cards">
            <div className="resource-card">
              <h3>Resume Templates</h3>
              <p>Professional templates for different career stages</p>
              <button 
                className="access-btn"
                onClick={() => handleResourceAction({
                  title: 'Resume Templates',
                  type: 'templates'
                })}
              >
                Access Templates
              </button>
            </div>
            <div className="resource-card">
              <h3>Resume Review</h3>
              <p>Get your resume reviewed by experts</p>
              <button 
                className="access-btn"
                onClick={() => handleResourceAction({
                  title: 'Resume Review',
                  type: 'review'
                })}
              >
                Submit Resume
              </button>
            </div>
          </div>
        </div>

        <div className="resource-section">
          <h2>Interview Preparation</h2>
          <div className="resource-cards">
            <div className="resource-card">
              <h3>Technical Interview Guide</h3>
              <p>Common questions and best practices</p>
              <button 
                className="access-btn"
                onClick={() => handleResourceAction({
                  title: 'Technical Interview Guide',
                  type: 'guide'
                })}
              >
                Read Guide
              </button>
            </div>
            <div className="resource-card">
              <h3>Mock Interviews</h3>
              <p>Practice with industry professionals</p>
              <button 
                className="access-btn"
                onClick={() => handleResourceAction({
                  title: 'Mock Interviews',
                  type: 'interview'
                })}
              >
                Schedule Session
              </button>
            </div>
          </div>
        </div>

        <div className="resource-section">
          <h2>Skill Development</h2>
          <div className="resource-cards">
            <div className="resource-card">
              <h3>Online Courses</h3>
              <p>Curated courses for in-demand skills</p>
              <button 
                className="access-btn"
                onClick={() => handleResourceAction({
                  title: 'Online Courses',
                  type: 'courses'
                })}
              >
                Browse Courses
              </button>
            </div>
            <div className="resource-card">
              <h3>Coding Practice</h3>
              <p>Practice problems and challenges</p>
              <button 
                className="access-btn"
                onClick={() => handleResourceAction({
                  title: 'Coding Practice',
                  type: 'practice'
                })}
              >
                Start Practice
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedResource.title}</h2>
            {selectedResource.type === 'templates' && (
              <div className="templates-grid">
                <div className="template-item">
                  <h3>Entry Level Template</h3>
                  <button className="download-btn">Download</button>
                </div>
                <div className="template-item">
                  <h3>Mid Level Template</h3>
                  <button className="download-btn">Download</button>
                </div>
                <div className="template-item">
                  <h3>Senior Level Template</h3>
                  <button className="download-btn">Download</button>
                </div>
              </div>
            )}
            {selectedResource.type === 'review' && (
              <form className="resource-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required />
                </div>
                <div className="form-group">
                  <label>Resume</label>
                  <input type="file" accept=".pdf,.doc,.docx" required />
                </div>
                <div className="form-group">
                  <label>Additional Notes</label>
                  <textarea rows="4"></textarea>
                </div>
              </form>
            )}
            {selectedResource.type === 'guide' && (
              <div className="guide-content">
                <h3>Technical Interview Topics</h3>
                <ul className="guide-list">
                  <li>Data Structures & Algorithms</li>
                  <li>System Design</li>
                  <li>Object-Oriented Programming</li>
                  <li>Database Concepts</li>
                  <li>Web Technologies</li>
                </ul>
                <button className="download-btn">Download Full Guide</button>
              </div>
            )}
            {selectedResource.type === 'interview' && (
              <form className="resource-form">
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label>Time Slot</label>
                  <select required>
                    <option value="">Select a time</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Interview Type</label>
                  <select required>
                    <option value="">Select type</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="system">System Design</option>
                  </select>
                </div>
              </form>
            )}
            {selectedResource.type === 'courses' && (
              <div className="courses-grid">
                <div className="course-item">
                  <h3>React Fundamentals</h3>
                  <p>Master React.js core concepts</p>
                  <button className="enroll-btn">Enroll Now</button>
                </div>
                <div className="course-item">
                  <h3>Node.js Advanced</h3>
                  <p>Build scalable backend applications</p>
                  <button className="enroll-btn">Enroll Now</button>
                </div>
                <div className="course-item">
                  <h3>Cloud Computing</h3>
                  <p>AWS and cloud architecture</p>
                  <button className="enroll-btn">Enroll Now</button>
                </div>
              </div>
            )}
            {selectedResource.type === 'practice' && (
              <div className="practice-content">
                <div className="difficulty-selector">
                  <button className="difficulty-btn">Easy</button>
                  <button className="difficulty-btn">Medium</button>
                  <button className="difficulty-btn">Hard</button>
                </div>
                <div className="practice-problems">
                  <div className="problem-item">
                    <h3>Two Sum</h3>
                    <p>Find two numbers that add up to a target</p>
                    <button className="solve-btn">Solve Now</button>
                  </div>
                  <div className="problem-item">
                    <h3>Binary Search</h3>
                    <p>Implement binary search algorithm</p>
                    <button className="solve-btn">Solve Now</button>
                  </div>
                </div>
              </div>
            )}
            <div className="modal-buttons">
              {selectedResource.type !== 'guide' && (
                <button type="submit" className="submit-btn">Submit</button>
              )}
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;