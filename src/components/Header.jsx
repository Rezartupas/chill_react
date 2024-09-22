import React from 'react';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="Chill Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#">Series</a></li>
            <li><a href="#">Film</a></li>
            <li><a href="#">Daftar Saya</a></li>
          </ul>
        </nav>
        <div className="profile-avatar">
          <a href="/login.html"><img src={avatar} alt="Profile Avatar" /></a>
        </div>
      </div>
    </header>
  );
};
export default Header;
