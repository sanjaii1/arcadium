import styles from "../page.module.css";

export default function Header() {
  return (
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
      <nav className={styles.nav}>
        <a href="#" className={`${styles.navLink} ${styles.active}`}>Home</a>
        <a href="#" className={styles.navLink}>Services</a>
        <a href="#" className={styles.navLink}>Work</a>
        <a href="#" className={styles.navLink}>Team</a>
        <a href="#" className={styles.navLink}>Pricing</a>
        <a href="#" className={styles.navLink}>About</a>
      </nav>
      <button className={styles.headerBtn}>
        <span>Start</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </header>
  );
}
