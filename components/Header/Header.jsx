import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import style from './style.module.css'
import Logo from '../../src/assets/image/logo.svg'


function Header() {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Link to={'/'}>
            <img src={Logo} alt="Coffee House Logo" />
          </Link>
        </div>
        <nav className={style.nav}>
          <p onClick={() => {
            navigate('/')
            setTimeout(() => scrollToSection('our_favorite_coffee'), 100)
          }
          }>Favorite coffee</p>
          <p onClick={() => {
            navigate('/')
            setTimeout(() => scrollToSection('about_us'), 100)
          }
          }>About</p>
          <p onClick={() => {
            navigate('/')
            setTimeout(() => scrollToSection('our_apps'), 100)
          }
          }>Mobile app</p>
          <p onClick={() => {
            navigate('/')
            setTimeout(() => scrollToSection('our_contacts'), 100)
          }
          }>Contact us</p>
        </nav>
        <div className={style.navigation} onClick={() => navigate('/menu')}>
          <p>Menu</p>
          <div className={style.icon}></div>
        </div>
      </header>

      <div className={style.headerBurger}>
        <div className={style.logo}>
          <Link to={'/'}>
            <img src={Logo} alt="Coffee House Logo" />
          </Link>
        </div>
        <div className={style.burgerMenu}>
          {!flag ?
            <div className={style.burgerBtnOpen}>
              <div className={style.iconOpen} onClick={() => setFlag(!flag)}></div>
            </div>
            :
            <div className={style.burgerBtnClose} onClick={() => setFlag(!flag)}>
              <div className={style.iconClose}></div>
              <div className={style.dropDownMenu}>
                <nav className={style.nav}>
                  <p onClick={() => {
                    navigate('/')
                    setTimeout(() => scrollToSection('our_favorite_coffee'), 100)
                  }
                  }>Favorite coffee</p>
                  <p onClick={() => {
                    navigate('/')
                    setTimeout(() => scrollToSection('about_us'), 100)
                  }
                  }>About</p>
                  <p onClick={() => {
                    navigate('/')
                    setTimeout(() => scrollToSection('our_apps'), 100)
                  }
                  }>Mobile app</p>
                  <p onClick={() => {
                    navigate('/')
                    setTimeout(() => scrollToSection('our_contacts'), 100)
                  }
                  }>Contact us</p>
                </nav>
                <div className={style.navigation} onClick={() => navigate('/menu')}>
                  <p>Menu</p>
                  <div className={style.icon}></div>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </>
  );
};

export default Header; 