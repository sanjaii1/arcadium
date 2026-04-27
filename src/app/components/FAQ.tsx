import styles from "../page.module.css";

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Got questions? <br /> We&apos;ve got answers</h2>
      </div>
      <div className={styles.faqContainer}>
        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>What services does Avidci agency offer? <span>+</span></div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>How long does a typical project take? <span>+</span></div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>How do you handle branding projects? <span>+</span></div>
        </div>
        <div className={`${styles.faqItem} ${styles.open}`}>
          <div className={styles.faqQuestion}>Do you offer ongoing support after project completion? <span>-</span></div>
          <div className={styles.faqAnswer}>
            Absolutely! We offer ongoing support and maintenance packages. Whether it&apos;s post-launch bug fixes, updates, feature enhancements, or regular consultation sessions, we want to ensure your continued success.
          </div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>How can I get started with Avidci agency? <span>+</span></div>
        </div>
      </div>
    </section>
  );
}
