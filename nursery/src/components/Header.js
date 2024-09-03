import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './A.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/plants">Plants</Link></li>
            <li><Link to="/seeds">Seeds</Link></li>
            <li><Link to="/pots">Pots</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
        <div>
          <center><span className="logo">‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎   FLORASPOT</span></center>
        </div>
      </div>
    </header>
  );
};

export default Header;
