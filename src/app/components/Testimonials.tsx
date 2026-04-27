"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <ScrollReveal distance={40} duration={700}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            What our satisfied customers <br /> are saying about us
          </h2>
        </div>
      </ScrollReveal>
      <div className={styles.testiGrid}>
        <ScrollReveal delay={0} distance={50} duration={800}>
          <div className={styles.testiCard}>
            <p className={styles.testiQuote}>
              &quot;Avidci&apos;s expertise transformed our website&apos;s user experience natively, translating into an exceptional uplift in engagement.&quot;
            </p>
            <div className={styles.testiAuthor}>
              <img src="/images/team1.png" className={styles.testiAuthorImg} alt="Author" />
              <div>
                <strong>Mark Lee</strong>
                <div style={{ fontSize: "12px", opacity: 0.7 }}>CEO at TechCorp</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150} distance={50} duration={800}>
          <div className={`${styles.testiCard} ${styles.testiCardYellow}`}>
            <div className={styles.testiStat}>91%</div>
            <p>users recommend our under service.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={80} distance={50} duration={800}>
          <div className={styles.testiCardLight}>
            <p className={styles.testiQuote}>
              &quot;In our core business, we process a large amount of feedback for different product iterations and test various hypotheses.&quot;
            </p>
            <div className={styles.testiAuthor} style={{ marginTop: "1rem" }}>
              <div>
                <strong>Jane Doe</strong>
                <div style={{ fontSize: "12px", opacity: 0.7 }}>Product Manager</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
