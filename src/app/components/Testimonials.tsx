import styles from "../page.module.css";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>What our satisfied customers <br /> are saying about us</h2>
      </div>
      <div className={styles.testiGrid}>
        <div className={styles.testiCard}>
          <p className={styles.testiQuote}>&quot;Avidci&apos;s expertise transformed our website&apos;s user experience natively, translating into an exceptional uplift in engagement.&quot;</p>
          <div className={styles.testiAuthor}>
            <img src="/images/team1.png" className={styles.testiAuthorImg} alt="Author" />
            <div>
              <strong>Mark Lee</strong>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>CEO at TechCorp</div>
            </div>
          </div>
        </div>
        <div className={`${styles.testiCard} ${styles.testiCardYellow}`}>
          <div className={styles.testiStat}>91%</div>
          <p>users recommend our under service.</p>
        </div>
        <div className={styles.testiCardLight}>
          <p className={styles.testiQuote}>&quot;In our core business, we process a large amount of feedback for different product iterations and test various hypotheses.&quot;</p>
          <div className={styles.testiAuthor} style={{ marginTop: '1rem' }}>
            <div>
              <strong>Jane Doe</strong>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>Product Manager</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
