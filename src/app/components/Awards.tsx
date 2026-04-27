"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Awards() {
  return (
    <section className={styles.section}>
      <ScrollReveal distance={40} duration={700}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Accolades and achievements <br /> celebration our design excellence
          </h2>
        </div>
      </ScrollReveal>
      <div className={styles.awardsGrid}>
        {[
          { title: "FWA AWWWD", desc: "Celebrated for crafting edge interaction design and seamless user experiences.", year: "2023" },
          { title: "CSSDA site", desc: "Recognized for best ui/ux selections and innovative design solutions.", year: "2022" },
          { title: "Awwwards", desc: "Honors achievements across design, creativity, usability, and innovation.", year: "2023" },
        ].map((award, i) => (
          <ScrollReveal key={award.title} delay={i * 120} distance={40} duration={750}>
            <div className={styles.awardCard}>
              <h4 className={styles.awardTitle}>{award.title}</h4>
              <p className={styles.awardDesc}>{award.desc}</p>
              <div className={styles.awardYear}>{award.year}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
