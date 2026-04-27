import styles from "../page.module.css";

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.footerBanner}>
        <h2>Innovative solutions for <span className="serif-italic">bold brands</span></h2>
        <p style={{ marginBottom: '2rem' }}>Contact us for an initial meeting to turn ideas into reality.</p>
        <button className={styles.headerBtn} style={{ margin: '0 auto' }}>
          Start your project <span>-&gt;</span>
        </button>
      </div>
    </section>
  );
}
