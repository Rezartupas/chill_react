import React from 'react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={logo} alt="Chill Logo" />
        <p>&copy; 2024 Chill. All rights reserved.</p>
        <ul>
          <li><a href="#">Film Genres</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
