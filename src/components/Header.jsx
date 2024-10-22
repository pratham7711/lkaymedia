import React, { useState, useEffect } from 'react';
import classes from './Header.module.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${classes.header} ${isVisible ? classes.visible : classes.hidden}`}>
      <div className={classes.logo}>lkaymedia</div>
      <input type="checkbox" id="menuToggle" className={classes.menuToggle} />
      <label htmlFor="menuToggle" className={classes.menuButton}>☰</label>
      <nav className={classes.nav}>
        <a href="#about" className={classes.navLink}>About Us</a>
        <a href="#contact" className={classes.navLink}>Contact Us</a>
      </nav>
    </div>
  );
}

export default Header;