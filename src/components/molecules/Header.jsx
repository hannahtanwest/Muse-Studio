import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '/public/logo.png';
import styles from './Header.module.css';
import Link from 'next/link';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa6';

export default function Header() {

  // on scroll -> hvis baggrund 
  const [scrolled, setScrolled] = useState(false);

  // Burger menu mobile 
  const [showMenu, setShowMenu] = useState(false);

  // når der bliver scrollet længere end 70px ned af siden for navigationen en hvid baggrund
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Closes Menu when link is clicked
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className={`${styles.container} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="./">
        <Image src={logo} alt="Muse Logo" width={150} />
      </Link>

      <div
        className={`${styles.burgerMenu} ${showMenu ? styles.showMenu : ''}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      
      </div>

      <div className={`${styles.rightSide} ${showMenu ? styles.showMenu : ''}`}>

          {/* Close button */}
          {showMenu && (
          <div className={styles.closeBtn} onClick={() => setShowMenu(false)}>
            &times;
          </div>
        )}

        <Link href="./wwo" className={styles.navLink} onClick={closeMenu}>
          <p className={styles.hoverLink}>WHAT WE OFFER</p>
        </Link>
        <Link href="./cases" className={styles.navLink} onClick={closeMenu}>
          <p className={styles.hoverLink}>CASES</p>
        </Link>
        <Link href="./about" className={styles.navLink} onClick={closeMenu}>
          <p className={styles.hoverLink}>ABOUT</p>
        </Link>
        <Link href="./contact" className={styles.navLink} onClick={closeMenu}>
          <p className={styles.hoverLink}>CONTACT</p>
        </Link>
      </div>
    </div>
  );
}
