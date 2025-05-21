// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="logo">
          <a href="/" aria-label="Homepage">MySite</a>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`nav-links ${isOpen ? 'open' : ''}`}
          id="navbar-menu"
        >
          <li><a href="/" title="Home page">Home</a></li>
          <li><a href="/services" title="Our Services">Services</a></li>
          <li><a href="/about" title="About Us">About</a></li>
          <li><a href="/contact" title="Contact Us">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
