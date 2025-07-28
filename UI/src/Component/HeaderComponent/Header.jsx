import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </div>

      <header className={`header dark-background ${menuOpen ? 'open' : ''}`}>
        <div className="profile-img">
          <img src="assets/img/img01.jpg" alt="Profile" className="img-fluid rounded-circle" />
        </div>

        <div className="logo">
          <h1 className="sitename">Arpita Seth</h1>
        </div>

        <div className="social-links">
          <a href="https://x.com/sethjii192" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://github.com/arpita4878" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/arpita-seth-3ba54a325" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        </div>

        <nav className="navmenu">
          <ul>
            <li><Link to="/" onClick={toggleMenu}><i className="bi bi-house navicon"></i> Home</Link></li>
            <li><a href="/resume.pdf" download><i className="bi bi-download navicon"></i> Download CV</a></li>
            <li><Link to="/about" onClick={toggleMenu}><i className="bi bi-person navicon"></i> About</Link></li>
            <li><Link to="/resume" onClick={toggleMenu}><i className="bi bi-file-earmark-text navicon"></i> Resume</Link></li>
            <li><Link to="/portfolio" onClick={toggleMenu}><i className="bi bi-images navicon"></i> Portfolio</Link></li>
            <li><Link to="/services" onClick={toggleMenu}><i className="bi bi-hdd-stack navicon"></i> Services</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}><i className="bi bi-envelope navicon"></i> Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
