import styles from "../page.module.css";

export default function Awards() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Accolades and achievements <br /> celebration our design excellence</h2>
      </div>
      <div className={styles.awardsGrid}>
        <div className={styles.awardCard}>
          <h4 className={styles.awardTitle}>FWA AWWWD</h4>
          <p className={styles.awardDesc}>Celebrated for crafting edge interaction design and seamless user experiences.</p>
          <div className={styles.awardYear}>2023</div>
        </div>
        <div className={styles.awardCard}>
          <h4 className={styles.awardTitle}>CSSDA site</h4>
          <p className={styles.awardDesc}>Recognized for best ui/ux selections and innovative design solutions.</p>
          <div className={styles.awardYear}>2022</div>
        </div>
        <div className={styles.awardCard}>
          <h4 className={styles.awardTitle}>Awwwards</h4>
          <p className={styles.awardDesc}>Honors achievements across design, creativity, usability, and innovation.</p>
          <div className={styles.awardYear}>2023</div>
        </div>
      </div>
    </section>
  );
}
