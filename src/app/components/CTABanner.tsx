"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <ScrollReveal distance={50} duration={900}>
        <div className={styles.footerBanner}>
          <ScrollReveal delay={0} distance={30} duration={800}>
            <h2>Innovative solutions for <span className="serif-italic">bold brands</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={150} distance={25} duration={800}>
            <p style={{ marginBottom: "2rem" }}>Contact us for an initial meeting to turn ideas into reality.</p>
          </ScrollReveal>
          <ScrollReveal delay={280} distance={20} duration={800}>
            <button className={styles.headerBtn} style={{ margin: "0 auto" }}>
              Start your project <span>-&gt;</span>
            </button>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
}
