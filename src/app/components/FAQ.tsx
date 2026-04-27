"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function FAQ() {
  return (
    <section className={styles.section}>
      <ScrollReveal distance={40} duration={700}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Got questions? <br /> We&apos;ve got answers</h2>
        </div>
      </ScrollReveal>
      <div className={styles.faqContainer}>
        {[
          { q: "What services does Avidci agency offer?", open: false },
          { q: "How long does a typical project take?", open: false },
          { q: "How do you handle branding projects?", open: false },
          {
            q: "Do you offer ongoing support after project completion?",
            open: true,
            a: "Absolutely! We offer ongoing support and maintenance packages. Whether it's post-launch bug fixes, updates, feature enhancements, or regular consultation sessions, we want to ensure your continued success.",
          },
          { q: "How can I get started with Avidci agency?", open: false },
        ].map((item, i) => (
          <ScrollReveal key={i} delay={i * 80} distance={30} duration={700}>
            <div className={`${styles.faqItem}${item.open ? " " + styles.open : ""}`}>
              <div className={styles.faqQuestion}>
                {item.q} <span>{item.open ? "-" : "+"}</span>
              </div>
              {item.open && item.a && (
                <div className={styles.faqAnswer}>{item.a}</div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
