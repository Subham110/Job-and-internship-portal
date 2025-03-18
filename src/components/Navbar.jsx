import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">TechCareer Hub</Link>
      </div>
      <div className="nav-links">
        <Link to="/jobs">Jobs</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/mentorship">Mentorship</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/profile" className="profile-btn">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;