import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import '../styles/Jobs.css';

const Jobs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resume: null,
    coverLetter: ''
  });

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new application entry
    const newApplication = {
      ...selectedJob,
      ...formData,
      applicationDate: new Date().toISOString(),
      status: 'pending',
      type: 'job'
    };
    
    // Get existing applications from localStorage
    const existingApplications = JSON.parse(localStorage.getItem('applications') || '[]');
    
    // Add new application to the list
    const updatedApplications = [...existingApplications, newApplication];
    
    // Save to localStorage
    localStorage.setItem('applications', JSON.stringify(updatedApplications));
    
    // Show success notification
    toast.success(
      <div>
        <p>Application submitted successfully!</p>
        <p className="toast-subtitle">We'll notify you about updates soon.</p>
      </div>
    );
    
    // Reset form and close modal
    setFormData({
      fullName: '',
      email: '',
      resume: null,
      coverLetter: ''
    });
    setShowModal(false);
  };

  return (
    <div className="jobs-page">
      <Toaster position="top-right" />
      
      <div className="search-section">
        <input type="text" placeholder="Search jobs..." className="search-input" />
        <select className="filter-select">
          <option value="">All Categories</option>
          <option value="software">Software Development</option>
          <option value="data">Data Science</option>
          <option value="network">Networking</option>
        </select>
      </div>
      
      <div className="jobs-grid">
        <div className="job-card">
          <h3>Senior Software Engineer</h3>
          <p className="company">Tech Corp Ltd.</p>
          <p className="location">New York, NY</p>
          <div className="tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
          <button 
            className="apply-btn"
            onClick={() => handleApply({
              title: 'Senior Software Engineer',
              company: 'Tech Corp Ltd.',
              location: 'New York, NY'
            })}
          >
            Apply Now
          </button>
        </div>
        
        <div className="job-card">
          <h3>Data Scientist</h3>
          <p className="company">AI Solutions Inc.</p>
          <p className="location">Remote</p>
          <div className="tags">
            <span>Python</span>
            <span>TensorFlow</span>
            <span>SQL</span>
          </div>
          <button 
            className="apply-btn"
            onClick={() => handleApply({
              title: 'Data Scientist',
              company: 'AI Solutions Inc.',
              location: 'Remote'
            })}
          >
            Apply Now
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Apply for {selectedJob.title}</h2>
            <p>at {selectedJob.company}</p>
            <form className="application-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Resume</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="4"
                />
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

export default Jobs;