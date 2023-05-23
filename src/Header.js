// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          { <li>
            {/* <Link to="/Projects" className="nav-link">Projects</Link> */}
          </li>}
          <li>
            <Link to="/Resume" className="nav-link">Resume</Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
