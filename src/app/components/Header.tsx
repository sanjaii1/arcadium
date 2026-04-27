import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoCircle}></div>
        Avidci
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
        Start your project {"->"}
      </button>
    </header>
  );
}
