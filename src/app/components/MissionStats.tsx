"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function MissionStats() {
  return (
    <section className={styles.section}>
      <ScrollReveal distance={50} duration={800}>
        <h2 className={styles.missionText}>
          We fuse <span className={styles.highlightPink}>✧ Creativity</span>{" "}
          <span className={styles.highlightBlue}>△ Architecture</span> &amp;{" "}
          <span className={styles.highlightOrange}>✦ UI Strategy</span> to craft
          exceptional, digital experiences strategy and technology to drive
          exceptional, impactful results.
        </h2>
      </ScrollReveal>
      <div className={styles.stats}>
        <ScrollReveal delay={0} distance={40} duration={800} style={{ textAlign: "center" }}>
          <div className={styles.statItem}>
            <h3>40</h3>
            <p>Staff picks accolades</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={120} distance={40} duration={800} style={{ textAlign: "center" }}>
          <div className={styles.statItem}>
            <h3>15</h3>
            <p>Award creatives</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={240} distance={40} duration={800} style={{ textAlign: "center" }}>
          <div className={styles.statItem}>
            <h3>12</h3>
            <p>Total clients</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
