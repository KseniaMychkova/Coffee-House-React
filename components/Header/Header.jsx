import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import style from './style.module.css'
import Logo from '../../src/assets/image/logo.svg'

function Header() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to={'/'}>
          <img src={Logo} alt="Coffee House Logo" />
        </Link>
      </div>
      <nav className={style.nav}>
        <p onClick={() => scrollToSection('our_favorite_coffee')}>Favorite coffee</p>
        <p onClick={() => scrollToSection('about_us')}>About</p>
        <p onClick={() => scrollToSection('our_apps')}>Mobile app</p>
        <p onClick={() => scrollToSection('our_contacts')}>Contact us</p>
      </nav>
      <div className={style.navigation} onClick={() => navigate('/menu')}>
        <p>Menu</p>
        <div className={style.icon}></div>
      </div>
    </header>
  );
};

export default Header; 