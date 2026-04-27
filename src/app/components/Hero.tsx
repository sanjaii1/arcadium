"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      
      <TextReveal delay={0.1} duration={1.2}>
        <h1 className={styles.heroTitle}>
          Building bold brands with <span className="serif-italic">thoughtful design</span>
        </h1>
      </TextReveal>

      <TextReveal delay={0.4} duration={1}>
        <p className={styles.heroSubtitle}>
          We fuse strategy, architecture and user interface engineering to create exceptional impactful digital experiences that move humanity forward.
        </p>
      </TextReveal>

      <TextReveal delay={0.6} duration={0.8}>
        <div className={styles.heroButtons}>
          <button className={styles.primaryBtn}>
            Start project
          </button>
        </div>
      </TextReveal>

      <ScrollReveal delay={800} distance={40} duration={1000}>
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

