"use client";
import { useState, useEffect } from "react";
import styles from "../page.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoCircle}></div>
          <div className={styles.logoTextContainer}>
            <div className={styles.logoText}>
              <span className="noto-sans">A</span><span className="geist-mono">rcadium</span>
            </div>
            <div className={styles.logoSubtext}>Solutions</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <a href="#" className={`${styles.navLink} ${styles.active}`}>Home</a>
          <a href="#" className={styles.navLink}>Services</a>
          <a href="#" className={styles.navLink}>Work</a>
          <a href="#" className={styles.navLink}>Team</a>
          <a href="#" className={styles.navLink}>Pricing</a>
          <a href="#" className={styles.navLink}>About</a>
        </nav>

        <div className={styles.headerActions}>
          <button className={styles.headerBtn}>
            <span>Start</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Hamburger Menu Icon */}
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            <div className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}></div>
            <div className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}></div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <a href="#" className={styles.mobileNavLink} onClick={toggleMenu}>Home</a>
          <a href="#" className={styles.mobileNavLink} onClick={toggleMenu}>Services</a>
          <a href="#" className={styles.mobileNavLink} onClick={toggleMenu}>Work</a>
          <a href="#" className={styles.mobileNavLink} onClick={toggleMenu}>Team</a>
          <a href="#" className={styles.mobileNavLink} onClick={toggleMenu}>Pricing</a>
          <a href="#" className={styles.mobileNavLink} onClick={toggleMenu}>About</a>
          
          <div className={styles.mobileMenuFooter}>
            <button className={styles.mobileStartBtn} onClick={toggleMenu}>
              Start a Project
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

