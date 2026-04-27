"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <ScrollReveal delay={0} distance={50} duration={900}>
        <h1 className={styles.heroTitle}>
          Building bold brands with <span className="serif-italic">thoughtful design</span>
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={150} distance={40} duration={900}>
        <p className={styles.heroSubtitle}>
          We fuse strategy, architecture and user interface engineering to create exceptional impactful digital experiences that move humanity forward.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={300} distance={30} duration={900}>
        <div className={styles.heroButtons}>
          <button className={styles.primaryBtn}>
            Start project
          </button>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={450} distance={40} duration={900}>
        <div className={styles.heroImageTrack}>
          <img src="/images/agency.png" className={styles.heroTrackImage} alt="Agency Dashboard" />
          <img src="/images/saas.png" className={styles.heroTrackImage} alt="SaaS Interface" />
          <img src="/images/fintech.png" className={styles.heroTrackImage} alt="Fintech App" />
          <img src="/images/health.png" className={styles.heroTrackImage} alt="Health Platform" />
        </div>
      </ScrollReveal>
    </section>
  );
}
