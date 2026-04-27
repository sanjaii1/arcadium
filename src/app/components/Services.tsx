"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section className={styles.section}>
      <ScrollReveal distance={40} duration={700}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Where innovation <br /> meets <span className="serif-italic">ambition</span>
          </h2>
        </div>
      </ScrollReveal>
      <div className={styles.servicesGrid}>
        <ScrollReveal delay={0} distance={40} duration={800}>
          <div className={`${styles.serviceCard} ${styles.cardPink}`}>
            <div className={styles.serviceIcon}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
              </svg>
            </div>
            <div>
              <h4>Brand Strategy</h4>
              <p>Top level strategy planning.</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100} distance={40} duration={800}>
          <div className={`${styles.serviceCard} ${styles.cardBlue}`}>
            <div className={styles.serviceIcon}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" />
              </svg>
            </div>
            <div>
              <h4>Digital Marketing</h4>
              <p>Performance based approach.</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200} distance={40} duration={800}>
          <div className={`${styles.serviceCard} ${styles.cardOrange}`}>
            <div className={styles.serviceIcon}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </div>
            <div>
              <h4>Social Media</h4>
              <p>Organic audience building.</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300} distance={40} duration={800}>
          <div className={`${styles.serviceCard} ${styles.cardGreen}`}>
            <div className={styles.serviceIcon}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
            <div>
              <h4>Performance Marketing</h4>
              <p>Data driven optimization.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={100} distance={30} duration={700}>
        <div className={styles.offerBanner}>
          <p>We are a highly skilled digital agency. Top Rated UX/UI Agency in UK</p>
          <button className={styles.offerBannerBtn}>Work with us</button>
        </div>
      </ScrollReveal>
    </section>
  );
}
