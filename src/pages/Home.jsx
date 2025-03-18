import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <h1>Your Gateway to Technical Career Success</h1>
        <p>Connect with top employers, find internships, and accelerate your career growth</p>
        <div className="cta-buttons">
          <button 
            className="primary-btn"
            onClick={() => navigate('/jobs')}
          >
            Find Jobs
          </button>
          <button 
            className="secondary-btn"
            onClick={() => navigate('/internships')}
          >
            Explore Internships
          </button>
        </div>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>AI-Driven Job Matching</h3>
          <p>Get personalized job recommendations based on your skills and preferences</p>
        </div>
        <div className="feature-card">
          <h3>Mentorship Programs</h3>
          <p>Connect with industry professionals for guidance and support</p>
        </div>
        <div className="feature-card">
          <h3>Career Resources</h3>
          <p>Access tools for resume building and interview preparation</p>
        </div>
      </section>
    </div>
  );
};

export default Home;