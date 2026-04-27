import styles from "../page.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerCol}>
          <div className={styles.logo} style={{ marginBottom: '1rem' }}>
            <div className={styles.logoCircle}></div>
            Avidci
          </div>
          <p className={styles.footerDesc}>Impacting design to win through digital service, innovation and strategy altogether.</p>
          <div className={styles.footerSocials}>
            <span>Fb</span> <span>Tw</span> <span>In</span> <span>Ig</span>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h4>Menu</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Work</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Company</h4>
          <ul>
            <li>Careers</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Get in Touch</h4>
          <ul>
            <li>45 Business Ave, London UK</li>
            <li>hello@avidci.agency</li>
            <li>+44 (0) 123 4567</li>
          </ul>
        </div>
      </footer>
      <div className={styles.footerBottom} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-light)', fontSize: '0.875rem' }}>
        © 2024 Avidci. All rights reserved.
      </div>
    </>
  );
}
